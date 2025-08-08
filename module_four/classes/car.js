class Car{
    constructor(color, speed){
        this.color = color,
        this.speed = speed
    }
    turboOn(){
        console.log("Turbo is on")
    }
}

const car = new Car ("red", 200)
console.log(car.turboOn())