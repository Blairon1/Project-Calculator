let currentSelectionOfNums = [];

//DOM manipulation 
const display = document.querySelector('.display');



// Function operations
function add(arrayOfTwoNums){
    return arrayOfTwoNums[0] + arrayOfTwoNums[1];
}

function subtract(arrayOfTwoNums){
    return arrayOfTwoNums[0] - arrayOfTwoNums[1];
}

function multiply(arrayOfTwoNums){
    return arrayOfTwoNums[0] * arrayOfTwoNums[1];
}

function divide(arrayOfTwoNums){
    return arrayOfTwoNums[0] / arrayOfTwoNums[1];
}

function operator(arrayOfTwoNums, operation){
    return operation(arrayOfTwoNums);
}