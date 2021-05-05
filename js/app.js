const displayCurrentTime = () => {
    let currentDate = new Date();
    // currentTime = `${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`;
    let currentTime = currentDate.toLocaleTimeString();

    document.getElementById('current-time').innerText = currentTime;
    // return currentTime;
}

const newDateObject = () => {
    let currentDate = new Date();
    document.getElementById('to-date').innerText = currentDate;
    // return currentTime;
}

const dateNow = () => {
    let milliseconds = Date.now();
    document.getElementById('date-now').innerText = `Gives back milliseconds: ${milliseconds}`;
    // return currentTime;
}

//Invocations 

setInterval(() => {
    displayCurrentTime();
}, 1000);

newDateObject();

dateNow();




