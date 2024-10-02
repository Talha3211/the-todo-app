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
for (let i = 0; i < 5; i++) {
    console.log("value,", i);
  }