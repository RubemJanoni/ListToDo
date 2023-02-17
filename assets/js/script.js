//Elements
const input = document.querySelector('input'); //Captures the input element.
const list = document.querySelector('ul'); //Captures the list element.
const btn1 = document.querySelector('.btn1'); //Captures the btn element.

//Events
input.addEventListener('keyup', handleKeyUp); // Add a keyboard event 'keyup' and call the function 'handleKeyUp'
btn1.addEventListener('click', reset); // Add a click event 'click' and call the function 'reset'