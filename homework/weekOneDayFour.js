// Question #1
 Declare

 console.log("Declare");

// Question #2

Invoke

console.log("Invoke");

// Question #3
const student = {
    Name: "Nephie",
    Grade: "4",
    School: "Manatee",
}




// Question #4
function processFavoriteFood(arr){

    // remove first element of the array
    arr.shift();
    // add kiwi at the end of the array
    arr.push('Kiwi');

    //console.log(arr);
}


const favoriteFruits = ['Mango','Lychee','Strawberry','Papaya'];
//n before calling the function
console.log('Before: ', favoriteFruits)
 
// Invoke the function to modify the array
processFavoriteFood(favoriteFruits);

console.log('Modified: ',favoriteFruits);

 


