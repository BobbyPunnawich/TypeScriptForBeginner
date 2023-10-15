var myName: string = "Bobby";
console.log(myName);
console.log(typeof myName);

var money: number = 100;
console.log(money);
console.log(typeof money);

var canVote: boolean;
var i;

const appNum = 10;

// appNum++; --> error

function sayHello() {
  if (true) {
    var bobby: string = "Bob";
    let fame: string = "20";
  }
  console.log(bobby);
  //   console.log(fame); --> error
}
// console.log(bobby); --> error

sayHello();

// ใช้ Let เป็นหลัก

const myArray: number[] = [1, 2, 3];
console.log(myArray.pop());
console.log(myArray);

let employee: [number, string] = [19, "Bob"];
