// import { readFile, writeFile } from "fs";    /** ES6 module */

const { readFile, writeFile } = require("fs"); /** common JS */

console.log("START");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("DONE WITH THIS TASK");
      }
    );
  });
});
console.log("STARTING NEXT TASK");

/**
 *      SYNC VS ASYNC
 * THIS IS ASYNC
 * STARTING THE FIRST THEN STARTING THE SECOND THEN FINISHING THE FIRST THEN SECOND
 */
