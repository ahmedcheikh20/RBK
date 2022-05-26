import React from "react";

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <ul>
    {/* mapping over the repos props and displaying the important information for each repo*/}
    {props.repos.map((repo) => <li>
      <p>Username: {repo.username} </p>
      <a href={repo.url} target="_blank">{repo.name}</a>
    </li>)}
    </ul>
  </div>
);

export default RepoList;
