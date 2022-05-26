const express = require("express");
const app = express();
const {save, findRepos} = require('../database/index')
const {getReposByUsername} = require('../helpers/github')
app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.post("/repos", function (req, res) {
  const username = req.body.username
  //making a request to github API to get all repositories for the provided username
  getReposByUsername(username).then(response => {
    //after getting the data, reshape it to hold only the needed information
    const repos = response.data.map(repo => {
      return {
        id: repo.id,
        name: repo.name,
        username: repo.owner.login,
        url: repo.html_url,
        created_at: repo.created_at
      }
    })
    //save the reshaped repositories to the database using save method
    return save(repos)
  }).then(results => {
    //resolving with a success while storing the repositories to the database,
    //send the collection of documents as a json format of an array of objects.
    res.status(201).json(results)
  }).catch(err => {
    if(err.code === 11000) {
      //if the repositories already exist in the database,
      //query the database for those matching the passed username
      //and send that collection to the client side
      findRepos(username).then(repos => {res.status(200).json(repos)})
    } else {
      //send the error if there was a problem during the process.
      res.status(500).send(err)
    }
  })
});

app.get("/repos", function (req, res) {
  //fetch the last 25 repositories stored in the database
  //and send the results or the error to the client side with the respective status code.
  findRepos().then(repos => {res.status(200).json(repos)}).catch(err => {res.status(500)})
});

const port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
