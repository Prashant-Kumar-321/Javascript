// Destructuring = Extract values from arrays and objects
//                 then assign them to variables in a convient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring

// Example 1: SWAP the value of two variable
/*
let buttonOneColor = "blue"; 
let buttonTwoColor = "purple"; 

[buttonOneColor, buttonTwoColor] = [buttonTwoColor, buttonOneColor] 

console.log(`button one color = ${buttonOneColor}`)
console.log(`button two color = ${buttonTwoColor}`)
*/


// EXAMPLE 2: Swap two elements in array 
/*
let dishes = ["rice", "roti", "idli", "dosa", "pan cake"]; 
console.log('Before swapping'); 
console.log(dishes); 

[dishes[0], dishes[dishes.length-1]] = [dishes[dishes.length-1], dishes[0]]

console.log()

console.log('After swapping')
console.log(dishes)
*/


// Example 3: Assign array elements to variables 
/* 
function printRoles([firstRole, secondRole, ...extraRoles]){ // ... is Rest Operator
    console.log(`first role = ${firstRole}`); 
    console.log(`second role = ${secondRole}`); 
    console.log("Extra roles = " + extraRoles);
}; 

let roles = ["GenA", "GenB", "GenC", "GenD", "GenE"]; 
printRoles(roles);  
*/

// Example 4: Destructure objects

/*
function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`Name: ${firstName} ${lastName}`); 
    console.log(`age = ${age}`); 
    console.log(`job = ${job}`); 
}

const person1 = {
    firstName: "Bob",
    lastName: "tin",
    age: 23, 
    job: "bank manager",
}; 

const person2 = {
    firstName: "Martin",
    lastName: "Sen",
    age: 34, 
}; 

const {firstName, lastName, age, job="unemployed"} = person2; 

displayPerson(person1); 
console.log()
displayPerson(person2); 
*/

// Exaple 5: Nested Destructuring

/* const student = {
    name: "Alice",
    age: 20,
    contact: {
        email: "alice@example.com",
        phone: "123-456-7890"
    },
    grades: [88, 92, 79, 95, 85]
};

const {name, contact: {email}, grades: [math, science, ...otherGrades]} = student;

console.log(`Name:  ${name}`); 
console.log(`Email:  ${email}`); 
console.log(`Math grade:  ${math}`); 
console.log(`Science:  ${science}`); 
console.log(`Other grades:  ${otherGrades}`); */ 

// Use Cases of Destructuring

// 1. Function Parameters
/* 
    function createUser({name, email}) {
        // use name and email directly
    }
*/

// 2. React (and other frameworks): 
/* 
    function Profile({user, age}) { ... }
    const [count, setCount] = useState(0);
*/

// 3. API Response
/* 
    const {data, status} = await axios.get('/api/user');
*/

// 4. Multiple Return Values
/* 
    function getCoords() { return [10, 20]; }
    const [x, y] = getCoords();
*/

// 5. Looping Over Objects/Arrays

/* 
    let numbers = [[3, 5], [7, 9], [11, 13], [15, 17]]; 
    
    for (const [key, value] of Object.entries(obj)) { ... }
    
    numbers.forEach(([a, b], index, par) => {
        console.log(`a = ${a}, b = ${b}`);
    }); 
*/



