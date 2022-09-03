console.clear()

//What does the throw keyword do?
/*
throw keyword throws an error and stops the code execution 

*/
//EX: throw "This will also be an error";
// throw ReferenceError("That variable does not exist!");


//What does the finally keyword do?
//finally keyword is used with try and catch. Finally block will execute regardless of error.

//What is the difference between a TypeError and ReferenceError?
//referenceerror means a var does not exist in the scope
//typeerror occurs when you make incorrect use of certain types in javascript. that could mean trying to invoke something that is not a function or accessing properites on undefined.

//How do you create a snippet in the Chrome dev tools?
//in windows: ctrl+t, ctrl+shift+i, click on sources tab, from top left click on snippets, new snippet

//In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception?
// it is an error, else I do not know

//How do we "catch" errors in JavaScript? Give an example with code for what that might look like.
// we do it by using try and catch


// try{
// if (true){
//   console.log(bbb)
// }
// }catch(a){
// console.log("It is an exanple of try and catch")
// }


// Explain what type of error will be thrown, why the error is occuring, and how to fix it:
//syntax error
//reference error
//type error
// range error


// 1.

// person; //reference error
// 2.

// let data = {};
// data.displayInfo();

//type error
// 3.

// let data = {};
// data.displayInfo.foo = "bar";
//type error

// 4.

// function data(){
//     let thing = "foo";
// }
// data();
// thing;
// reference error


// for(let i=0; i < 5; i++){
//     console.log(i);
// }


// function addIfEven(num){
//     if(num % 2 === 0){
//         return num + 5;
//     }
//     return num;
// }

// console.log(addIfEven(11))


// function loopToFive(){
//     for(let i=0; i < 5; i++){
//         console.log(i);
//     }
// // }

// // loopToFive()

// function displayEvenNumbers(){
//     let numbers = [1,2,3,4,5,6,7,8];
//     let evenNumbers = [];
//     for(let i=0; i<numbers.length; i++){
//         if(numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i]);
//         }
        
//     }return evenNumbers;
// }
// console.log(displayEvenNumbers()); 
