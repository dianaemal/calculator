var number1 = "";
var number2 = "";
var operator = "";
var gotResult = false;
var operatorClick = false;
var operand = document.querySelectorAll('.operand');
var Display = document.getElementById("result");
var operators = document.querySelectorAll(".operator");

function operate(op)
{
    switch (op) {
        case "+":
            var result = Number(number1) + Number(number2);
            break;
        case "-":
            var result = Number(number1) - Number(number2);
            break;
        case "*":
            var result = Number(number1) * Number(number2);
            break;
        case "/":
            if (number2 !== 0) {
                var result = Number(number1) / Number(number2);
            } else {
                alert("Can't divide by zero!");
            }
            break;
        default:
    
            break;
    }
    
    //because we are dealing with strings and later converting number1 and 2 into numbers: 
    number1 = String(result);
    gotResult = true;
    number2 = ""; 
    Display.textContent = result;
}
function input()
{
    //If the operator is not clicked then the first input is the first number.
    if (!operatorClick) {
    
        number1 =  Display.textContent;
    } else {
   
        number2 =  Display.textContent;
    }
}

function operatorInput(event)
{ 
    Display.textContent = ""; 
    if (number1 !="" && number2 != "" && operator !="" )
    {
        operate(operator)
       
    }
    operator = event.target.textContent;
    operatorClick = true; 
    //When both operands are empty:
    if (number1 === "" && number2 === "")
    {
        operator = "";
        operatorClick = false;
    }   
}

//When clicking the number buttons:
operand.forEach(button => {
    button.addEventListener('click', function (event)
    {
        if ( gotResult || Display.textContent === "0") {
            
            Display.textContent = "";    
        }
        Display.textContent += event.target.textContent;    
        input();
        gotResult = false;        
    });
});
//When clicking operator buttons:
operators.forEach(button => {
    button.addEventListener('click', operatorInput);
});

//When clicking equal button:
document.getElementById("equal").addEventListener("click", ()=>{
   
    if (number1 !="" && number2 != "" && operator !="")
    { 
        operate(operator);
        operatorClick = false;
    }
})
//When clicking clear button:
document.getElementById("clear").addEventListener("click", ()=>{
    operator = "";
    number1 = "";
    number2 = "";
    gotResult = false;
    operatorClick = false;
    Display.textContent = "0";
});

//When clicking back button:
document.getElementById("back").addEventListener("click", ()=>{
    Display.textContent = Display.textContent.slice(0, -1);
    input()  
})
//When clicking sign button:
document.getElementById("sign").addEventListener("click", ()=>{
    if ( Display.textContent !== "" && Display.textContent !== "0")
    {
        Display.textContent = "-"+Display.textContent;
        input();
    } 
})