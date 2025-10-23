const squareLength = 4;
function applyToSquare(callback){
    return callback(squareLength);
}

function areaOfSquare(numbers){
    return numbers * numbers;
}
console.log(applyToSquare(areaOfSquare));