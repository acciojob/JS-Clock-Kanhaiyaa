//your code here

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function rotateClockHands(){
    const now = new Date();
    const hour =now.getHours();
    const minute = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegree = ((hour %12) +minute/60)*30;
    const minuteDegree = ((minute + seconds)/60)*6;
    const secondDegree = seconds*6;

    hourHand.style.transform ='rotate(${hourDegree}deg)';
    minuteHand.style.transform = 'rotate(${minuteDegree}deg)';
    secondHand.style.transform = 'rotate(${secondDegree}deg)';
}

setInterval(rotateClockHands,1000)

rotateClockHands()