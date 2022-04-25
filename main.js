// Output result
let result = document.getElementById('result');

// Buttons
let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    currentChar = e.target.value;

    switch (currentChar) {
      case 'C':
        result.value = '';
        break;

      // case 'C':
      //   result.value = ;
      //   break;
    
      default:
        result.value += currentChar;
        break;
    }
  });
});