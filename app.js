const timeLeft= document.getElementById('time-left');
 
const myCruise = new Date('2024-09-19T19:00:00');

const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24; // milliseconds in a day

function countdown () {  
    const today = new Date();
    const timeSpan = myCruise - today;   

     if (timeSpan <= -days) {
        timeLeft.innerHTML = "Hope you had a great time!";
    } else if (timeSpan <= 0) {
         timeLeft.innerHTML = "Bon Voyage!";
     } else {
       const daysLeft = Math.floor(timeSpan / days);
       const hoursLeft = Math.floor((timeSpan % days) / hours);
       const minutesLeft = Math.floor((timeSpan % hours) / minutes);
       const secondsLeft = Math.floor((timeSpan % minutes) / seconds);
       timeLeft.innerHTML = daysLeft + " days " + hoursLeft + " hours " + minutesLeft + " minutes " + secondsLeft + " seconds";
   }
 
}
   setInterval(countdown, seconds);
