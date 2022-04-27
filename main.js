// Output result
let result = document.getElementById('result');

// Buttons
let buttons = Array.from(document.getElementsByClassName('btn'));

// Operators
let operators = ['+', '-', '*', '/', '.'];

function isOperator(val) {
  return (operators.includes(val)) ? true : false;
}

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    currentValue = e.target.value;

    switch (currentValue) {
      case 'clear':
        result.value = '';
        break;

      case 'delete':
        result.value = result.value.slice(0, -1);
        break;

      case '+':
      case '-':
      case '*':
      case '/':
        if(!isOperator(result.value.slice(-1))) {
          result.value += currentValue;
          break;
        }
        break;

      case '.':
        if(!result.value.includes('.')) {
          result.value += currentValue;
          break;
        }
        break;
      
      case 'root':
        if(!isOperator(result.value.slice(-1))) {
          result.value = Math.sqrt(result.value);
          break;
        }
        break;
        

      case '=':
        if(!isOperator(result.value.slice(-1))) {
          result.value = eval(result.value);
          break;
        }
        break;
    
      default:
        result.value += currentValue;
        break;
    }
  });
});