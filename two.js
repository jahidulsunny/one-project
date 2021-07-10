//071 Higher Order Function in Javascript

function add(a,b){
    return a+b
}

function manipulate(a,b,func){
    var c=a+b
    var d=a-b
    function multiple(){
        var m=func(a,b)
        return c*d*m
    }
    return multiple
}

var result=manipulate(3,4,add)
console.log(result())

   