var currencyOne = 100;
var currencyTwo = 0;
var currencyRate = 1.2;


function currrencyConvert(amount, rate){
    return amount * rate;
}

currencyTwo = currrencyConvert(currencyOne, currencyRate)
console.log(currencyTwo)