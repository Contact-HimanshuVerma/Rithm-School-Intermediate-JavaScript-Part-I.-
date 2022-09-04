console.clear()
// let instructorData = {
//     name: "Himanshu",
//     additionalData: {
//         instructor: false,
//         favoriteHobbies: ["Reading books", "Chess", "Coding"],
//         moreDetails: {
//             favoriteBasketballTeam: null,
//             numberOfSiblings: 1,
//             isYoungest: true,
//             hometown: {
//                 city: "New Delhi",
//                 state: "Delhi",
//             },
//             citiesLivedIn: ["Delhi", "Punjab", "Haryana"]
//         }
//     }
// };


let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};



function displayCities(){
  for(let i=0;i<instructorData.additionalData.moreDetails.citiesLivedIn.length;i++){
    console.log(instructorData.additionalData.moreDetails.citiesLivedIn[i]);
  }
}

displayCities();

function displayHometownData(){
  for( let a in instructorData.additionalData.moreDetails.hometown){
    console.log(instructorData.additionalData.moreDetails.hometown[a])
  }
}

displayHometownData()

function addDetail(key,value){
 instructorData.additionalData.moreDetails[key] = value;
}

// addDetail("isHilarious", true);
// addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);


function removeDetail(key){
  delete  instructorData.additionalData.moreDetails[key] 
}

removeDetail('citiesLivedIn');
console.log(instructorData)