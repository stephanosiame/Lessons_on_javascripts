//building prototype
const bird = {
    hasWing: true,
    canFly: true,
    hasFeather: true,
}
var eagle1 = Object.create(bird);
console.log("Eagle: ",eagle1);
console.log("Eagle have wings: ",eagle1.hasWing);
console.log("Eagle can Fly: ", eagle1.canFly);
console.log("Eagle has Feather: ",eagle1.hasFeather);


var eagle2 = Object.create(bird);
console.log("Eagle2 Has wings: ", eagle2.hasWing)

var hen = Object.create(bird);
hen.canFly = false;
console.log("Hen has wings ", hen)
