// Searching Element
const nums = [3, 5, 9, 10, -2, 9, 2, 3, 3]

// 1. find(predicate) : Returns first matched element

let matchedElement = nums.find(element=>element===9)
// console.log(matchedElement)

matchedElement = nums.find(element=>element===19) // Element is Not present
// console.log(matchedElement) // Expected output: undefined

// 2. findIndex(predicate)
let matchedIndex = nums.findIndex(ele=>ele===9)
// console.log(matchedIndex)

matchedIndex = nums.findIndex(ele=>ele===19) // Element not present
// console.log(matchedIndex) // Expected output -1

// 3. findOf(element)
// console.log(`First occurrence index of element 9 = ${nums.indexOf(9)}`)
// console.log(`First occurrence index of element 19 = ${nums.indexOf(19)}`)

// 4. includes(element)
// #**#: checks if element exists or not, If exists return true, false otherwise
// console.log(nums.includes(9))   // return: true
// console.log(nums.includes(19))  // return: false


// join(seperatorString=",")
// const fiveElements = ['Air', 'Earth', 'Fire', 'Water', 'Sky']
// console.log(fiveElements.join("-")) // Output: "Air-Earth-Fire-Water-Sky"

// console.log([1,2,[2.1, 2.2], 3].join()) // Output: "1,2,2.1,2.2,3"

// lastIndexOf(element, fromIndex)
// #**#: Finds the index of last occurance of the element
const ages = [1, 14, 9, 3, 14, 8, 0, 14, 9, -1, -4]
// console.log(ages.lastIndexOf(14)) // output: 4
// console.log(ages.lastIndexOf(14, 3)) // output: 1

// Finding all occurrences of 14
const occIndices = []
let idx = ages.length

do{
    
    idx = ages.lastIndexOf(9, idx-1)
    idx !== -1 ? occIndices.push(idx): ''

}while(idx !== -1)

console.log(occIndices)



