// 1.  객체 생성 방법
let obj1 = new Object(); // 생성자
let obj2 = {}; // 객체 리터럴

// 2. 객체 프로퍼티(속성)
let person = {
  name: "Conor Gallagher",
  age: 26,
  nationality: "England",
  position: "Central Midfield",
  contract: {
    joined: "2026-01-14",
    expires: "2031-06-30",
    "transfer fee": "35.00m",
  },
  "current club": "Tottenham Hotspur",
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근
let name = person.name; // 점 표기법
let age = person["age"]; // 괄호 표기법

// 괄호 표기법 활용 예시
let property = "nationality";
let nationality = person[property];

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.foot = "right";
person["place of birth"] = "Epsom";

// 3-3. 프로퍼티 수정 방법
person.position = "Attacking Midfield";
person["place of birth"] = "London";

// 3-4. 프로퍼티 삭제 방법
delete person.foot;
delete person["current club"];

// 3-5. 프로퍼티 존재 유무 확인 : in 연산자
let result1 = "name" in person;
let result2 = "jersey number" in person;
console.log(result1);
console.log(result2);
