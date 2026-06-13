

//       ----------------       DOM manipulation    ------------------  //

const display = document.querySelector('.display'); // display reference

const numButton = document.querySelectorAll('.num'); // num-button reference
numButton.forEach(element => {
    element.addEventListener("click", ()=>{
        //console.log("Clicked");
        let numDisplay = element.textContent; //Selected number for the display
   })
});



const clearButton = document.querySelector('#clear'); // clear-button reference
clearButton.addEventListener("click", ()=>{
    
});


const evaluate = document.querySelector('#equal'); // equal-button reference
evaluate.addEventListener("click", evaluateExpression);



//       ----------------       Operation Events    ------------------  //


const addButton = document.querySelector('#addition');
addButton.addEventListener("click", ()=>{
   

});


const subButton = document.querySelector('#sub');
subButton.addEventListener("click", ()=>{
    

});




// Display Methods
function updateDisplay(newDisplay){
    display.textContent = newDisplay;
}


f

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


// Method to evaluate expressions based on
function evaluateExpression(number1, operation, number2){


}