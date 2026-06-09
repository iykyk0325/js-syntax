/**
 *  비동기 및 순서 보장 - async/await
 *
 */
const fs = require("fs").promises;

async function main() {
  let data = await fs.readFile("./sample.txt");
  console.log("1번", data.toString());

  data = await fs.readFile("./sample.txt");
  console.log("2번", data.toString());

  data = await fs.readFile("./sample.txt");
  console.log("3번", data.toString());

  data = await fs.readFile("./sample.txt");
  console.log("4번", data.toString());
}

main();

console.log("Hello World!");
