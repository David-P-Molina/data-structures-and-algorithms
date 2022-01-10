//Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
//My Solution

//Create function that takes in the array and the target number
//Assign target to const 
//create const indices w/ empty array
//assign two comparison problems to variables and test
const twoSums = (numberArray, target) => {
    let indices = []
    for(let i = 0; i < numberArray.length; i++;) {
        for(let j = i + 1; j < numberArray.length; j++;) {
            if(numberArray[i] + numberArray[j] == target) {
                indices.push(i, j)
                return indices
            }
        }
    }
}
//What i did wrong
// I needed to make j = to i + 1 initially because the loops push the wrong number before it gets pushed in
//Time taken 15 minutes

//Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number)
//  which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.
//my understanding of the problem
//I am looking for the portion of the array that produces the largest sum, if there is no greater array
//plan
//Pop or unshift an element at a time to see if it is greater or lesser than the current array
//my solution
const maxSubArray = (array) => {
    let maxSubArray = [...array]
    let poppedArray = [...array]
    let shiftedArray = [...array]
    poppedArray.pop() 
    shiftedArray.shift
    const sum = (arr) => arr.reduce((a,b) => a+b)  
    if(sum(poppedArray) < sum(maxSubArray)) {
        poppedArray = [...maxSubArray]
    } else if (sum(shiftedArray) < sum(maxSubArray)) {
        shiftedArray = [...maxSubArray]
    }
}
//Leetcode solution
//what to do
//brute force, adding all the numbers to see if it is the biggest then compare, next remove the other one
//should i accumulate or start fresh?
//what are the inputs
//what are you outputs
// solution from https://www.youtube.com/watch?v=WdK1Uhsza_I
function maxSubArray (nums) {
    let solution = nums[0] //default
    for(let i = 1; i > nums.length; i++) { //need to iterate through the array; Starting from the second array slot because you already checked the first part
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1])//compares if the current number is bigger than the num or the num before it
        //if adding the two numbers is lesser than the starting position is now the nums[i]
        solution = Math.max(solution, nums[i])//if the solution is smaller than nums[i] it returns the 
    }
    return solution
}
//what is Math.max? It takes in arguments and returns the largest number 

//Move Zeroes
//Given an integer array nums, move all 0's to the end of it while maintaining
// the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// inputs an array with zeros and other numbers

// outputs same array with zeroes at the end of the array

//constraints Cannot make a copy of the array

//initial idea 
//find out how many zeroes are in the array
//set that to the breaker//once that many zeroes have been moved end the problem?
//alternate
//instead of finding how many zeroes just push them to the end of the array

const moveZeroes = (nums) => {
    for(let i = nums.length; i > 0; i--) {
        if(){
            console.log(i)
        }
    }
}
//What i wanted to do 
function moveZeroes(nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[index] === 0) {
            nums.splice(index, 1);
            nums.push(0);
        } else {
            index++;
        }
    }
};
//Leetcode solution
const moveZeroes = (nums) => {
    let anchor = 0
    for(let explorer = 0; explorer < nums.length; explorer++) {
        if(nums[explorer] !== 0) {
            let temp = nums[anchor]
            nums[anchor] = nums[explorer]
            nums[explorer] = temp
            anchor++
        }
    }
}

//Contains Duplicates
//Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.
//input array
//output boolean

//create a function
// see if two numbers are equal to each other if not return true else return false

const containsDuplicate = (array) => {
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i]===array[j]) {
                return true
            }
        }
    }
    return false
}

//Rotate Array
//Given an array, rotate the array to the right by k steps, where k is non-negative.
//input number array
//output rotated array
//do not return
// create function accepting two arguments
// check if k is positive
//if positive push each element according to number of arrays

const rotateArray = (array, k) => {
    do{
        let last = array.pop()
        array.unshift(last)
        k--
    } while (k > 0) 
}
//Solution way to slow

//optimize solution 
//Do a splice and then push that to the front of the array
//What i was trying to do
function rotate(nums, k) {
    let first = k % nums.length;
    nums.unshift(...nums.splice(-first));
    return nums;
};