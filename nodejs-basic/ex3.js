/**
 *  비동기 및 순서 보장 - callback 패턴
 *
 */
const fs = require("fs");

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());

  fs.readFile("./readme.txt", (err, data) => {
    if (err) {
      throw err;
    }
    console.log("2번", data.toString());

    fs.readFile("./readme.txt", (err, data) => {
      if (err) {
        throw err;
      }
      console.log("3번", data.toString());

      fs.readFile("./readme.txt", (err, data) => {
        if (err) {
          throw err;
        }
        console.log("4번", data.toString());
      });
    });
  });
});
