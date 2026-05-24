// 구조 분해 할당(Destructuring)

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];
let [a, b, c, d = 4] = arr;

// 2. 객체의 구조 분해 할당
let person = {
  name: "kinsky",
  age: 23,
  position: "goalkeeper",
};

let { age: age2, position, name, uniformNum = 99 } = person;

// 객체의 구조 분해 할당 : 함수의 매개변수
const func = ({ name, age, position }) => {
  console.log(name, age, position);
};

func(person);
