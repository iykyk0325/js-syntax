// 배열 순회 : 배열 인덱스
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log();

// 배열 순회 : for of 반복문
for (let item of arr) {
  console.log(item);
}
console.log();

// 객체 순회
let person = {
  name: "kinsky",
  age: 23,
  position: "goalkeeper",
};

// 객체 순회 : Object.keys() 사용
let keys = Object.keys(person);
for (let key of keys) {
  let value = person[key];
  console.log(key + " : " + value);
}
console.log();

// 객체 순회 : Object.values() 사용
let values = Object.values(person);

for (let value of values) {
  console.log(value);
}
console.log();

// 객체 순회 : for in
// for of 구문과 헷갈리지 말자.
for (let key in person) {
  let value = person[key];
  console.log(key + " : " + value);
}
console.log();
