// const counter = (
//     function () {
//         // private  memebers (count, changeBy)
//         let count = 0;

//         function changeBy(num){
//             count += num;
//         }

//         return {
//             increment(){
//                 changeBy(1);
//             }, 

//             decrement(){
//                 changeBy(-1);
//             }, 

//             value(){
//                 return count;
//             }
//         }; 
//     }
// )();

const counterMaker = () => {
    
    let counter = 0; 

    function change(num){
        counter += num; 
    }

    return {
        increment(){
            change(1);
        }, 

        decrement(){
            change(-1);
        }, 

        value(){
            return counter; 
        }
    }; 

}

const counter1 = counterMaker()
const counter2 = counterMaker()

console.log(counter1.value()); // 0

counter1.increment();
counter1.increment();

console.log(counter1.value()); // 2
console.log(counter1.value()); // 2

console.log(counter2.value()); // 0
