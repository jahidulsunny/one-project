//js nasted loop
var n = 5
for (var i = 1; i <= n; i++) {
    result = ''
    for (var j = 1; j <= i; j++) {
        result += j + ' '
    }
    console.log(result)
}

//024. JS Switch Statement

var date = new Date()
var today = date.getDay()

switch (today) {
    case 0:
        console.log('Today is sunday')
        break

    case 1:
        console.log('Today is Monday')
        break

    case 2:
        console.log('Today is Tuesday')
        break

    case 3:
        console.log('Today is Wednesday')
        break

    case 4:
        console.log('Today is Thusday')
        break

    case 5:
        console.log('Today is Friday')
        break

    case 6:
        console.log('Today is starday')
        break
}

//030. JS While Loop

var isRunning = true
while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        console.log('Winner Winner Chicken Dinner')
        isRunning = false
    } else {
        console.log('You got' + rand)
    }
}

//031. JS Do While Loop 

var isRun = false
while (isRun) {
    console.log('I am running')
}
//do while loop
do {
    console.log('I am Running')
}
while (isRun)

//033. JS Break Statement

while (true) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        console.log('Winner Winner Chicken Dinner')
        break
    } else {
        console.log('You got' + rand)
    }
}

//034. JS Continue Statement

for (i = 1; i <= 10; i++) {
    if (i === 7 || i === 9) {
        continue
    } else {
        console.log(i)
    }
}

//041. JS String Length 

var str='Jahidul Islam Sunny'

var length=0

while(true){
    if(str.charAt(length)==''){
        break
    }else{
        length++
    }
}
console.log(length)

//046. JS Search Value in Array

var arr=[3,4,54,,65,43,534,53,23,53,654,67534,34,7645,234,564,234,54,643,3245,234,643,243,214,45,123,423]

var find=76458
var isfound=false

for(i=0;i<arr.length;i++){
    if(arr[i]===find){
        console.log('Data find on index '+i)
        isfound=true
        break
    }
}

if(!isfound){
    console.log('Data is not  found')
}