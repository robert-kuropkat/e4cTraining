/**
 * @file
 * 
 * All skill demonstrations removed from main.js t omake them easier to review
 * and remove.  main.js will be reserved for the DOM part of the tutorial.
 * @author Robert Kuropkat <robert.kuropkat@gmail.com>
 */
console.log("\nNow loading main.js...");

/**
 * @const {document.form}
 */
const myForm        = document.querySelector('#my-form');
/**
 * @const {document.form.text}
 */
const nameInput     = document.querySelector('#name');
/**
 * @const {document.form.text}
 */
const emailInput    = document.querySelector('#email');
/**
 * @const {document.text}
 */
const msg           = document.querySelector('.msg');
/**
 * @const {document.list}
 */
const userList      = document.querySelector('#users');

console.log(emailInput);

/**
 * @function
 * @description Add event listener for submit action on form
 */
myForm.addEventListener('submit', onSubmit);

/**
 * @function
 * @description Add name and email to user list below the Submit Button
 * @param {Event} e 
 */
function onSubmit(e) 
{
    e.preventDefault();

    if (  nameInput.value  === ''
       || emailInput.value === '' 
       )
    {
        console.log('Sending error message...');
        msg.classList.add('error');
        msg.innerHTML = "Please enter all fields.";
        setTimeout(() => msg.remove(), 3000);
    } else {
        console.log('Saving user information...');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        nameInput.value  = '';
        emailInput.value = '';
    }
}
