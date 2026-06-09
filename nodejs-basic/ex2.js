/**
 * ES5 시절의 객체 표현 방법
 *
 */
var sayNode = function () {
  console.log("Node");
};
var es = "ES";

var oldObject = {
  sayJS: function () {
    console.log("JS");
  },
  sayNode: sayNode,
};

oldObject[es + 6] = "ES6 value";
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

/**
 * ES6 이후, 훨씬 간결한 문법으로 객체 리터럴 표현 가능
 */
const newObject = {
  sayJS() {
    console.log("JS");
  },
  sayNode,
  [es + 6]: "ES6 value",
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);
