// array destructuring

// const numbers = [1, 2, 3];
// const first = numbers[0];
// const second = numbers[1];
// const third = numbers[2];


// array destructuring
const numbers = [1, 2, 3];
const[first, second, third] = numbers;

//skip items
const [a, ,c] =  [10, 20, 30]

//default values
const [x = 5, y = 10] = [6];

//Destructuring Objects
//insteady of.
const person = {name: 'stephano', age: 30};
const names = person.name
const age = person.age

//object destructuring
const car = {name: "TOYOTA", type:"NISAN"};
const { name, type } = car;

//Nested Destructuring
const motorCycle = {
    type: "Boxer",
    platesNumber: {plt1: "T234", plt2: "T456", plt3: "T547"}
};
const   {platesNumber:{plt1, plt2, plt3}} = motorCycle;


//Function Parameters Destructuring
function printUser({name, age}){
    console.log(`${name} is ${age} years old.   `);
}
const user = {name: "Stephano", age: 30}
printUser(user)