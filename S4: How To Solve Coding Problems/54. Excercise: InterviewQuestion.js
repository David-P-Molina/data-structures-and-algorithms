// Given 2 arrays, create a function that lets a user know (true/false)
// whether these two arrays contain any common items
// example arrays
const arr1 = [1,3,65,7]
const arr2 = [8,54,3,144]
// should return true
const array1 = [1,3,65,7]
const array2 = [8,54,30,144]
// should return false

// Input: 2 parameters - arrays - no size limit
// Output: true || false 

//ask questions, whats more important, time complexity or space complexity

//compares two different arrays
// O(n^2)

// function containsCommonItem(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr1[i] === arr2[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }
// containsCommonItem(array1,array2)

// O(a*b)
//BETTER SOLUTION
// array1 ==> obj {
// a: true
// b: true
// c: true
// }

function containsCommonItem2(array1, array2) {
    //loop through first array & create object where properties === items in the array
    let map = {};
    for (let i=0; i < array1.length; i++) {
        if (!map[array1[i]]) {
            const item = array1[i]
            map[item] = true
        }
    }
    console.log(map)
    //loop through second array and check if item in second array exists on created object
    for (let j = 0; j < array2.length; j++) {
        if (map[array2[j]]) {
            console.log("true")
        }
    }
    console.log("false")
}
containsCommonItem2(array1,array2)
// Start looking for ways to break code
// start testing your code with if statements

// Remember to name variables based on what you are going to do later on