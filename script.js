const clock = document.getElementById("clock");
const alarmSound = document.getElementById("alarmSound");
const volumeControl = document.getElementById("volumeControl");

let alarmTime = null;
let alarmSet = false;


volumeControl.addEventListener("input", () => {
    alarmSound.volume = volumeControl.value;
});


setInterval(() => {
    const now = new Date();

    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    let currentTime = `${hours}:${minutes}:${seconds}`;
    clock.textContent = currentTime;

    
    if (alarmSet && currentTime === alarmTime) {
        alarmSound.play();
        alert("⏰ Alarm Ringing!");
        alarmSet = false;
    }

}, 1000);

function setAlarm() {
    const input = document.getElementById("alarmTime").value;

    if (!input) {
        alert("Please select a time");
        return;
    }

    alarmTime = input + ":00";
    alarmSet = true;

    alert("Alarm set for " + alarmTime);
}


function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmSet = false;
}