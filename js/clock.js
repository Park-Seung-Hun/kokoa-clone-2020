const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("span");

function getTime(){
    const date=new Date(),
        minutes = date.getMinutes(),
        hours = date.getHours();

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}
init();