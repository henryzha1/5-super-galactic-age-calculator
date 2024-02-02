import './css/styles.css';
import { Galactic, yearsUntil } from './galactic.js';

function handleFormSubmission(galactic) {
  document.getElementById("convertedAges").removeAttribute("class");
  document.querySelector("#convertedAges > ul").innerHTML = '';
  if(document.querySelector("#curr > span")) {
    document.getElementById("curr").removeChild(document.querySelector("#curr > span"));
  }
  document.getElementById("until").removeEventListener("submit", handleSecondForm);

  let curr = document.createElement("span");
  curr.innerText = galactic.earth;
  document.getElementById("curr").appendChild(curr);
  let keys = Object.keys(galactic);
  keys.forEach((key) => {
    let li = document.createElement("li");
    li.innerText = "Your age is " + galactic[key] + " on ";
    let span = document.createElement("span");
    span.innerText = key;
    span.setAttribute("class","capitalize");
    li.appendChild(span);

    document.querySelector("#convertedAges > ul").append(li);
  });

  document.getElementById("until").removeAttribute("class");
  document.getElementById("until").addEventListener("submit", handleSecondForm);
}

function handleSecondForm(e) {
  e.preventDefault();
  const age = parseFloat(document.querySelector("#curr > h3"));
  const pastAge = parseFloat(document.getElementById("past").value);
  const futureAge = parseFloat(document.getElementById("past").value);
}


document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const galactic = new Galactic(parseFloat(document.getElementById("age").value));
  if(!galactic.earth || galactic.earth <= 0) {
    document.getElementById("error").removeAttribute("class");
    document.getElementById("convertedAges").setAttribute("class", "hidden");
    document.getElementById("until").setAttribute("class", "hidden");
  } else {
    document.getElementById("error").setAttribute("class", "hidden");
    handleFormSubmission(galactic);
  }
});