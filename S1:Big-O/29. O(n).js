const nemo = ['nemo', 'not nemo']

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo')
        }
    }
}
findNemo(nemo) //O(n) --> Linear Time, n=size of input 
// O(n) definition
// O(n) represents the complexity of a function that increases linearly and 
// in direct proportion to the number of inputs. This is a good example of how 
// Big O Notation describes the worst case scenario as the function could return 
// the true after reading the first element or false after reading all n elements.