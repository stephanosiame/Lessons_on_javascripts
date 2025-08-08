const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sport car object: ", sportsCar);

console.log(" ");

console.log('------- for-in is unreliable ----------');

console.log(" ");

for(prop in sportsCar){
    console.log(prop);
}
console.log("Iterating over object AND its prototype");

console.log(" ");
console.log("-------- for-of is reliable ---------");

for(prop of Object.keys(sportsCar)){
    console.log(prop + " : " + sportsCar[prop]);
}

console.log("Iterating over object's OWN PROPERTIES only")