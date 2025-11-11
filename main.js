
const inputDisplay = document.getElementById('input');
const resultDisplay = document.getElementById("result")
const buttons = document.querySelectorAll('.btn')

let input = "";


buttons.forEach(function (button){
    button.addEventListener('click', () =>{
       let value = button.textContent.trim()
       if (button.classList.contains('clear')){
        input = "";
        inputDisplay.textContent = "";
        resultDisplay.textContent = "";
       }

       else if(button.classList.contains('delete')){
        input = input.slice(0, -1)
        inputDisplay.textContent = input;
       } 

       else if(button.classList.contains("equal")){
        let inputExpression = input.replace(/X/g, '*').replace(/÷/g, '/');

        if (
                /[+\-*/]{2,}/.test(inputExpression) ||   // two operators in a row
                /^[*/+]/.test(inputExpression) ||        // starts with invalid operator
                /[+\-*/]$/.test(inputExpression)         // ends with an operator
            ) {
                resultDisplay.textContent = "SYNTAX ERROR";
                return;
            }

            let operators = inputExpression.match(/[\+\-\*\/]/);
            let numbers = inputExpression.split(/[\+\-\*\/]/).map(Number);
            

        if (!operators){
            // console.log("Result:", numbers[0]);
            resultDisplay.textContent = numbers[0];
        }else{
           let result = numbers[0];
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === '+') result += numbers[i + 1];
            else if (operators[i] === '-') result -= numbers[i + 1];
            else if (operators[i] === '*') result *= numbers[i + 1];
            else if (operators[i] === '/') result /= numbers[i + 1]; 
        }
        resultDisplay.textContent = result;
         input = result.toString(); 
        inputDisplay.textContent = input;
        } 
         
    } 
    
        else if (value === '+/-'){
            if (input !== ""){
                if (input.startsWith('-')){
                    input = input.slice(1)
                }else {
                    input = '-' + input;
                }
            } inputDisplay.textContent = input;
        }

        else if (button.classList.contains('percent')){
            if (input !== ""){
                let percentValue = Number(input)/100
                resultDisplay.textContent = percentValue;
            }
        }
       
    
    else {
        input += value;
        inputDisplay.textContent = input;
       }
    })
})


const dropdownBtn = document.getElementById('dropdownBtn');
const dropdown = document.getElementById('dropdown');

dropdownBtn.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});
