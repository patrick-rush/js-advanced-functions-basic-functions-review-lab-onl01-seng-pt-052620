// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(adjective="special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

let encouragingPromptFunction = wrapAdjective("!!!")

const Calculator = {}

Calculator.add = function () {
    return 1 + 3;
}

Calculator.subtract = function () {
    return 1 - 3;
}

Calculator.multiply = function () {
    return 1 * 3;
}

Calculator.divide = function () {
    return 10 / 5;
}

function actionApplyer(startingInteger, array) {
    let num = startingInteger;
    array.forEach(function (func) {
        num = func(num);
    })
    return num
}


// project review question => The main reason you would use an arrow function over a keyword function 

// What is the relationship of context. If you need the function to have access to the same context thtat you define it in, you need to use an arrow function

// static functions are equivalent to class methods in
// functions defined on the prototype are equivalent to instance methods
