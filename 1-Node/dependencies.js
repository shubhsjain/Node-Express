// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (store importent info about project/package)
// manual approach (create package.json in root, creates properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4, [5]]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

// DEV DEPENEDENCIES
// NODEMON  = ITS THE DEVDEPENDENCIEY WHICH RESTARTS OUR PROJECT
// npm i nodemon -D

// to run dev nodemon - npm run dev

console.log("hello world!");
