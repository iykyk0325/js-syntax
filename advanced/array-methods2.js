// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach((item, idx, arr) => {
  console.log("idx:", idx, "item:", item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
console.log("doubledArr:", doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let included = arr2.includes(10);
console.log("included:", included);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let inx = arr3.indexOf(2);
console.log("inx:", inx);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
// arr4.findIndex((item) => {
//   if (item === 2) return true;
// });
let inx2 = arr4.findIndex((item) => item === 2);
console.log("inx2:", inx2);

let objectArr = [{ name: "김철수" }, { name: "홍길동" }];
let inx3 = objectArr.findIndex((obj) => obj.name === "김철수");
console.log("inx3:", inx3);

// 5. find
// 모든 요소를 순회하면서 콜백 함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "김철수" }, { name: "홍길동" }];
let found = arr5.find((item) => item.name === "김철수");
console.log("found:", found);
