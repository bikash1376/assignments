/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max = numbers[0]
    for(num of numbers) {
        if(num>max) {
            max = num
        }
    }
    return max
    
}

const arr = [3, 7, 2, 9, 1]
console.log(findLargestElement(arr)) 

module.exports = findLargestElement;