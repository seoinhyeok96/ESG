const form  = document.querySelector('js-form');
const input = document.querySelector('input');
const greeting = document.querySelector('js-greeting');



function askForName(){
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event){
    event.preventDefault();
    const value = input.value;
    console.log(value);
    

function loadName() {
    const currentUser = localStorage.getItem('currentUser');
    if(currentUser===null) {

    } else {

    }
}

function init() {
    loadName();
}
    
init();