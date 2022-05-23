import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";
const formRef = document.querySelector(".feedback-form");

formRef.addEventListener('input', throttle(handlFormInput, 500))
formRef.addEventListener('submit', handlFormSubmit)

initForm();

function handlFormInput(event) {
    let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
    persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {}
    persistedFilters[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(persistedFilters))
}
function initForm() {
    let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
    if (persistedFilters) {
        persistedFilters = JSON.parse(persistedFilters);
        Object.entries(persistedFilters).forEach(([name, value]) => {
            formRef.elements[name].value = value;
        })
    }
}
function handlFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, message }
    } = event.currentTarget;
    if (email.value === "" || message.value === "") {
        return alert ("!!!!!")
    }
    const formData = new FormData(formRef);
    formData.forEach((value, name) => console.log(value, name));
    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY)

    console.log({ email: email.value, message: message.value });
    event.currentTarget.reset()
}

