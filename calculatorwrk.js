const display=document.querySelector('.display'); //got input field
const buttons=document.querySelectorAll('button');
console.log(buttons,'this is button array')

let currentInput="";
let firstOperand=null;
let operator=null;
let secondOperand=null;
buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        const value=e.target.getAttribute('data-value');
        if(button.classList.contains('clear')){
            currentInput="";
            firstOperand=null;
            operator=null;
            display.value="";
        }
        else if(button.classList.contains('equals')){
            if(firstOperand!==null && currentInput!==""){
                const secondOperand=parseFloat(currentInput);
                let result;

                switch(operator){
                    case '+':
                        result=firstOperand+secondOperand;
                        break;
                    case '-':
                        result=firstOperand-secondOperand;
                        break;
                    case '*':
                        result=firstOperand*secondOperand;
                        break;
                    case '/':
                        result=firstOperand/secondOperand;
                        break;
                    }
                    display.value=result;
                    currentInput=result.toString();
                    firstOperand=null;
                    operator=null;
                }
            }
            else if(value==='+'||value==='-'||value==='*'||value==='/'){
                if(currentInput!==""){
                    firstOperand=parseFloat(currentInput);
                    operator=value;
                    currentInput="";
                }
            }
            else{
                currentInput+=value;
                display.value=currentInput;
                }
            });
        });
                
