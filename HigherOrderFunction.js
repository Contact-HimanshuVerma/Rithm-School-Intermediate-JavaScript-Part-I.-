console.clear()
function sendMessage(message, fn){
    return fn(message);
}

sendMessage("Hello World", console.log); // Hello World
// sendMessage("Hello World", alert); // Hello World is alerted
// sendMessage("What is your name?", prompt); // value from prompt is returned
// sendMessage("Do you like JavaScript?", confirm); // true or false is returned

// sendMessage("Hello World", function(message){
//     // message refers to the string "Hello World"
//     console.log(message + " from a callback function!");
// });  // 



function each(arr,fn){
  for(let i=0;i<arr.length;i++){
    fn(arr[i])
  }
}

each([1,2,3,4], function(val){
    console.log(val);
});

each([1,2,3,4], function(val){
    console.log(val*2);
});


// Write a function called map which accepts two parameters: an array and a callback. The map function should return a new array with the result of each value being passed to the callback function.

function map(arr,callBackFunc) {
  let newArray=[]
  for (let i=0; i<arr.length;i++){
    newArray.push(callBackFunc(arr[i]))
  } return console.log(newArray);
}

map([1,2,3,4], function(val){
    return val * 2;
})


// Write a function called reject which accepts two parameters an array and a callback. The function should return a new array with all of the values that do not return true to the callback. Here are two examples:

function reject(arr,cbFunc) {
  let resultArr = []
  for (let i=0;i<arr.length;i++){
    if(cbFunc(arr[i])===false){
      resultArr.push(arr[i])
    }
  }
  return console.log(resultArr);
   
}

reject([1,2,3,4], function(val){
    return val > 2;
}); // [1,2]

reject([2,3,4,5], function(val){
    return val % 2 === 0;
}); // [3,5]