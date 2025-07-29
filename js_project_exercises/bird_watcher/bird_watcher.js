function totalBirdCount(birdPerDay){
    let total = 0;
    for(let i = 0; i < birdPerDay.length; i++){
        total += birdPerDay[i]
    }
    return total;
}

function birdsInWeek(birdPerDay, week){
    const daysPerWeek = 7;
    let total = 0;

    //calculate startindex and endindex for the weeks

    const startIndex = (week -1) *  daysPerWeek;
    const endIndex = startIndex + daysPerWeek;

    for(let i = startIndex; i < endIndex; i++){
        total += birdPerDay[i];
    }
    return total;
}

function fixBirdCountLog(birdPerDay){
    for(let i = 0; i < birdPerDay.length; i+=2){
        birdPerDay[i] += 1;
    }
    return birdPerDay;
}

// === Example Test Cases ===

let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1, 3,4,2,4,2,4,2];

console.log("1. Total birds counted:", totalBirdCount(birdsPerDay)); // ➜ 34
console.log("2. Birds in week 3:", birdsInWeek(birdsPerDay, 3)); // ➜ 12

let birdsPerDayWithMistake = [2, 5, 0, 7, 4, 1];
console.log("3. Fixed bird count log:", fixBirdCountLog(birdsPerDayWithMistake)); 
// ➜ [3, 5, 1, 7, 5, 1]