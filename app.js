let currentSelectionOfNums = [];
let currentNumber = "";
let currentOperator = "";

//DOM manipulation 
const display = document.querySelector('.display');

const numButton = document.querySelectorAll('.num');
numButton.forEach(element => {
    element.addEventListener("click", ()=>{
        //console.log("Clicked");
        let numDisplay = element.textContent; //Selected number for the display

        
        updateCurrentNumber(numDisplay);
        updateDisplay(currentNumber);
        console.log(currentNumber);
        //updateSelectionOfNumbers(currentNumber);
        console.log(currentSelectionOfNums);
        console.log(`Current Operator: ${currentOperator}`);    })
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", ()=>{
    if(currentSelectionOfNums.length == 0){
        updateDisplay("0");
        currentNumber = "";
        currentOperator = "";
    }else{
        currentSelectionOfNums.length = 0;
        currentNumber = "";
        currentOperator = "";
        updateDisplay("0");
        console.log(`Current selection of elements: ${currentSelectionOfNums}`);
    }
    console.log(`Current Operator: ${currentOperator}`);
});


const equalButton = document.querySelector('#equal');
equalButton.addEventListener("click", ()=>{
    if(currentSelectionOfNums.length == 1){
        updateSelectionOfNumbers(currentNumber); // Add second operand to the array of numbers
        if(currentOperator == "+"){
            let sum = add(currentSelectionOfNums);

            // Update the values
            currentNumber = "" + sum;
            updateDisplay(currentNumber);
            currentSelectionOfNums.length = 0;
            updateSelectionOfNumbers(currentNumber);
            currentNumber = "";
            currentOperator = "";
        }
    }
});






const addButton = document.querySelector('#addition');
addButton.addEventListener("click", ()=>{

    // First number plus
    if(currentSelectionOfNums.length == 0 && currentNumber.length > 0 && currentOperator != "+"){
        currentOperator = "+";
        updateSelectionOfNumbers(currentNumber);
        currentNumber = "";
        updateDisplay("0");

    // First number plus *second number 
    }else if(currentSelectionOfNums.length > 0 && currentNumber.length > 0){
        // Update the selection of numbers with the two being used
        /*
        updateSelectionOfNumbers(currentNumber);

        // Compute the sum
        let sum = add(currentSelectionOfNums);

        // Update the values
        currentNumber = "" + sum;
        updateDisplay(currentNumber);
        currentSelectionOfNums.length = 0;
        updateSelectionOfNumbers(currentNumber);
        currentNumber = "";
        currentOperator = "";
        */
    }        

});





// Display Methods
function updateDisplay(newDisplay){
    display.textContent = newDisplay;
}

// Update selection of numbers
function updateSelectionOfNumbers(newNumber){
    currentSelectionOfNums.push(Number(newNumber));
    console.log(currentSelectionOfNums);
}

function updateCurrentNumber(newNumber){
    currentNumber += newNumber;
}


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