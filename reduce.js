//7.1 Understand The Concept of Reduce

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Implementing sum
function sumFunc(acc, cur) {
    return acc + cur
}

var sum = arr.reduce(sumFunc)
console.log(sum)

//Implementing for Average
const avg = arr.reduce((acc, cur, index, arr) => {
    acc += cur
    if (index === arr.length - 1) {
        return acc / arr.length
    } else {
        return acc
    }
})
console.log(avg)

//7. 3 Anatomy of Reduce Method
let numbers = [3, 5, 3, 5, 32, 43, 32]

function sumFunc1(acc, cur, index) {
    console.log(`Index-${index} Accumulator-${acc} Currenvalue-${cur}`)
    return acc + cur
}
var sum1 = numbers.reduce(sumFunc1)

console.log(sum1)
//As we cannot called any initial value for why index[0] element is accumulator and index[1] is current value


let numbers1 = [3, 5, 3, 5, 32, 43, 32]

function sumFunc2(acc, cur, index) {
    console.log(`Index-${index} Accumulator-${acc} Currenvalue-${cur}`)
    return acc + cur
}
var sum2 = numbers.reduce(sumFunc2, 10)

console.log(sum2)
//As we called any initial value so accumulated become to that initial value


//7.4 Example Array Flatten 
let nastedarr = [[1, 2], 3, [4, 5], 6, [7, 8], 9]
//Arry Flat Method
const nastedArr1 = nastedarr.flat()
console.log(nastedArr1)
//we CAN DO THE SAME USING REDUCE METHOD

const flatArr2 = nastedarr.reduce((acc, cur, index) => {
    console.log(`Index-${index} Accumulator-${acc} Currenvalue-${cur}`)
    return acc.concat(cur)
}, [])

console.log(flatArr2)

//7.5 Example FlatMap
const arrMap = [[1, 2], 3, [4, 5]]
const map = arrMap.map((x) => [x * 2]).flat()
console.log(map)

//flatMap
const map1 = arrMap.flatMap((x) => [x * 2])
console.log(map1)
//WE CAN DO THIS USE BY REDUCE METHOD
const reduceFlatMap = arrMap.reduce((acc, cur) => {
    return acc.concat(cur * 2)
}, [])

console.log(reduceFlatMap)

//7.6 Example Frequency Checker 
const vote = ['Love', 'sad', 'wow', 'care', 'angry', 'Love', 'sad', 'wow', 'care', 'angry', 'Love', 'sad', 'wow',
    'care', 'angry', 'Love', 'sad', 'wow', 'care', 'angry', 'Love', 'sad', 'wow', 'care', 'angry', 'Love', 'sad', 'wow',
    'care', 'angry', 'Love', 'sad', 'wow', 'care', 'angry']

const checker = vote.reduce((acc, cur) => {
    if (acc[cur]) {
        acc[cur]++
    } else {
        acc[cur] = 1
    }
    return acc
}, {})

console.log(checker)

//7.7 Implement Our Own Reduce

function myReduce(arr, cb, init) {
    let acc = init
    start = 0
    if (!init) {
        acc = arr[0]
        start = 1
    }
    for (i = start; i < arr.length; i++) {
        acc = cb(acc, arr[i], i, arr)
    }
    return acc
}

const arrI = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const test = myReduce(arrI, (acc, cur) => {
    return acc + cur
})
console.log(test)

//7.9 Reduce Array into Single Object 
let products = [
    { name: 'Shirt', price: 500 },
    { name: 'T-Shirt', price: 300 },
    { name: 'pant', price: 1000 },
    { name: 'panjabi', price: 1500 },
    { name: 'Shirt', price: 500 },
    { name: 'T-Shirt', price: 300 },
    { name: 'pant', price: 1000 },
    { name: 'panjabi', price: 1500 },
    { name: 'Shirt', price: 500 },
    { name: 'T-Shirt', price: 300 },
    { name: 'pant', price: 1000 },
    { name: 'panjabi', price: 1500 },
    { name: 'Shirt', price: 500 },
    { name: 'T-Shirt', price: 300 },
    { name: 'pant', price: 1000 },
    { name: 'panjabi', price: 1500 },
    { name: 'Shirt', price: 500 },
    { name: 'T-Shirt', price: 300 },
    { name: 'pant', price: 1000 },
    { name: 'panjabi', price: 1500 },
    { name: 'Shirt', price: 500 },
    { name: 'T-Shirt', price: 300 },
    { name: 'pant', price: 1000 },
    { name: 'panjabi', price: 1500 }
]
const invoice = products.reduce((acc, cur) => {
    if (acc[cur.name]) {
        acc[cur.name].quantity++
        acc[cur.name].price += cur.price
    } else {
        acc[cur.name] = {
            price: cur.price,
            quantity: 1
        }
    }
    return acc
}, {})

console.log(invoice)
