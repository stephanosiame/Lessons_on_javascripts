function cookingStatus(time){
    if(time == 0){
        return "Lusagan is done!"
    }else if(0< time <= 12){
        return "Not done please wait.";
    }else{
        return " you do not set time";
    }
    
}

//Estimate the preparition time
function preparationTime(layers, avgTimePerLayer = 2){
    return layers.length * avgTimePerLayer;
}

// Compute the amounts of noodles and sauce needed
function quantities(layers){
    let noodles = 0;
    let sauce = 0;

    for(let layer of layers){
        if (layer === "noodles"){
            noodles += 50;

        }
        else if (layer === "sauce"){
            sauce += 0.5;
        }
    }
    return {noodles, sauce};
}
function addSecretIngredient(friendsList, myList){

}

function scaleRecipe(recipe, portions){
    const scaled = {};
    for(let ingredient in recipe){
        scaled[ingredient] = recipe[ingredient]
    }
    return scaled;
}


console.log(cookingStatus(12));
// => 'Not done, please wait.'

console.log(cookingStatus());
// => 'You forgot to set the timer.'

const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];
console.log(preparationTime(layers, 3));
// => 18

console.log(preparationTime(layers));
// => 12

console.log(quantities(layers));
// => { noodles: 100, sauce: 0.4 }

const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];
addSecretIngredient(friendsList, myList);
console.log(myList);
// => ['noodles', 'meat', 'sauce', 'mozzarella', 'kampot pepper']

const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};
console.log(scaleRecipe(recipe, 4));
// => { noodles: 400, sauce: 1, mozzarella: 2, meat: 200 }

console.log(recipe);
// => original unchanged
