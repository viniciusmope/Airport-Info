const displayTime = () => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  hours = doubleDigitNumber(hours);
  minutes = doubleDigitNumber(minutes);
  seconds = doubleDigitNumber(seconds);

  document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
}

const doubleDigitNumber = number => number < 10 ? '0' + number : number;

displayTime();

setInterval(displayTime, 1000);
