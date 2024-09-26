// Write your solution here!//
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name){
    cats.pop()
}
function  destructivelyRemoveFirstCat(name){
    cats.shift();
}
function appendCat(name){
    let newCatArray = [...cats, name];
    return newCatArray;
}
function prependCat(name){
    return [name, ...cats];  
}
function  removeLastCat(name){
    cats.slice()
    return cats.slice(0, cats.length - 1);
}
function removeFirstCat(name){
    return cats.slice(1)
}