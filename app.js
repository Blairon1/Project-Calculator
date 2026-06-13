let firstNumber = null;
let secondNumber = null;

let lastOperator = null;
let operator = null;

let currentNumber = "";



//       ----------------       DOM manipulation    ------------------  //

const display = document.querySelector('.display'); // display reference

const numButton = document.querySelectorAll('.num'); // num-button reference
numButton.forEach(element => {
    element.addEventListener("click", ()=>{
        let numDisplay = element.textContent; //Selected number for the display
        updateCurrentNumber(numDisplay);
        console.log(`Clicked| Current Number: ${currentNumber}`);
        updateDisplay(currentNumber);


   })
});


//       ----------------       Clear and Equals expressions    ------------------  //

const clearButton = document.querySelector('#clear'); // clear-button reference
clearButton.addEventListener("click", ()=>{
    
});


const evaluate = document.querySelector('#equal'); // equal-button reference
evaluate.addEventListener("click", () =>{
   if(firstNumber != null && operator != null && currentNumber.length > 0){
    secondNumber = Number(currentNumber);
    operate(firstNumber,operator,secondNumber);
   }
});



//       ----------------       Operation Events    ------------------  //


const addButton = document.querySelector('#addition');
addButton.addEventListener("click", ()=>{
    if(currentNumber.length > 0 && firstNumber == null && secondNumber == null){
        updateDisplay(currentNumber + " +");
        firstNumber = Number(currentNumber);
        currentNumber = "";
    }
    operator = "+";
});


const subButton = document.querySelector('#sub');
subButton.addEventListener("click", ()=>{
    operator = "-";

});

const multButton = document.querySelector('#mult');
multButton.addEventListener("click", ()=>{
   operator = "x";

});


const divideButton = document.querySelector('#divide');
divideButton.addEventListener("click", ()=>{
    operator = "/";

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


// Method to evaluate expressions based on
function operate(number1, operation, number2){
    if(operation == "+"){
        firstNumber = add(number1,number2);
        updateDisplay(firstNumber);
    }
}