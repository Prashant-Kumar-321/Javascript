let outerVariable = null;

function adder(num){
    console.log(`outerVariable = ${outerVariable}`);

    function add(b){
        console.log(`Sum = ${num + b}`);
        console.log(`outer Variable = ${outerVariable}`);
    }

    return add; 
}

outerVariable = "Closure JS"; 

const addTo5 = adder(5);
addTo5(10);
addTo5(25);
const addTo2 = adder(2);
addTo2(3);
addTo2(8);