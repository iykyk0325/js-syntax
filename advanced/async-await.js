/*
async :
  - 어떤 함수를 비동기 함수로 만들어주는 키워드
  - 함수가 Promise 객체를 반환하도록 변환
*/

// 기본
const getData1 = () => {
  return { name: "page", id: "10" };
};
console.log(getData1());

// async 적용
const getData2 = async () => {
  return { name: "page", id: "10" };
};
console.log(getData2());

const getData3 = async () => {
  // 애초에 어떠한 Promise 객체를 반환하면 영향 없음.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "page", id: "10" });
    }, 1000);
  });
};

/*
await :
  - Promise가 처리될 때까지 기다렸다가 결과값을 꺼내는 키워드
  - await는 기본적으로 async 함수 안에서만 사용
*/

// Promise의 then 메서드 사용시
const printData1 = () => {
  getData3().then((res) => {
    console.log("res:", res);
  });
};
printData1();

// async-await 적용
const printData2 = async () => {
  const data = await getData3();
  console.log("data:", data);
};
printData2();
