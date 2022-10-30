
import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
const savedForm = localStorage.getItem(LOCALSTORAGE_KEY);
const formData = savedForm
  ? JSON.parse(savedForm)
  : {};

updateForm();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput({ target }) {
    formData[target.name] = target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
}

function updateForm() {
    if (savedForm) {
        const keyOfForm = JSON.parse(savedForm)

        if (keyOfForm.email) {
            form.elements.email.value = keyOfForm.email;
        }

        if (keyOfForm.message) {
            form.elements.message.value = keyOfForm.message;
        }
    }
}
  
function onFormSubmit(event) {
  event.preventDefault();
    console.log('keyOfForm', JSON.parse(savedForm));
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}



