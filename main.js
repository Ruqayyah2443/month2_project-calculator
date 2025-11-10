const inputDisplay = document.getElementById('input');
const resultDisplay = document.getElementById("result")
const buttons = document.querySelectorAll('.btn')

let input = "";
let lastResult = ""


buttons.forEach(function (button){
    button.addEventListener('click', () =>{
       let value = button.textContent.trim()
       if (button.classList.contains('clear')){
        input = "";
        lastResult = ""
        inputDisplay.textContent = "";
        resultDisplay.textContent = "";
       }
       else if(button.classList.contains('delete')){
        input = input.slice(0, -1)
        inputDisplay.textContent = input;
       } 
       else if(button.classList.contains("equal")){
        try{
            let inputExpression = input.replace(/x/g, '*').replace(/÷/g, '/');
            resultDisplay.textContent = eval(inputExpression);lastResult = resultDisplay.textContent;

        }catch(error){
            resultDisplay.textContent = "syntax Error"
        }
       } else {
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

// Close dropdown if clicked outside
window.addEventListener('click', function(e) {
    if (!dropdownBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});