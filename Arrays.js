// Unshift and Push function
let papu = [1,2,3,4,5]
console.log(papu.push(6))

let papu2 = [1,2,3,4,5]
console.log(papu2.unshift(0))

//toString
console.log(papu.toString())

//Splice: Used to remove an element from any specified index
console.log(papu.splice(3,2)) // This will remove the elements in the position 3 and 4

//Concat: Joins two arrays
console.log(papu.concat(papu2)) //This will join the two arrays

//indexOF: Searches an element of an array and returns its position 
console.log(papu.indexOf(6)) // This will return 3, after use the function splice() 

//find: Returns the first value of the array element that passes a given test.
console.log(papu2.find(x => x<1))

//findIndex: Returns the first index of the array element that passes a given test.
function isPair(x) {
    return x % 2 == 0
}
let papuNumeros = [1,3,13,23,24,30,45]
let par = papuNumeros.findIndex(isPair)
console.log(par)

//forEach: Calls a function for each element.
function div2(x){
    console.log(x/2)
}
papuNumeros.forEach(div2)

//includes: Checks if an array contains a specified element.
console.log(papuNumeros.includes(2))
console.log(papuNumeros.includes(23))

//sort: Sorts the elements alphabetically in strings and ascending order in numbers.
let papuNumeros2 = [43,223,1,543,4392,34,254,590,-1,-456]
console.log(papuNumeros2.sort()) //As the sort function turn the array into a string, 223 and 254 are greater than 34 and 43 numerically, but it comes first than them. It is because "2"<"3"

//slice: Selects part of an array and returns it as a new array.
let papuNumeros21 = papuNumeros2.slice(2,7)
console.log(papuNumeros21) //It shows the array sorted

//constructor: The constructor property returns the function that created the Array prototype.
let constructor = papuNumeros.constructor
console.log(constructor)

//copyWithin: The copyWithin() method copies array elements from one position to another in the given array.
let cosa = ["Vatista", "Heathcliff", "DULLAHAN", "▄ ▄ ▄ ▄ ▄", "Sancho", "Philip"]
cosa.copyWithin(5,3)
console.log(cosa)