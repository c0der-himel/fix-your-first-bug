# Your First Contribution

This project aims to simplify and guide the way beginners make their first contribution. If you are looking to make your first contribution, follow the steps below.

## Fork this repository

<img align="right" width="300" src="./src/assets/images/README/fork1.png" alt="fork repository" />

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository

<img align="right" width="300" src="./src/assets/images/README/clone1.png" alt="clone repository" />

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

<img align="right" width="300" src="./src/assets/images/README/clone2.png" alt="copy URL to clipboard" />

For example:

```
git clone https://github.com/c0der-himel/fix-your-first-bug.git
```

where `this-is-you` is your GitHub username. Here you're copying the contents of the fix-your-first-bug repository on GitHub to your computer.

## Create a branch

Now create a branch using the `git checkout` command:

```
git checkout -b your-new-branch-name
```

For example:

```
git checkout -b bug-fix
```

(You can name the brach what ever you want. It doesn't matter.)
