const pets = ["cat", "dog", "horse", "hen", "goat"];
// console.log(`Last Pet = ${pets[pets.length-1]}`);

// pets.push("camel", "rat", "rabbit");
// console.log(`Last Pet = ${pets[pets.length-1]}`);
// console.log(`pets = ${pets}`);

// console.log(`Last deleted pet = ${pets.pop()}`);
// console.log(pets);

// console.log(pets[1]);
// console.log(pets['1']);

pets[6] = "rabbit";
// console.log(pets.length);
// console.log(pets);
// console.log(pets[5]);
// console.log(pets[6]);
// console.log(Object.keys(pets));

/* Accessing array object element */
// *(1)*
// pets.forEach((pet, index)=>{
//     console.log(`${index} -- ${pet} `);
// })

// *(2)*
// for(let i=0; i<pets.length; ++i){
//     console.log(`${i} -- ${pets[i]}`)
// }

// console.log(pets)
// pets.reverse()
// console.log(pets)
// pets.forEach((pet, index)=>{
//     console.log(`${index} -- ${pet} `);
// })

// const iterator = pets.keys();
// for(const key of iterator){
//     console.log(`${key} -- ${pets[key]}`)
// }

/* **************************************************
    # for...of loop
    Iterates over the values of an iterable

    # for...in loop
    Iterates over the keys(properties) of an iterable object
* *****************************************************/

// for(const key in pets){
//     console.log(`${key} --- ${pets[key]}`);
// }

// for(const pet of pets){
//     console.log(`${pet}`)
// }

// const reversedPets = pets.toReversed(0, pets.length-1);
// console.log(pets);
// console.log(reversedPets);

/* Spread Operator used for deep copy of an array object */
const copyPets = [...pets];
copyPets[0] = "cow";
