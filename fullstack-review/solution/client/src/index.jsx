import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Search from "./components/Search.jsx";
import RepoList from "./components/RepoList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }

  componentDidMount() {
    //inside the life cycle method that is called once before the component renders
    //fetching last 25 repositories via a get request to the /repos endpoint
    $.get('/repos').then(repos => {
      //updating the state with received results from the server
      this.setState({repos})
    })
  }

  search(term) {
    console.log(`${term} was searched`);
    // making a post request to /repos endpoint with the term stored from the Search component
    $.post('/repos', {username: term}).then(results => {
      //updating the state with received results from the server
      this.setState({repos: results})
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
