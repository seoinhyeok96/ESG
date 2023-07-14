
title = document.querySelector('#title');
const colors = ['red', 'green', 'yellow','pink'];

function generateRandomNumber(){
    return (Math.random() * colors.length);

}

function  changeColor() {
    let index = generateRandomNumber();
    title.style.color = colors[index]
}
title.addEventListener('click', changeColor);