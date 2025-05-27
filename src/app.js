import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



let who = ['The poodle', 'My Ex', 'The chupacabra', 'My chinchilla', 'My suegra', 'The loan shark', 'The officer'];
let action = ['ate', 'peed', 'crushed', 'broke', 'pawned'];
let what = ['my toys', 'my heart', 'my Twingo', 'my crib'];
let when = ['before class', 'while I was sleeping', 'while I was exercising', 'during lunch', 'while I was praying', 'In front of me'];

function getRandomNumber (min,max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandom(anyArray){
  let max = anyArray.length -1;
  let min = 0;
  let random =getRandomNumber(min,max);
  return anyArray[random];

}



window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector('#excuse').innerHTML = getRandom (who) + " " + getRandom (action) + " " + getRandom (what) + " " + getRandom (when)
};
