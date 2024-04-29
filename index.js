import filter from "./filter.js";
import reduce from "./reduce.js";
import map from "./map.js";
import forEach from "./forEach.js";

//Checking the Filter Function
let arr= [4,5,9,3,10,58,7]
console.log("We will use the below to implement all the functions:\n"+arr+"\n");

let ansForFilter = filter(arr, (number)=>number > 4)
console.log("After implementing filter function to filter numbers greater tha 4 the output is \n"+ansForFilter+"\n");

// Checking reduce Function
let ansForReduce = reduce(arr, (accumulator, number)=>accumulator+number);
console.log("After implementing reduce function to find sum of all elements of list and the output is "+ansForReduce+"\n");

//Checking map Function

let ansForMap = map(arr,(number)=>number+2);
console.log(  "After implementing map function to make a list in which each element is incremented by 2 and the output is \n"+ansForMap);


//checking forEach
console.log("After implementing forEach function to print the list and the output is \n");
forEach(arr, (number)=> console.log(number));

