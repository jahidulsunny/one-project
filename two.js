//071 Higher Order Function in Javascript

function add(a, b) {
    return a + b
}

function manipulate(a, b, func) {
    var c = a + b
    var d = a - b
    function multiple() {
        var m = func(a, b)
        return c * d * m
    }
    return multiple
}

var result = manipulate(3, 4, add)
console.log(result())

//higher order function 2nd time practise

function run(a, b) {
    return a * b
}

function manipulate(a, b, func) {
    var c = a + b
    var d = a - b
    return function () {
        var m = func(a, b)
        return c * d * m
    }
}

var result = manipulate(3, 4, run)
console.log(result())

//072 Closure First Look in Javascript | Stack Learner

var a = 10

function forCloser() {
    console.log(a)
}
forCloser()  //when a function block use his previous variable on his block which called closer

//073 Callback Function in Javascript | Stack Learner
function sample(a, b, cb) {
    var c = a + b
    var d = a - b
    var result = cb(c, d)
    return result
}

var addition = sample(3, 4, function (c, d) {
    return c + d
})
console.log(addition)

var another = sample(3, 4, function (c, d) {
    return c - d
})
console.log(another)

//074 Foreach Implementation in Javascript | Stack Learner
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var arr1 = [2, 4, 6, 8]
var sum = 0
arr.forEach(function (value, index, arr) {
    sum += value
})
console.log(sum)
//Implementing of forEach method
function myForEach(arr, cb) {
    for (i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
}
myForEach(arr, function (value, index, arr) {
    console.log(value, index, arr)
})

myForEach(arr1, function (value, index, arr) {
    console.log(value, index, arr)
})

//075 Map Function in Javascript | Stack Learner

var arrMap = [1, 2, 3, 4, 5, 6, 7]

var sqr = arrMap.map(function (value, index, arr) {
    return value = Math.floor(Math.random() * 100)
})
console.log(sqr)
   //implementing map method in javascript
function myMap(arr,cb){
    newArr=[]
    for(i=0;i<arr.length;i++){
        var temp=cb(arr[i],i,arr)
        newArr.push(temp)
    }
    return newArr
} 

var sqr1=myMap(arrMap,function(value,index,arr){
    return value*value
})
console.log(sqr1)
