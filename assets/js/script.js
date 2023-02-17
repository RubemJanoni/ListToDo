//Elements
const input = document.querySelector('input'); //Captures the input element.
const list = document.querySelector('ul'); //Captures the list element.
const btn1 = document.querySelector('.btn1'); //Captures the btn element.

//Events
input.addEventListener('keyup', handleKeyUp); // Add a keyboard event 'keyup' and call the function 'handleKeyUp'
btn1.addEventListener('click', reset); // Add a click event 'click' and call the function 'reset'

//Functions

/**
 * Check if the enter key was typed, hiding the previously presented elements and showing the new elements filled in in the new list.
 * 
 */
function handleKeyUp(e)
{
    if(e.key === 'Enter')
    {
        const lis = document.querySelectorAll('.task');
        lis.forEach(item => {
            item.style.display = 'none';
        })
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        list.appendChild(newLi);

        input.value = '';
    }

}

/**
 * Reloads the page and clears the screen.
 */
function reset()
{
    window.location.reload();
}
