const throttle = require('lodash.throttle');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const feedbackFormState = JSON.parse(
  localStorage.getItem(LOCALSTORAGE_KEY)
) || { email: '', message: '' };

emailInput.value = feedbackFormState.email;
messageInput.value = feedbackFormState.message;

const onSave = ({ target: { name, value } }) => {
  feedbackFormState[name] = value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormState));
};

const onSubmit = event => {
  event.preventDefault();
  console.log(feedbackFormState);
  feedbackFormState.email = '';
  feedbackFormState.message = '';
  event.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
};

feedbackForm.addEventListener('input', throttle(onSave, 500));
feedbackForm.addEventListener('submit', onSubmit);
