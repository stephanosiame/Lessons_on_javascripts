function buildSign(occassion, name){
    return (`Happy ${occassion} ${name}`)
}
// console.log(buidSign('Birthday', 'Stephano'))

function buildBirthdaySign(age){
    return age > 50 ? "older" : "young";

}
// console.log(buildBirthdaySign(51))

function graduationCeremony(name, year){
    return `congratuation ${name} on your Graduation ${year}`
}
// console.log(graduationCeremony('Stephano', 2025))
