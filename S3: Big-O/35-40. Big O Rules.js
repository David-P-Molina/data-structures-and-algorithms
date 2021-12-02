// Rule 1: Worst Case
const array = ['dory', 'bruce', 'marlin', 'gill', 'nemo', 'bloat']
function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        console.log('Running')
        if (array[i] === 'nemo') {
            console.log('Found Nemo')
            break
        }
    }
}
// As it currently stands the array runs 6 times checking for Nemo in each spot
// Even with a break statement it will still check every spot
// Always code for worst case scenario

// Rule 2: Remove Constants
// Definition:  It simply requires you to ignore any non-input-size-related
// constants. Coefficients in Big-O are negligible with large input sizes.
// With Big O We see how the line increases/changes as input increases


// Rule 3: Different terms for inputs
function compressBoxesTwice(boxes1, boxes2) {
    boxes1.forEach(function(boxes){
            console.log(boxes)
        })
        boxes2.forEach(function(boxes){
            console.log(boxe)
        })
    }
    // The Big O is not O(2n)/O(n) 
    // The Big O is now O(a + b) 
//Exercise Log of all pairs
const array = [1,2,3,4,5]
function logAllPairsOfArray(array) {
    for(let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++)
        console.log(array[i], array[j])
    }
}
logAllPairsOfArray(array)
    // The Big O is O(n^2)
    // Nested loops/functions/actions are multiplied
    //loops/functions/actions that are one after the other are added


// Rule 4: Drop Non Dominants
function printAllNumbersThenAllPairSums(numbers) {
    console.log('these are the numbers:')
    numbers.forEach(function(number) {
        console.log(number)
    })
    console.log('and these are their sums:')
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
            console.log(firstNumber + secondNumber)
        })
    })
}
printAllNumbersThenAllPairSums([1,2,3,4,5])


// O(n^2) //Drop everything that is a constant and worry about scale