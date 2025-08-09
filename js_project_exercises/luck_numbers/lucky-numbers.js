// the function that is accept the sumation of two number
function twoSum(arr1, arr2){
    const num1 = Number(arr1.join(''));
    const num2 = Number(arr2.join(''));

    return num1 + num2;
}

console.log(twoSum([1, 2, 3,3], [0, 7]));

//function to check if the number is palindrome
function luckyNumber(num){
    const strNum = String(num);
    const reversed = strNum.split('').reverse().join('');

    return  strNum == reversed;
}

console.log(luckyNumber(1441)); 
console.log(luckyNumber(143));  

//function to validate user input
function errorMessage(input){
    if(input == null || input == undefined || input == ''){
        return "Required field";
    }
    const num = Number(input);

    if(isNaN(num) || num == 0){
        return "must be a number beside 0"
    }
    return '';
}

console.log(errorMessage('123')); // ''
console.log(errorMessage(''));    // 'Required field'
console.log(errorMessage('abc')); // 'Must be a number besides 0'
console.log(errorMessage('0'));   // 'Must be a number besides 0'
console.log(errorMessage(null));  // 'Required field'