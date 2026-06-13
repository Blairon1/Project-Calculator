let currentSelectionOfNums = [];
let currentNumber = "";
let currentOperator = "";

//       ----------------       DOM manipulation    ------------------  //

const display = document.querySelector('.display'); // display reference

const numButton = document.querySelectorAll('.num'); // num-button reference
numButton.forEach(element => {
    element.addEventListener("click", ()=>{
        //console.log("Clicked");
        let numDisplay = element.textContent; //Selected number for the display

        
        updateCurrentNumber(numDisplay);
        updateDisplay(currentNumber);
        console.log(currentNumber);
        console.log(currentSelectionOfNums);
        console.log(`Current Operator: ${currentOperator}`);    })
});



const clearButton = document.querySelector('#clear'); // clear-button reference
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


const evaluate = document.querySelector('#equal'); // equal-button reference
evaluate.addEventListener("click", evaluateExpression);



//       ----------------       Operation Events    ------------------  //


const addButton = document.querySelector('#addition');
addButton.addEventListener("click", ()=>{

    // First number plus *second number 
    if(currentSelectionOfNums.length == 1 && currentNumber.length > 0){
        // Update the selection of numbers with the two being used
        console.log("Unique path")
        //updateSelectionOfNumbers(currentNumber);
        evaluateExpression();
        
    }   
    // First number plus
    else if(currentSelectionOfNums.length == 0 && currentNumber.length > 0 && currentOperator != "+"){
        currentOperator = "+";
        updateSelectionOfNumbers(currentNumber);
        currentNumber = "";
        updateDisplay("0");
    }     

});


const subButton = document.querySelector('#sub');
subButton.addEventListener("click", ()=>{

    // First number plus *second number 
    if(currentSelectionOfNums.length == 1 && currentNumber.length > 0){
        // Update the selection of numbers with the two being used
        console.log("Unique path")
        //updateSelectionOfNumbers(currentNumber);
        evaluateExpression();
        
    }   
    // First number plus
    else if(currentSelectionOfNums.length == 0 && currentNumber.length > 0 && currentOperator != "-"){
        currentOperator = "-";
        updateSelectionOfNumbers(currentNumber);
        currentNumber = "";
        updateDisplay("0");
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


// Method to evaluate expressions based on
function evaluateExpression(){
    if(currentSelectionOfNums.length == 1){
        console.log(`Before performing operation: ${currentSelectionOfNums} | CurrentNumber: ${currentNumber}`);
        updateSelectionOfNumbers(currentNumber); // Add second operand to the array of numbers
        console.log(`After Updating selection numbers: ${currentSelectionOfNums} | NextCurrentNumber: ${currentNumber}`);
        if(currentOperator == "+"){
            let sum = add(currentSelectionOfNums);

            // Update the values
            currentNumber = "" + sum;
            updateDisplay(currentNumber);
            currentSelectionOfNums.length = 0;
            updateSelectionOfNumbers(currentNumber);
            currentNumber = "";
            currentOperator = "-";
            console.log(`Final selection of numbers: ${currentSelectionOfNums} | FinalCurrentNumber: ${currentNumber}`);
            console.log(`Current Operator: ${currentOperator}`);
        }
        else if(currentOperator == "-"){
            let difference = subtract(currentSelectionOfNums);

            // Update the values
            currentNumber = "" + difference;
            updateDisplay(currentNumber);
            currentSelectionOfNums.length = 0;
            updateSelectionOfNumbers(currentNumber);
            currentNumber = "";
            currentOperator = "";
            console.log(`Final selection of numbers: ${currentSelectionOfNums}`);
        }
    }
}