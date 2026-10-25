const launchDate = new Date("January 10, 2032 00:00:00").getTime();

const countdown = document.getElementById("countdown");

if(countdown){

setInterval(() => {

const now = new Date().getTime();

const distance = launchDate - now;

const days =
Math.floor(distance / (1000 * 60 * 60 * 24));

const hours =
Math.floor(
(distance % (1000 * 60 * 60 * 24)) /
(1000 * 60 * 60)
);

const minutes =
Math.floor(
(distance % (1000 * 60 * 60)) /
(1000 * 60)
);

const seconds =
Math.floor(
(distance % (1000 * 60)) / 1000
);

countdown.innerHTML =
`Launch Countdown:
${days}d ${hours}h ${minutes}m ${seconds}s`;

},1000);

}