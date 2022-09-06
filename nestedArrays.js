console.clear()
// let nestedArr = [[1, 2], [3, 4]];

// for (let i=0;i<nestedArr.length;i++){
//   for (let j=0; j < nestedArr[i].length;j++){
//     console.log(nestedArr[i][j])
//   }
// }


// let nestedArr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9, 10, 11, 12]];

// for(let i = 0;i<nestedArr1.length;i++){
//   for(let j=0; j<nestedArr1[i].length;j++){
//     console.log(nestedArr1[i][j])
//   }
// }



function printEvens() {
let nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];  
for (let i=0; i<nestedArr.length;i++){
  for (let j=0;j<nestedArr[i].length;j++){
    if(nestedArr[i][j]%2===0){
      console.log(nestedArr[i][j])
    }
  }
}
}


function sumTotal(){
  let nestedArr = [[1, 2], [3, 4], [5, 6]];
  let total = 0;
  for(let i=0;i<nestedArr.length;i++){
    for(let j=0;j <nestedArr[i].length;j++){
      total += nestedArr[i][j]
    }
  } return total
}

console.log(sumTotal());

//Incorrect Answer, more work needed.
function countVowels(){
  let totalVowel = 0
  let nestedArr = [
  "Elie",
  ["Matt", ["Tim"]],
  ["Colt", ["Whiskey", ["Janey"], "Tom"]],
  "Lorien"
];
  for (let i=0;i<nestedArr.length;i++){
    for(let j=0;j<nestedArr[i].lenght;j++){
      // let lowerI = nestedArr[i][j].toLowerCase()
      // console.log(lowerI);
      // if(lowerI === "a"||"e"||"i"||"o"||"u"){
      //   totalVowel += 1
      console.log(nestedArr[i][j])
      }
    }
  }


console.log(countVowels())