//get first card
function getFirstCard([first]){
    return first;
}

function getSecondCard([, second]){
    return second;
}

function swapTwoCard([first, second]){
    return [first, second];
}

function shiftThreeCardsAround(first, second, third){
    return [second, first, third];
}

function pickNamedPile({chosen}){
    return chosen;
}

function swapNamedPile({chosen, disregarded}){
    return {chosen : disregarded, disregarded:chosen };
}

//Tests
const deck6 = [5, 4, 7, 10];
const chosenPile = [5, 4];
const disregardedPile = [7, 10];

console.log(swapNamedPile({ chosen: chosenPile, disregarded: disregardedPile }));
// { chosen: [7, 10], disregarded: [5, 4] }

const deck5 = [5, 4, 7, 10];
const chosen = [5, 4];
const disregarded = [7, 10];

console.log(pickNamedPile({ chosen, disregarded })); // [5, 4]