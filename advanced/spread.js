// 전개 구문(Spread syntax)

// Spread 연산자 : 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3, d: 4 };
console.log(obj2);

const func1 = (p1, p2, p3) => {
  console.log(p1, p2, p3);
};
func1(...arr1);

// rest 매개변수
const func2 = (...rest) => {
  console.log(rest); // 배열
};
func2(...arr1);
