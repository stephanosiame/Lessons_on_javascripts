//Loops is kind of the program in which is only perform the repetitive tasks so it enable to run again up reach the condition to stop 
//When you use loop you might be carefull because if doesnot set the condition to reach might run forever

//There different type of Loop which are For loop, While loop and Nested Loop.

// For Loop.
/*
for (var i=1; i<=10; i++){
    console.log(i)
}
console.log("Happ new year")

*/

//While loop
/*
var counter = 1

while(counter <= 10){
    console.log(counter);
    counter = counter + 1;
}
console.log("Happy New Year")

*/

//Nested Loop

for (var i = 1; i <= 2; i++){
    for(var j = 1; j<=7; j++){
        console.log(" Week "+ i + " Days " + j)
    }
}