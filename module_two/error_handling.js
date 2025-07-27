// the bugs and error within progrom is obvious but needed to be prvented 
//Bug this is haven when the program is acctually work as not expected
//Error is the situation that is occurr in which stop the program to run.

//Error handled by the having try. catch, and throw methods that is enable to solve the problem and program can run as intended


function addNum(a, b) {
    return a + b;
}

try {
    let result = addNum(3); // Missing one argument
    console.log(result);
} catch(stephano) {
    console.log("Runtime error:", err.message);
}
console.log(
    "Program Is working"
)