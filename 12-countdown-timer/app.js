const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023,0,1,11,30,00);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const weekday = weekdays[futureDate.getDay()];
const timezone = futureDate.getTimezoneOffset();    

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}am (+5:45)`

// future date in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr

  // values in ms
  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMin = 1000 * 60;
  const oneSec = 1000;

  // calculate all values
  const days = Math.floor(t/oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const mins = Math.floor((t % oneHour) / oneMin);
  const secs = Math.floor((t % oneMin) / oneSec);

  // set values array
  const values = [days, hours, mins, secs];

  function format(value) {
    if(value < 10){
      return (value = `0${value}`);
    }
    return value;
  }

  items.forEach(function (item, index){
    item.innerHTML = format(values[index]);
  });

  if(t < 0){
    clearInterval = countdown;
    deadline.innerHTML = `<h4 class="expired">
    Sorry this giveaway has expired.<\h4> `
  }
}
// countdown 
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime()