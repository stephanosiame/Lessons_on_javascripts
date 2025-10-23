function getListOfWagons(...wagonsIDs){
    return [...wagonsIDs]
}
// console.log(getListOfWagons)

function listOfWagons(wagons){
    const[first, second, ...rest] = wagons;
    return[...rest, first, second ];
}
// eachWagons = [1,2,3,5]
// console.log(listOfWagons(eachWagons))

function correctMissingWagons(wagons,missing){
    const indexOfLocomotive = wagons.indexOf(1);
    const before = wagons.slice(0, indexOfLocomotive + 1);
    const after = wagons.slice(indexOfLocomotive + 1);
    return[...after, ...missing, ...before]
}

// let eachWagonsID = [1, 5, 20, 7, 4, 8];
// let missingWagons = [3, 17, 6, 15];
// console.log(correctMissingWagons(eachWagonsID, missingWagons));

function extendRouteInformation(route, moreInfo) {
    return { ...route, ...moreInfo };
  }

function separateTimeOfArrival(routeInfo) {
    const { timeOfArrival, ...rest } = routeInfo;
    return [timeOfArrival, rest];}


      