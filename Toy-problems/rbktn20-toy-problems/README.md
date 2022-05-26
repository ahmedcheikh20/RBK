# Toy Problems

Welcome to Toy Problems. This repository will be updated every morning with a new
code challenge.

Feel free to use Google to aid you in solving the coding challenges!

## Getting a Copy of the Repo

If you haven't already, fork the repository on GitHub and clone your newly created
repo down to your computer.

## Using this Repository

Make sure that node.js is installed on your machine by running this command:
  > node -v 

A specific test was made for each problem. 
To run the test run this command:

  > npm run test nameOFtheToyProblem/nameOFtheToyProblem.test.js

Do your best make all the test passed before pushing your solution.

## Submitting your Solutions

**VERY IMPORTANT: Before submitting your solutions, find and fix all syntax errors**

Solutions are submitted via [Pull Request](https://help.github.com/articles/using-pull-requests). Follow these steps:

1. From **your fork**, select `Pull Requests` and then create a `New pull request`.
2. STOP. *Before* you `Click to create a pull request for this comparison` you must **adjust the target branch** (aka `base branch`) to be your username. Once changed, the pull-request heading should look like this:

  > RBK-TN:username ... username:master

3. Click `Send pull request`

## Updating the Repository

Every morning, when a new toy problem is added, you'll need to sync your version of
the repo with RBK's. Git won't automatically pull in upstream changes for
you; it trusts that you'll pull them in as needed. Do so by giving Git a reference
to RBK's version of the repo:

    git remote add upstream https://github.com/RBK-TN/rbktn##-toy-problems.git

  > Be sure to substitue `##` with your actual cohort prefix where ## is your cohort number (ex: 03)

After you've done that, updating your repo is as simple as running the following:

    git checkout master       // Your fork's master branch
    git pull upstream master  // Your class's master branch

This will check out your branch and tell git to grab any changes made to the main
repository and merge them into your branch.

## Resolving Spectator's Unmergeable Pull Request

You may encounter a scenario where Spectator will not merge your pull request. This
often happens as a result of your upstream branch becoming out of sync with your
local copy. To resolve this problem, run:

    git pull upstream <your-branch-name>

Resolve any conflicts, merge, commit and push. You will then be able to submit a
Pull Request that will get correctly merged.
