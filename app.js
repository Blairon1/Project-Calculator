let currentSelectionOfNums = [];

//DOM manipulation 
const display = document.querySelector('.display');

const numButton = document.querySelectorAll('.num');
numButton.forEach(element => {
    element.addEventListener("click", ()=>{
        //console.log("Clicked");
        let numDisplay = element.textContent; //Selected number for the display

        updateDisplay(numDisplay);
        updateSelectionOfNumbers(numDisplay);
    })
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", ()=>{
    if(currentSelectionOfNums.length == 0){
    }else{
        currentSelectionOfNums.length = 0;
        updateDisplay("0");
        console.log(`Current selection of elements: ${currentSelectionOfNums}`);
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