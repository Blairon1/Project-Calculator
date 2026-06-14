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
        if(current_state != SHOWING_RESULT){ // Prevents numpad after equation, must click operation
            let numDisplay = element.textContent; //Selected number for the display
            updateCurrentNumber(numDisplay);
            updateDisplay(currentNumber);

            current_state = ENTERING_NUMBER;
                
            console.log("[numButton]")
            console.table({CN: currentNumber, CS: current_state, CPO: pendingOperator, CR: result });
        }
   })
});


//       ----------------       Clear and Equals expressions    ------------------  //

function clearCalculator(){
    currentNumber = ""; result = null; pendingOperator = null; current_state = null;
    updateDisplay("0");
    console.log("CLEARED! [clearButton]");
    console.table({CN: currentNumber, CS: current_state, CPO: pendingOperator, CR: result });
}

const clearButton = document.querySelector('#clear'); // clear-button reference
clearButton.addEventListener("click", clearCalculator);


const evaluate = document.querySelector('#equal'); // equal-button reference
evaluate.addEventListener("click", () =>{
    if(current_state == ENTERING_NUMBER && pendingOperator != null && result != null){
        handleEquals();
    }
});



//       ----------------       Operation Events    ------------------  //

const operatorButton = document.querySelectorAll('.operator'); // num-button reference
operatorButton.forEach(element => {
    element.addEventListener("click", ()=>{
        if(current_state == ENTERING_NUMBER || current_state == OPERATOR_SELECTED){
            console.log("[operatorButton] - Before handleOperator")
            console.table({CN: currentNumber, CS: current_state, CPO: pendingOperator, CR: result });
            if(current_state == ENTERING_NUMBER){
                handleOperator(element.textContent);
            }else if(current_state == OPERATOR_SELECTED){ // User changes mind and selects a different operation
                handleOperator(element.textContent);
                console.log("OPERATION SWITCHED!");
            }
        }else if(current_state == SHOWING_RESULT){
            handleOperator(element.textContent);
            console.log("OPERATION AFTER EQUATION!")
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
    }else if(operation == "X"){
        return multiply(number1, number2);
    }else if(operation == "/"){
        if(number2 == 0){
            alert("You Can't Divide by 0! Try Again.");
            clearCalculator();
        }else{
            let quotient = divide(number1,number2).toFixed(5); // Rouund to the 5th decimal placement
            return Number(quotient);
        }
    }
}




// 
function handleOperator(operation){
    if((result != null && current_state == OPERATOR_SELECTED) || (result != null && current_state == SHOWING_RESULT)){
        pendingOperator = operation; 
        current_state = OPERATOR_SELECTED;
    }else if(result == null){
        result = Number(currentNumber);
        pendingOperator = operation; currentNumber = "";
        current_state = OPERATOR_SELECTED;
    }else if(result != null){
        result = operate(result, pendingOperator, Number(currentNumber));
        if(current_state != null){
            pendingOperator = operation; currentNumber = "";
            current_state = OPERATOR_SELECTED;
        }

    }
   

    console.log("[handleOperator]")
    console.table({CN: currentNumber, CS: current_state, CPO: pendingOperator, CR: result });


}

function handleEquals(){
    if(current_state == ENTERING_NUMBER){
        result = operate(result, pendingOperator, Number(currentNumber));
        if(current_state != null){
            pendingOperator = null; currentNumber = "";
            current_state = SHOWING_RESULT;
            updateDisplay(result);
        }
    }


    console.log("[handleEquals]")
    console.table({CN: currentNumber, CS: current_state, CPO: pendingOperator, CR: result });
}

