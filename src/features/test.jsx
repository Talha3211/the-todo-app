// let arra = [1,2,3,4,[5,6,7,[8,9,10],11,12,13]]
// console.log(arra.flatMap((a)=>a).flatMap((a)=>a))

// console.log(arra.flat((4)))

// function countOccurrences(word,string){
//     let occrrence=0;

//     for(let i=0;i<word.length;i++){

//       if (word[i] === string){
//           occrrence++
//         }

//     }
//     return occrrence
//     console.log(occrrence)

// }

// console.log(countOccurrences('hello', 'l')); // 2

// function findMaxNumber(arr){
//  let number =0;

//  for (let i=0;i<arr.length;i++){
//     if(arr[i] > number){
//         number = arr[i]
//     }

//  }
// return number

////////////////////second method

// const newm = Math.max(...arr)
// console.log(newm)

// }

//  console.log(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1])); // 10

// function titleCase(sentense){
//     const tense = sentense.split(' ').map((word)=>word[0].toUpperCase() + word.slice(1))
// console.log(tense)
// }

// console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot

// function reverseString(word){
//     let reverseWord = ''
//     for (let i =word.length-1;i>=0;i--){
//        reverseWord += word[i]
//     }
//     console.log(reverseWord)
//     return reverseWord
// }

// console.log(reverseString('hello')) // 'olleh'

// function isPalindrome(word){
//     let reverseWord = ''
//          for (let i =word.length-1;i>=0;i--){
//             reverseWord += word[i]
//          }

//     return word === reverseWord

//     console.log(reverseWord)
//     // return reverseWord
// }

// console.log(isPalindrome('madam'))

// function countVowels(word){
//     let count = 0;

//     for (let i=0;i<word.length;i++){
//         if( word[i]=== 'a' || word[i]===  'e' || word[i]=== 'i' || word[i]=== 'o' || word[i]=== 'u' ){
//             count++
//         }
//     }
// return count
// }

// console.log(countVowels('mississippi')); // 4)

// function bubbleSort(arr){
//     for (let i=0;i<arr.length;i++){
//          for (let j=0;j<arr.length-i-1;j++){
//              if(arr[j]>arr[j+1]){
//               const temp = arr[j]
//               arr[j]=arr[j+1]
//               arr[j+1]=temp
//             }

//         }
//     }
//     console.log(arr)
//     return arr
// }

// console.log(console.log(bubbleSort([5, 4, 3, 2, 1]))); // Output: [1, 2, 3, 4, 5])

// function insertionSort(arr){
// for (let i=1;i<arr.length;arr++){
//     const  currElemnt = arr[i]
//     let j = i -1

//     while(j>=0 && arr[j]>currElemnt){
//         arr[j + 1] = arr[j]
//         j--
//     }
//     arr[j+1]= currElemnt
// }
// console.log(arr)
// return arr
// }

// console.log(insertionSort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]

// function selectionsort(arr){

//     for(let i= 0;i<arr.length;i++){
//         let minindex =i;
//         for(let j=i+1;j<arr.length;i++){
//             if(arr[j]>arr[minindex]){
//                 minindex = j
//             }
//             if(minindex !==i){
//                 [arr[i],arr[minindex]] = [arr[minindex],arr[i]]
//             }
//         }

//     }

// }

// console.log(selectionsort([5, 4, 3, 2, 1])); // Output: [1, 2, 3, 4, 5]

// console.log("Hello, World!");

// "use strict";
// x = 3.14; // Throws an error because x is not declared.

// let name = 'John';  // Can be reassigned
// const age = 30;     // Cannot be reassigned

// let str = "Hello"; // String
// let num = 42; // Number
// let isTrue = true; // Boolean

// alert("Hello!");
// let age = prompt("How old are you?", 25);
// let isConfirmed = confirm("Are you sure?");

// let value = "123";
// let num = Number(value); // Converts string to number

// 5 == '5'; // true
// 5 === '5'; // false

// let age = 18;
// let canVote = (age >= 18) ? "Yes" : "No";

// let isAdult = age >= 18 && age < 65;
// let isSenior = age >= 65 || age < 18;

// let user;
// let username = user ?? "Guest"; // Returns "Guest"

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// open console to see

// for (let i = 0; i < 5; i++) {
//   console.log("value,", i);
//
// console.log("hi");
// console.log("hi");
console.log("2");

function removeDuplicates(arr) {
  let arr1 = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arr1.includes(arr[i])) {
      arr1.push(arr[i]);
    }
    // } else {
    //   arr1.push(arr[i])

    // }
  }
  return arr1;
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumOfEvenSquares(arr) {
  let num = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      let suqare = arr[i] * arr[i];
      num += suqare;
    }
  }
  return num;
}

console.log(sumOfEvenSquares([1, 2, 3, 4, 5])); // 20 (2^2 + 4^2)

// function revesreNumber(){

// }

function revesreNumber(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];

    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(revesreNumber([2, 4, 5, 6, 7, 8, 9, 5]));

function findMaximumNumber(arr) {
  let number = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      number = arr[i];
    }
  }
  return number;
}

