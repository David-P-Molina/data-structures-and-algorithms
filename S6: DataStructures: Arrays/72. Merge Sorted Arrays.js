// My Solution
mergeSortedArrays([0,3,4,31], [4,6,30])
let array1 = [0,3,4,31]
let array2 = [4,6,30]
const mergeSortedArrays = (arr1, arr2) => {
    if(arr1.length === 0 || arr2.length === 0) {
        return [...arr1, ...arr2]
    } else if(!Array.isArray(arr1) || !Array.isArray) {
        console.log("One of these is not an array")
    }
    const mergedArrays = [...arr1, ...arr2]
    let mergedSortedArray = mergedArrays.sort((a,b) => a-b)
    console.log(mergedArrays)
    return mergedSortedArray
}
mergeSortedArrays(array1, array2)

// Lesson's answer
function mergeSortedArrays(array1,array2) {
    const mergedArray = []
    let array1Item = array1[0]
    let array2Item = array2[0]
    let i = 0
    let j = 0

    //Check Input
    if (array1.length === 0) {
        return array2
    } else if (array2.length === 0) {
        return array1
    }

    while (array1item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array2Item)
            array1Item = array1[i]
            i++
        } else (!array1Item || array1Item > array2Item) {
            mergedArray.push(array1Item)
            array2Item = array2[j]
            j++
        }
    }
}