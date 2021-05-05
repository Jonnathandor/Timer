
const displayCurrentTime = () => {
    let currentDate = new Date();
    currentTime = `${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`;

    document.getElementById('current-time').innerText = currentTime;
    // return currentTime;
}

setInterval(() => {
    displayCurrentTime();
}, 1000);


