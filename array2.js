// const nums = [1, 2, 3, 4, 5]
// const ages = new Array(21, 19, 17, 23, 20)


/* Array Methods */
// at(index)
// console.log(nums.at(2))
// console.log(`last element = ${nums.at(-1)}`) // last element's index = -1

// concat()
// const arr1 = [['a'], 'b', 'c']
// const arr2 = ['d', 'e']
// const arr3 = [...arr1, ...arr2]
// const arr3 = arr1.concat(arr2) // * Shallow copy, * Not recursive
// arr3[0][0] = 'z'
// console.log(arr1, arr3)

// copyWithin(target, start, end)
// const arr = ['a', 'b', 'c', 'd']
// arr.copyWithin(0, 1, 2)
// arr.copyWithin(0, 2)
// console.log(arr)

// Application
/* 
    1. Circular Rotation
*/ 
// const arr = [1, 2, 3, 4]
// console.log(arr)

// 1.1 Left Shift
// const temp = arr.at(0)
// arr.copyWithin(0, 1)
// arr[arr.length-1] = temp

// 1.2 Right Shift
// const temp = arr.at(-1)
// arr.copyWithin(1, 0)
// arr[0] = temp

// console.log(arr)

// entries()
// const arr = [1, 2, 3]
// const iterator = arr.entries()
// for(const [index, value] of iterator){
//     console.log(index, value)
// }


// every(predicate)
const arr = [4, 9, 11, 7]
// #**# checking if all the elements in the array are less than 10
// if(arr.every(element=>element<10)){
//     console.log('All elements are less than 10')
// }else{
//     console.log('All elements are not less than 10')
// }

// some(predicate)
// if(arr.some(ele=>ele>10)) 
//     console.log('Atleast one element is greater than 10')
// else 
//     console.log('All element are less than or equal to 10')


// #**# checking subset
const arr1 = [1, 2, 3]
const arr2 = [3, 2]


// #**# 1.
// if (arr2.every(element=>arr1.includes(element))){
//     console.log('arr2 is subset of arr1')
// }
// else{
//     console.log('arr2 is not subset of arr1')
// }


// #**# 2. 
// const set = new Set(arr1)
// if (arr2.every(ele=>set.has(ele))){
//     console.log('arr2 is subset of arr1')
// }
// else{
//     console.log('arr2 is not subset of arr1')
// }


// fill()
// const visited = new Array(100)
// visited.fill(false)
// console.log(visited)

const nums = [2, 8, 9, 2]
nums.fill(1, 1)
console.log(nums)
