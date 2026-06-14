// Variable Declaration 

let ENTERING_NUMBER = "ENTERING_NUMBER";
let OPERATOR_SELECTED = "OPERATOR_SELECTED";
let SHOWING_RESULT = "SHOWING_RESULT";


let currentNumber = "";
let result = null;
let pendingOperator = null;
let current_state = null;



//       ----------------       DOM manipulation    ------------------  //

const display = document.querySelector('.display'); // display reference

const numButton = document.querySelectorAll('.num'); // num-button reference
numButton.forEach(element => {
    element.addEventListener("click", ()=>{
        let numDisplay = element.textContent; //Selected number for the display
        updateCurrentNumber(numDisplay);
        updateDisplay(currentNumber);

        current_state = ENTERING_NUMBER;
        console.log(`[numButton] Current Number: ${currentNumber} | Current State: ${current_state} |
            Current Pending Operator: ${pendingOperator} | Current Result: ${result}`);
   })
});


//       ----------------       Clear and Equals expressions    ------------------  //

const clearButton = document.querySelector('#clear'); // clear-button reference
clearButton.addEventListener("click", ()=>{
    currentNumber = ""; result = null; pendingOperator = null; current_state = null;
    updateDisplay("0");
    console.log("CLEARED!");
});


const evaluate = document.querySelector('#equal'); // equal-button reference
evaluate.addEventListener("click", () =>{
    if(current_state == ENTERING_NUMBER && pendingOperator != null && result != null){
        handleEquals();
    }
});



//       ----------------       Operation Events    ------------------  //

const numOperator = document.querySelectorAll('.operator'); // num-button reference
numOperator.forEach(element => {
    element.addEventListener("click", ()=>{
        if(current_state == ENTERING_NUMBER){
            handleOperator(element.textContent);
        }    
   })

});





// Display Methods
function updateDisplay(newDisplay){
    display.textContent = newDisplay;
}

function updateCurrentNumber(newNumber){
    currentNumber += newNumber;
}


// Function operations
function add(number1, number2){
    return (number1 + number2);
}

function subtract(number1, number2){
    return (number1 - number2);
}

function multiply(number1, number2){
    return (number1 * number2);
}

function divide(number1, number2){
    return (number1 / number2);
}

// Method to evaluate expressions 
function operate(number1, operation, number2){
    if(operation == "+"){
        return add(number1, number2);
    }else if(operation == "-"){
        return subtract(number1, number2);
    }else if(operation == "x"){
        return multiply(number1, number2);
    }else if(operation == "/"){
        return divide(number1,number2);
    }
}




// 
function handleOperator(operation){
    if(result == null){
        result = Number(currentNumber);
        pendingOperator = operation; currentNumber = "";
        current_state = OPERATOR_SELECTED;
    }else if(result != null){
        result = operate(result, pendingOperator, Number(currentNumber));
        pendingOperator = operation; currentNumber = "";
        current_state = OPERATOR_SELECTED;
    }
    console.log(`[handleOperator] Current Number: ${currentNumber} | Current State: ${current_state} | 
        Current Pending Operator: ${pendingOperator} | Current Result: ${result}`);


}

function handleEquals(){
    if(current_state == ENTERING_NUMBER){
        result = operate(result, pendingOperator, Number(currentNumber));
        pendingOperator = null; currentNumber = "";
        current_state = SHOWING_RESULT;
        updateDisplay(result);
    }
    console.log(`[handleEquals] Current Number: ${currentNumber} | Current State: ${current_state} | 
        Current Pending Operator: ${pendingOperator} | Current Result: ${result}`);
}

