/**
 * call stack, backgroud, task queue, event loop 관련 실습
 *
 */

function oneMore() {
  console.log("one more");
}

function run() {
  console.log("run run");

  setTimeout(() => {
    console.log("wow");
  }, 0);

  new Promise((resolve) => {
    resolve("hi");
  }).then(console.log);

  oneMore();
}

setTimeout(run, 5000);
