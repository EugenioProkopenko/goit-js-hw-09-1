// localStorage.setItem("name", "Galyna");
// const key = "Arrey of names";
// const names = ["Galyna", "Ievgen", "Oleg"];

// localStorage.setItem(key, JSON.stringify(names));
// const arr = localStorage.getItem(key);
// console.log(JSON.parse(arr));
// localStorage.removeItem(key)
// localStorage.removeItem("name");
////////////////////////////////////////////////////////////////////////////////////////
// const STORAGE_KEY = "msg";

// const form = document.querySelector(".feedback-form");
// const textArea = form.querySelector("textarea");

// form.addEventListener("submit", handleForm);
// textArea.addEventListener("input", handleInput);

// populateTextarea();


// function handleInput(event) {
//     const message = event.target.value;
//     localStorage.setItem(STORAGE_KEY, message);

// };

// function handleForm(event) {
//     event.preventDefault()
//     event.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
// }



// function populateTextarea() {
//     const readMessage = localStorage.getItem(STORAGE_KEY);
//     if(readMessage) {
//         textArea.value = readMessage;

//     }

// };
////////////////////////////////////////////////////////////////

const formData = { email: '', message: '', }
const form = document.querySelector('.feedback-form'); 
const emailForm = form.querySelector('input'); 
const messageForm = form.querySelector('textarea');


const loadData = localStorage.getItem("key");
if(loadData) {
    const parseData = JSON.parse(loadData);
    formData.email = parseData.email;
    formData.message = parseData.message;
   emailForm.value = formData.email;
   messageForm.value = formData.message;


}




form.addEventListener("input", handleInput);
function handleInput(event) {
const { name, value } = event.target;
formData[name] = value.trim();
localStorage.setItem("key", JSON.stringify(formData));
formData = loadData;


}

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    localStorage.removeItem("key");
    formData.email = '';
  formData.message = '';
  emailForm.value = '';
  messageForm.value = '';

}








//console.log(formData);