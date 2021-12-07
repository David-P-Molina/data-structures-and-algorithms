// Arrays- items that have an index of where that item is stored
// Arrays have the smallest footprint, and least rules

// lookup O(1)
// push O(1)
// insert O(n)
// delete O(n)

const strings = ['a','b','c','d']
//4items * 4bits = 16 bytes of storage
//storing in sequential order

strings[2]
//tells computer go to array and grab 3rd item from array where it is stored

//Pros
//push // O(1)
strings.push('e') //adds to the end of the arrray 

//pop //O(1)
strings.pop() // removes the last element of an array

//unshift // O(1)
strings.unshift('x') // adds an element to the beginning of the array

//shift // O(n) //loop through array and realign the indexes
strings.shift() // removes an element to the beginning of the array

//splice //O(n) 
strings.splice() //Starting number tells where to go, second arg says how many to remove, 3rd arg says what to add