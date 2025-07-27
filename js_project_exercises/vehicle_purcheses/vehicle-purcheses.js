function needsLicense(kind){
    return kind === "car" || kind === "truck";
}

function chooseVehicle(option1, option2){
    const betterOption = option1< option2 ? option1 : option2;
    return `${betterOption} is clear better choice.`;
}

function calculateResellPrice(originalPrice , age){
    if (age < 3){
        return originalPrice * 0.8;
    } else if (age <= 10){
        return originalPrice * 0.7
    }else {
        return originalPrice * 0.5;
    }
}

// Task 1
console.log(needsLicense('car'));   // => true
console.log(needsLicense('bike'));  // => false
console.log('')
// Task 2
console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'));
// => 'Toyota Corolla is clearly the better choice.'
console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'));
// => 'Volkswagen Beetle is clearly the better choice.'
console.log('')

// Task 3
console.log(calculateResellPrice(1000, 1));  // => 800
console.log(calculateResellPrice(1000, 5));  // => 700
console.log(calculateResellPrice(1000, 15)); // => 500