const Prompt = require("prompt-sync")();


// Exercise 1
function removeEven(arr){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] % 2 == 0){
            arr.splice(i,1)
        }
    }
    console.log(arr)
}
// removeEven([1,2,3,4,5,6,7,8,9,10])

// Exercise 2
function noDupe(arr){
    arr = new Set(arr)
    console.log(arr)
}

// noDupe([1,2,3,4,4,4,5,5,6,7,8,8,])

// Exercise 3
function  checker(arr, x){
    return arr.includes(x)
}

// console.log(checker([1,2,3], 3))

// Exercise 4
function numObj(arr){
    let finish = []
    for(let i = 0; i< arr.length; i++){

        let letter = String.fromCharCode(arr[i])

        finish.push(`{'${arr[i]}':'${letter}'}`)
    }
    return finish
}

// console.log(numObj([117, 118, 120]))

//Exercise 4 (A different way i was experimenting with) / didn't feel like filling in the entire array so its just abc
function numTwo(){
    let arr =[97,98,99]
    let letters = new Map([
        ["a", 97],
        ["b", 98],
        ["c", 99]
    ])
    for(const code of arr){
        for(const [key,value] of letters){
            if(value === code){
                console.log(key)
            }
        }
    }
}
// numTwo()