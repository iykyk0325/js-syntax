// 1. null 병합 연산자(Nullish coalescing operator)
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3; // 20
let var6 = var3 ?? var2; // 20

console.log(var4);
console.log(var5);
console.log(var6);

let userName;
let userNickName = "page";

let displayName = userName ?? userNickName;
console.log(displayName);

// 2. typeof 연산자
// let var7 = 1;
// let var7 = "hello";
let var7 = true;

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자(Ternary operator)
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
