

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
function evaluateExpression(number1, operation, number2){


}