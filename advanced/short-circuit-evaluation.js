// 단락 평가(Short-circuit evalutation)
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue());

// 활용
const printName1 = (person) => {
  if (!person) {
    console.log("person에 값이 없음");
    return;
  }

  console.log(person.name);
};
printName1({ name: "sonny" });

const printName2 = (person) => {
  console.log(person && person.name);
};
printName2(undefined);

const printName3 = (person) => {
  const name = person && person.name;
  console.log(name || "person의 값이 없음.");
};
printName3(null);
