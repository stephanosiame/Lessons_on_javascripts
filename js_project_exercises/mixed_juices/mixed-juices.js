//To determine time to mix juices
function timeToMixJuice(name){
    switch (name){
        case 'Pure Strawberry Joy':
            return 0.5;
        case "Energizer":
        case "Green Garden":
            return 1.5;
        case "Tropical Island":
            return 3;
        case "All or Nothing":
            return 5;
        default:
            return 2.5;
    }
}

//Replenish the lime wedge supply
function limesToCut(wedgesNeeded, limes){
    let wedges = 0;
    let count = 0;

    for (let lime of limes){
        if (wedges >= wedgesNeeded) break;

        switch (lime){
            case 'small':
                wedges += 6;
                break;
            
            case 'medium':
                wedges += 8;
                break;
            case 'large':
                wedges += 10;
                break;
        }
        count ++;
    }
    return count;
}

//finish up to shift
function remainingOrders(timeLeft, orders){
    for(let i=0; i < orders.length; i++){
        const juiceTime = timeToMixJuice(orders[i]);

        if(juiceTime <= timeLeft){
            timeLeft -= juiceTime;
        }else{
            return orders.slice(i);
        }
    }
    return [];
}

// Test 1: timeToMixJuice
console.log("TEST 1: timeToMixJuice");
console.log(timeToMixJuice('Tropical Island') === 3);      // true
console.log(timeToMixJuice('Berries & Lime') === 2.5);     // true
console.log(timeToMixJuice('Pure Strawberry Joy') === 0.5); // true
console.log(timeToMixJuice('Green Garden') === 1.5);       // true
console.log(timeToMixJuice('All or Nothing') === 5);       // true
console.log("")

// Test 2: limesToCut
console.log("\nTEST 2: limesToCut");
console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']) === 4); // true
console.log(limesToCut(0, ['small', 'medium']) === 0); // true
console.log(limesToCut(30, ['large', 'large', 'medium']) === 3); // true
console.log("")

// Test 3: remainingOrders
console.log("\nTEST 3: remainingOrders");
console.log(JSON.stringify(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden'])) === JSON.stringify(['Green Garden'])); // true
console.log(JSON.stringify(remainingOrders(7, ['Tropical Island', 'Energizer', 'Green Garden'])) === JSON.stringify([])); // true
console.log(JSON.stringify(remainingOrders(1, ['Green Garden', 'Energizer'])) === JSON.stringify(['Energizer'])); // true