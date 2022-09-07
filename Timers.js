console.clear()
// let timerId = setTimeout(function(){
//     console.log("Hello!");
// },1000);

// clearTimeout(timerId
             
             
// let timerId = setInterval(function(){
//     console.log("HI!");
// },1000);


// What is the difference between setInterval and setTimeout?
// setTimeout is executed once whereas setInterval is executed multiple times


// What is the difference between using setInterval and a loop? Why would you want to choose one over the other?
//loop is executed back to back with no option to postpone whereas setInternal can execute code later

// What is the first parameter that setInterval and setTimeout accept?
//callBackFunction

// Why is it so important to store the result of setInterval and setTimeout in a variable?
//It gives timerId to stop the function later

// What does asynchronous mean in the context of setTimeout and setInterval?
//asynchronous mean a code was set to be executed later with the help of setTimeout and setInterval in JS


let timerId = setInterval(function(){
    console.log("HI!");
},1000);

setTimeout(function(){
   clearTimeout(timerId);
},3000);