let currentDate = document.querySelector("#current-time");
let currentTime = new Date();
let minutes = currentTime.getMinutes();
let hours = currentTime.getHours();
let day = currentTime.getDay();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let formattedDay = days[day];

currentDate.innerHTML = `${formattedDay}, ${hours}:${minutes}`;

document.getElementById("button-one").onclick = function () {
  document.getElementById("main-text").style.color = "red";
};

document.getElementById("button-two").onclick = function () {
  document.getElementById("main-text").style.color = "blue";
};