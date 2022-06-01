const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = document.querySelector('[name = "email"]');
const textarea = document.querySelector('[name="message"]');

const KEY = 'feedback-form-state';

firstPageLoading();

form.addEventListener('input', throttle(inputHandler, 500));
form.addEventListener('submit', submitHandler);

function inputHandler() {
  const valueObj = {
    email: input.value,
    message: textarea.value,
  };

  //   console.log(`email: ${valueObj.email}`);
  //   console.log(`message: ${valueObj.message}`);
  localStorage.setItem(KEY, JSON.stringify(valueObj));
}

function firstPageLoading() {
  const parseValue = JSON.parse(localStorage.getItem(KEY));
  if (parseValue) {
    input.value = parseValue.email;
    textarea.value = parseValue.message;
  }
}

function submitHandler(e) {
  e.preventDefault();
  form.reset();
  console.log(localStorage.getItem(KEY));
  localStorage.removeItem(KEY);
}
