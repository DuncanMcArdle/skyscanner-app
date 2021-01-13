# Skyscanner full-stack recruitment test

This React application was created in response to [the Skyscanner full-stack recruitment test](https://github.com/Skyscanner/full-stack-recruitment-test), and was completed within a 3 hour windows in accordance with the details at the above link.

The application takes a supplied JSON file of itineraries and displays it in a way that resembles the provided design file (see link above or `designs/results-small.png`).

The application is written in JavaScript ([React](https://reactjs.org/)), with [Jest](https://github.com/facebook/jest 'Jest') used for automated testing and various design elements from [Backpack](https://backpack.github.io/).

## Installation & Running

To run the app, first clone the repo to your local machine. Next, browse to the repo's source folder in a command prompt (or preferably, using VSCode), and do the following:

1. Run `npm install` to install and build the solution
2. Run `npm start` to start the application

If all goes well, it should look like this (note that as per the requirements it is only intended for viewing on a 480px wide screen):

![A sample screenshot of the app](https://i.imgur.com/iplK4h4.png)

## Linting & Testing

The application is configured for usage with ESLint, Prettier and Jest, all of which are covered by the package file. However, for a full experience, it is recommended that you also install these extensions in your IDE (the recommended IDE for this project is Visual Studio Code).

Linting is automatically run before testing, so to perform both, simply run `npm test`.
