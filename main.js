const prompt = require('prompt-sync')({ sigint: true });

// let userPrompt = prompt('enter a string: ');
// console.log('user string: ' + userPrompt);

// let userNumber= Number(prompt("enter a number: "));
// console.log('user number: ' + userNumber);
/*
fish{
    name: string,
    weight: number,
    value: number
    
}
*/

let fishKeep = [];
let descriptor1 = [" ","Enourmous", "Miniature", "Gargantuous", "Huge", "Average", "Thiqq", "Small", "Fat", "Scrawny", "Smeagol-lookin-mf"];
let descriptor2 = [" ","Red", "Green", "Blue", "Purple", "Silver", "Black", "Yellow", "Pink", "Orange", "Grey"];
let fishType = [" ","Pikachu", "Lugia", "Entei", "Zapdos", "Mew", "Mewtwo", "Ho-Ho", "Rayquaza", "Groudon", "Missing.No"];
let superRare = ["First Edition Holo Charizard"];
let notRare = ["Magikarp"];
let totalWeight = 0;
let totalValue = 0;
let totalFish = fishKeep.length;
let timeCtr = 0;

/*
for our descriptive words

2 descriptors and 1 fish type
2 arrays of descriptors
1 array of fish types

*/
//hourCtr - variable to keep track of the time
// (While) loop to keep track of time

//variable for total pounds
//need fishKeep.length to track how many fish have been kept = totalFish


console.log("You are a Pokemon trainer! You have only 6 hours to catch as many pokemon as you can with the total weight 10lbs or under.  It takes roughly 1 hours to catch each pokemon (they are slippery little buggers). The goal is to keep it under 10lbs and maximize your value over 6 hours.")

console.log('\n======================================================\n');



let rngFish = (name, weight, value) => {
        let newFish = {}
        newFish.name = name,
        newFish.weight = weight,
        newFish.value = value
    
    return newFish;
}



let rng = () =>{
  let result = (Math.ceil(Math.random()*10))

  return result

}

let rngWeight = () => {
    let weight = (Math.ceil(Math.random()*1000)/200)
    return weight
}

let rngValue = ()=> {
    let value = (Math.ceil(Math.random()*1000)/50)
    return value
}

let fullName = `${descriptor1[rng()]} ${descriptor2[rng()]} ${fishType[rng()]}`;

let weight = rngWeight();

let value = rngValue();

console.log(rngFish(fullName, weight, value));


while (totalWeight < 11 && timeCtr < 7){
    rngFish(fullName, weight, value)
console.log(`${fullName}, ${weight}, ${value}`)
totalWeight+= weight
timeCtr++
}