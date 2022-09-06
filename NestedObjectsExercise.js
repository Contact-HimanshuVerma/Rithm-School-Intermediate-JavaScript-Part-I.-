console.clear()
let nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}

for (let a in nestedData.innerData.numberData.primeNumbers){
  console.log(nestedData.innerData.numberData.primeNumbers[a])
}

for (let a in nestedData.innerData.numberData.fibonnaci){
  if(nestedData.innerData.numberData.fibonnaci[a]%2===0){
    console.log(nestedData.innerData.numberData.fibonnaci[a]);
  }
}

console.log(nestedData.innerData.order[1]);

nestedData.innerData.addSnack("chocolate");

//This keyword manupulates the current object i.e. nestedData


let nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}

function addSpeaker(value){
  nestedObject.speakers.push({name:value})
}

addSpeaker("Himanshu");

nestedObject.data.languages["Hindi"] = { "Hello":"Namaste"}
console.log(nestedObject.data.languages);

function addLanguage(language,word,translatedWord){
  nestedObject.data.languages[language] = {
    word : translatedWord
  }
}

addLanguage("Punjabi","Hello","Satsriyakal")
console.log(nestedObject.data.languages);



function addCountry(country,cData,pData){
  nestedObject.data.continents.europe.countries[country]={
    capital: cData,
    population:pData
  }
}

addCountry("India","Delhi",1300000000000,)
console.log( nestedObject.data.continents.europe.countries);