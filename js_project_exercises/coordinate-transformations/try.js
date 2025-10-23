// let counter = 0;


// function incriment(){
//     counter += 1; 
//     return counter;
// }

// console.log(incriment());
// console.log(counter);

let counter = 0;
function makeCounter(){
    

    return function incriment(){
        counter += 1;
        return counter;
    };
}
// console.log(counter);

const myCounter = makeCounter();
console.log(typeof myCounter);
console.log(myCounter.name);
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());


