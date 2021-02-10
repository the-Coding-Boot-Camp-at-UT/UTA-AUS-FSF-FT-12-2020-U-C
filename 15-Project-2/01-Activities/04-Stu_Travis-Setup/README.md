# Travis Setup

In this activity we will set up the project repo with Travis CI to ensure that linting passes on all changes before they can be merged into main.

## Instructions

* Only the owner of the project repo should complete this activity, other group members should watch.

### Part 1: Protecting main

* Before we can set up Travis, we must configure the project repo to protect the main branch.

* Navigate to the repo's page, then click the "Settings" tab.

* Select "Branches" from the left sidebar.

* Under "Branch protection rules", choose "main" from the dropdown.

* Check off the following options:

  * "Protect this branch"

  * "Require pull request reviews before merging"

  * "Include administrators"

  * "Require status checks to pass before merging"

  * "Require branches to be up to date before merging"

* Click "Save changes"

### Part 2: Add Travis

* Navigate to <https://github.com/marketplace/travis-ci>.

* Select the option to "Set up a new plan" and choose the $0 "Open Source" plan when prompted.

* Click "Install it for free" and then on the next page click "Complete order and begin installation".

* On the next page select the radio button that reads "Only select repositories".

* From the "Select repositories" dropdown, choose your project repo.

* Click the "Install" button to complete the process.

* In the [starter code](`../../../14-Full-Stack/04-Important/Sequelize-Passport-Example`), note that there is a `travis.yml` file that specifies the steps of the build process. 

* Make a small change to the project, add, commit, and push your code to ensure that Travis runs the linter.