// DOM = Document Object Model

// console.log(window); // parent Object of browser



// Single element 
// console.log(document.getElementById('my-form'));
// const form = document.getElementById('my-form'); // can only use id only
// console.log(form);

// console.log(document.querySelector('.container')); // can use any one to select




// // Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// End of Basic DOM

// Changing DOM

// const ul = document.querySelector('.items');

// // ul.remove(); // ul remove from the html display
// // ul.lastElementChild.remove(); // ul last element remove from the html display
// ul.firstElementChild.textContent = 'Hello'; // add text
// ul.children[1].textContent = 'Tharindu'; // add text
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>' // Add html

// const btn = document.querySelector('.btn');
// btn.style.background = 'red'; // add css style

// End of basic Changing DOM

// Event Listner

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('click');
//     console.log(e);
//     console.log(e.target.className);
//     console.log(e.target.id);
// });

// change the background color using event listner

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     // document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// End of Event Listner

// Form action

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput);
    // console.log(nameInput.value);
    if(nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all Fields';

        // disappear after some amount time
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        // console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}






