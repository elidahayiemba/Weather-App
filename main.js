let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
}
let today = new Date();
let day = today.getDay();
let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.querySelector(".day").innerHTML = dayList[day]
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
document.querySelector(".time").innerHTML = hour + ":" + minute + ":" + second;

let search = document.querySelector("button");
search.addEventListener("submit", updateName);

function updateName(event){
  let update = event.target.value
  let weatherData = weather[update.toLowerCase()];
  if(weatherData){
    let locationName = document.querySelector("h1");
    locationName.textContent = update.toUpperCase();
  }
}