////
console.log(findMaximumNumber([5, 6, 7, 8, 9, 3]));

function findSecondMaximumNumber(arr) {
  let number = arr[0];

  let secondNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      number = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondNumber && arr[i] !== number) {
      secondNumber = arr[i];
    }
  }

  return secondNumber;
}

console.log(findSecondMaximumNumber([5, 6, 7, 8, 9, 3]));

function intersection(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) result.push(arr1[i]);
    }
  }

  return result;
}
console.log(
  intersection([1, 2, 3, 4, 5, 6, 7], [5, 6, 7, 8, 9, 10, 11, 12, 13, 15])
);

let a = 9;
let b = 2;

a = a + b; //5
b = a - b; //5-2=3
a = a - b; //5-3=2

console.log(a, b);

function reverseWords(str) {
  const arr1 = str.split(" ");
  let reserverseArr = [];
  console.log(arr1);

  for (let i = arr1.length - 1; i >= 0; i--) {
    reserverseArr.push(arr1[i]);
  }

  return reserverseArr.join(" ");
}

console.log(reverseWords("Hello world how are you")); // Expected output: "you are how world Hello"

function removeElement(arr, value) {
  let arr1 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}

console.log(removeElement([1, 2, 3, 2, 4], 2)); // Expected output: [1, 3, 4]

class Stack {
  constructor() {
    this.stack = [];
    this.maxsize = 100;
    this.index = -1;
  }

  push(value) {
    if (!this.isFull()) {
      this.stack.push(value);
      this.index++;
    }
  }

  isFull() {
    if (this.index === this.maxsize) {
      return true;
    }
  }

  pop() {
    if (!this.isEmpty()) {
      this.index--;
      return this.stack.pop();
    }
  }

  isEmpty() {
    if (this.index === -1) {
      return true;
    }
  }

  peak() {
    return this.stack[this.index];
  }
}

function reverseStringByStack(str) {
  const stack2 = new Stack();

  let reverseString = "";
  console.log(reverseString);

  for (let words of str) {
    stack2.push(words);
  }

  while (!stack2.isEmpty()) {
    reverseString += stack2.pop();
    // reverseString.push(stack2.pop())
  }

  return reverseString;
}

console.log(reverseStringByStack("abcdefg"));
console.log(reverseStringByStack("6788954"));

function reverseNumberByStack(numbers) {
  const stack2 = new Stack();

  let reverseNumber = "";
  const numStr = numbers.toString();

  for (let words of numStr) {
    stack2.push(words);
  }

  while (!stack2.isEmpty()) {
    reverseNumber += stack2.pop();
    // reverseString.push(stack2.pop())
  }

  return Number(reverseNumber);
}

console.log(reverseNumberByStack("123456"));

const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.pop();
stack1.peak();

console.log(stack1.stack);
console.log(stack1.index);
console.log(stack1.peak());

class queue {
  constructor() {
    this.queue = [];
    this.max = 100;
    this.tail = 0;
    this.head = 0;
  }
  enqueue(value) {
    if (!this.isFull()) {
      this.queue[this.tail] = value;
      this.tail++;
    }
  }

  dequeue() {
    const item = this.queue[this.head];
    this.head++;
    return item;
    //
  }
  isFull() {
    return this.tail === this.max;
  }

  getLength() {
    return this.tail - this.head;
  }

  isEmpty() {
    if (this.getLength() === 0) {
      return true;
    }
  }
}

function reverseStringByQueue(str) {
  let reverseString = "";

  const queue2 = new queue();
  for (let i = str.length - 1; i >= 0; i--) {
    queue2.enqueue(str[i]);
  }
  while (!queue2.isEmpty()) {
    reverseString += queue2.dequeue();
  }

  return reverseString;
}

console.log(reverseStringByQueue("abcdef"));

const queue1 = new queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
queue1.enqueue(5);
queue1.enqueue(5);
console.log(queue1.dequeue());
console.log(queue1.dequeue());

console.log(queue1.queue);

function bubbleSorting(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 5>4
        let temp = arr[j + 1]; //temp =5
        arr[j + 1] = arr[j]; //  4=5  =5
        arr[j] = temp; //  5=
      }
    }
  }
  return arr;
}

console.log(bubbleSorting([5, 4, 2, 1]));

function inserationSort(arr) {
  //we start from the second element we thought first elemnt is sorted

  for (let i = 1; i < arr.length; i++) {
    let curElemnt = arr[i];
    // this is the index of last elemnt in sorted array
    let j = i - 1;

    // shift the sorted elemnt o the right side if it is smaller than cur element
    while (j >= 0 && arr[j] > curElemnt) {
      //4> 3
      arr[j + 1] = arr[j]; //4,3 become 4 will go to th right side  _,4
      j--;
    }
    arr[j + 1] = curElemnt; //
  }
}
console.log(inserationSort([4, 3, 2, 10, 12, 1, 5, 6]));

//3,4,2

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdex = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIdex]) {
        minIdex = j;
      }
    }
    if (minIdex !== i) {
      [arr[i], arr[minIdex]] = [arr[minIdex], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([4, 3, 2, 10, 12, 1, 5, 6]));
