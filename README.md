# DSEP - Trainings and Courses

This project provides open interoperable specifcations for creating decentralized skills and education networks. It is an adaptation of beckn protocol core specification with added taxonomies and sample network policies for the skills and education sector.

This repository is specifically for Training and Courses.

<hr>

# Installation Steps :walking:

## 1. Fork it :fork_and_knife:

You can get your own fork/copy of [DSEP-UI](https://github.com/Samagra-Development/dsep-ui) by using the <kbd><b>Fork</b></kbd> button.

## 2. Clone it :busts_in_silhouette:

You need to clone (download) it to a local machine using

```sh
git clone https://github.com/Your_Username/dsep-ui.git
```

> This makes a local copy of the repository in your machine.

Once you have cloned the `DSEP-UI` repository in GitHub, move to that folder first using the change directory command.

```sh
# This will change directory to a folder dsep-ui
cd dsep-ui
```

Move to this folder for all other commands.

## 3. Set it up :arrow_up:

Run the following commands to see that _your local copy_ has a reference to _your forked remote repository_ in GitHub :octocat:

```sh
git remote -v
origin  https://github.com/Your_Username/dsep-ui.git (fetch)
origin  https://github.com/Your_Username/dsep-ui.git (push)
```

Now, add a reference to the original [DSEP-UI](https://github.com/Samagra-Development/dsep-ui) repository using

```sh
git remote add upstream https://github.com/Samagra-Development/dsep-ui.git
```

> This adds a new remote named **_upstream_**.

See the changes using

```sh
git remote -v
origin    https://github.com/Your_Username/dsep-ui.git (fetch)
origin    https://github.com/Your_Username/dsep-ui.git (push)
upstream  https://github.com/Samagra-Development/dsep-ui.git (fetch)
upstream  https://github.com/Samagra-Development/dsep-ui.git (push)
```

## 4. Run it :checkered_flag:

Using Yarn (preferable)
```sh
# Check out to the frontend code
cd apps/client

# To install all the dependencies
yarn

# To start the application
yarn start
```

**OR**

using NPM
```sh
# Check out to the frontend code
cd apps/client

# To install all the dependencies
npm install

# To start the application
npm start
```
The React application will start on port 5173.
Go to: http://localhost:5173


<a id=contributers></a>

# Contributers

<a href="https://github.com/Samagra-Development/dsep-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Samagra-Development/dsep-ui" />
</a>

<a id=license></a>

# 📝 License

This project follows the [MIT License](LICENSE).
