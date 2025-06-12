let clockElement = document.querySelector("#clock"); 
let ampmElement = document.querySelector("#ampm"); 
let formatButton = document.querySelector(".buttons button:first-child");
let themeButton = document.querySelector(".buttons button:last-child");

let is24HourFormat = false; 
let isDarkMode = false; 


function updateClock() {
    let currentTime = new Date();
    console.log(currentTime) 
    let hours = currentTime.getHours(); 
    let minutes = currentTime.getMinutes(); 
    let seconds = currentTime.getSeconds(); 

    let ampm = "AM"; 

    
    if (is24HourFormat === false) {
        if (hours >= 12) {
            ampm = "PM"; 
        }
        hours = hours % 12; 
        if (hours === 0) {
            hours = 12; 
        }
    }
    if (hours < 10) {
        hours = "0" + hours; 
    }
    if (minutes < 10) {
        minutes = "0" + minutes; 
    }
    if (seconds < 10) {
        seconds = "0" + seconds; 
    }
    let timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;
    if (is24HourFormat) {
        ampmElement.textContent = "";
    } else {
        ampmElement.textContent = ampm;
    }
    if (isDarkMode) {
        ampmElement.style.color = "white"; 
    } else {
        ampmElement.style.color = "black"; 
    }
}
function toggleFormat() {

    if (is24HourFormat === false) {
        is24HourFormat = true; 
    } else {
        is24HourFormat = false; 
    }
    if (is24HourFormat) {
        formatButton.textContent = "Switch to 12-Hour Format"; 
    } else {
        formatButton.textContent = "Switch to 24-Hour Format"; 
    }
    updateClock();
}
function toggleTheme() {
    if (isDarkMode === false) {
        isDarkMode = true; 
    } else {
        isDarkMode = false;
    }
    document.body.classList.toggle("dark-mode");
    if (isDarkMode) {
        themeButton.textContent = "Switch to Light Mode"; 
    } else {
        themeButton.textContent = "Switch to Dark Mode"; 
    }
    updateClock();
}
setInterval(updateClock, 1000);
updateClock();