const displayTime = document.getElementById('time');

function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    displayTime.innerText = `${hour} : ${minutes} : ${seconds}`;
}

function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

setInterval(updateTime, 1000);