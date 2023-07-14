
const clockContainer = document.querySelector('js-clock');
const clockTitle = clockContainer.querySelector('h1');

function    getTime(){
    let data =  new Data();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSecond();
    clockTitle.innerHTML = '${hours}:${minutes}:${seconds}';
}

let a = (5>3) ? "true": "false";
getTime();
setInterval(getTime,1000)
