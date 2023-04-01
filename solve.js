console.log('hello');
console.log('working');

let firstname = document.querySelector('#firstname');
let lastname = document.querySelector('#lastname');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirm_password = document.querySelector('#confirm_password');
let button = document.querySelector('button');
console.log('firstname');
console.log('lastname');

button.addEventListener('click', handleclick);

function handleclick(e) {
  e.preventDefault();
  let firstname = document.querySelector('#firstname');
  let lastname = document.querySelector('#lastname');
  let email = document.querySelector('#email');
  let password = document.querySelector('#password');
  let confirm_password = document.querySelector('#confirm_password');
  console.log(firstname.value);
  console.log(lastname.value);
  console.log(email.value);
  console.log(password.value);
  console.log(confirm_password.value);
}
