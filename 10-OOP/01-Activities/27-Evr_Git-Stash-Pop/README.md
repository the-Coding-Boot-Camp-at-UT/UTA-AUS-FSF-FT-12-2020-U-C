# Git Stash

You've been using Git for some time now, adding new tools to your Git skills each week. Now you'll learn how to take advantage of the useful `git stash` feature.

Imagine that you're busy implementing a sign-up component on your team's web application when your manager asks you to stop what you're doing and add a notification to the homepage. You'll need to checkout to a different feature branch to change tasks, but you don't want to commit your half-completed work on the sign-up page. You also don't want to cause any errors by trying to checkout to a different branch with unsaved changes. 

That's where `git stash` comes in! As the name suggests, this command adds your uncommited changes to a stash that you can access later. This stash is stored locally on your machine and doesn't get pushed up to Github or any other version control system.

## Use git stash in a Demo

**Important:** If you haven't done so already, change your default branch name to `main` with the following command:

```sh
git config --global init.defaultBranch main
```

Create a new repository called `stashPop` using the following commands:

```sh
mkdir stashPop
cd stashPop
git init
```

Create and commit a new `README.md` file with the following commands:

```sh
touch README.md
git add .
git commit -m "initial commit"
```

Checkout a new branch called `dev` and create a new file with the following commands:

```sh
git checkout -b dev 
touch newFile.js
```

Add and commit the new file with the following commands:

```sh
git add newFile.js
git commit -m "newFile is tracked in dev"
```

Now that we have a `newFile.js` file that is being tracked in the `dev` branch, let's checkout to `main` and verify the files with the following commands:

```sh
git checkout main
ls
```

Notice that we don't have a `newFile.js` file in `main`, so let's create one with the following command:

```sh
touch newFile.js
```

Let's say that we're not ready to commit this file to `main` yet, but we need to switch to the `dev` branch again. Try to do so with the following command:

```sh
git checkout dev
```

Git will prevent you from switching branches, displaying the following error message:

```text
error: The following untracked working tree files would be overwritten by checkout: newFile.js
Please move or remove them before you switch branches.
Aborting
```

This happens because we have a conflicting file (`newFile.js`) that would be overwritten by the checkout. If we were to commit `newFile.js`, then Git would know to swap them out, but we're not ready to commit yet.

We will use `git stash` to put away our changes so that we can checkout the `dev` branch. Run the following commands to discover what happens:

```sh
git stash -u
ls
```

The `-u` flag tells Git to include untracked files in our stash. `newFile.js` has now been put away, so we can safely checkout to `dev` with the following command:

```sh
git checkout dev
```

Don't worry, the stash isn't lost. We can use additional commands to bring those changes back. Run the following commands to see this in action:

```sh
git checkout main
git stash pop
```

The command `git stash pop` will pull the latest stash off the stack and reapply its changes. Other useful `stash` commands include the following:

  * `git stash drop`&mdash;Delete the latest stash from the stack.

  * `git stash apply`&mdash;Apply your stashed changes, but also keep a copy in the stack.

  * `git stash clear`&mdash;Clear all stashed entries from the stack.

## Review

Nice work! You've used the `git stash` command to set aside some untracked files so that you could checkout to a different branch. The most common use case for the `stash` command will likely be when you're working with a group and performing a `git pull`. Now you're ready to use this powerful command.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.