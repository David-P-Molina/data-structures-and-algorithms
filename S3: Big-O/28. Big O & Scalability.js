const nemo = ['not nemo','nemo']
const everyone = ['dory','bloat', 'nigel', 'cathy', 'garfield', 'tammy', 'dina', 'tina', 'nemo']
const largeArray = new Array(100000).fill('nemo')
function findNemo(array) {
    let t0 = performance.now()

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo')
        }
    }
    let t1 = performance.now()
    console.log('call to find nemo took ' + (t1 - t0) + " Milliseconds")
}
findNemo(nemo)
console.log('1')
findNemo(everyone)
console.log('2')
findNemo(largeArray)
//Instead of using performance.now use Big O to count how many operations a computer must take to complete