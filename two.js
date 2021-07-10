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