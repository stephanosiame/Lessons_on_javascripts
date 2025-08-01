const obj = {
    name1 :  "Stephano"
};
obj.name1 = "Asha"
obj["name1"] = "Amina"

obj.name2 = "Eliza"
obj.name3 = "Jowh"
obj.name4 = "Adam"

delete obj.name1

obj.hasOwnProperty("name1")

for (let key in obj){
    console.log(key, obj[key])
}

console.log(obj)