const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/github-fetcher");

let repoSchema = mongoose.Schema({
    //designing the schema for the repos collection with required properties
    id: {
        type: Number,
        unique: true
    },
    username: String,
    name: String,
    url: String,
    created_at: Date,
});

let Repo = mongoose.model("Repo", repoSchema);

let save = (repos) => {
    //returning a promise that resolves on the collection of added repositories to the database
    return Repo.insertMany(repos)
};
const findRepos = (username) => {
    //creating a variable to hold the filter passed to the find method, 
    //based on the value of username
    const filter = username ? {username} : {}
    // returning a promise that resolves on the last 25 created repositories 
    //from the database if no username is passed
    //or the 25 last repositories for the given username
    return Repo.find(filter).sort({created_at: -1}).limit(25)
}

module.exports.save = save;
module.exports.findRepos = findRepos;
