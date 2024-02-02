import './css/styles.css';
import { Galactic, yearsUntil } from './galactic.js';

function handleFormSubmission(galactic) {
  document.getElementById("convertedAges").removeAttribute("class");
  document.querySelector("#convertedAges > ul").innerHTML = '';
  if(document.querySelector("#curr > span")) {
    document.getElementById("curr").removeChild(document.querySelector("#curr > span"));
  }
  document.getElementById("until").removeEventListener("submit", handleSecondForm);
  document.getElementById("error2").setAttribute("class", "hidden");
  document.getElementById("convertedUntilOutput").setAttribute("class", "hidden");
  document.getElementById("untilAge").value = "";

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
  document.getElementById("error2").setAttribute("class", "hidden");
  document.getElementById("convertedUntilOutput").setAttribute("class", "hidden");
  document.querySelector("#convertedUntilOutput > ul").innerHTML = '';

  const age = parseFloat(document.querySelector("#curr > span").innerText);
  const untilAge = parseFloat(document.getElementById("untilAge").value);
  const untilConverted = yearsUntil(age,untilAge);

  if(!untilConverted || age <= 0 || untilAge <= 0 || !untilAge) {
    document.getElementById("error2").removeAttribute("class");
  } else {
    document.getElementById("convertedUntilOutput").removeAttribute("class");
    let keys = Object.keys(untilConverted);
    if(untilConverted.status === "future") {
      document.querySelector("#convertedUntilOutput > h3").innerText = "Years until age on different planets:";
      keys.forEach((key) => {
        if(key !== "status") { //x years have yet to pass on
          let li = document.createElement("li");
          li.innerText = untilConverted[key] + " years have yet to pass on ";
          let span = document.createElement("span");
          span.innerText = key;
          span.setAttribute("class","capitalize");
          li.appendChild(span);

          document.querySelector("#convertedUntilOutput > ul").append(li);
        }
      }) ;
    } else {
      document.querySelector("#convertedUntilOutput > h3").innerText = "Years that have passed since current age on different planets:";
      keys.forEach((key) => {
        if(key !== "status") { //x years have passed on 
          let li = document.createElement("li");
          li.innerText = untilConverted[key] + " years have passed on ";
          let span = document.createElement("span");
          span.innerText = key;
          span.setAttribute("class","capitalize");
          li.appendChild(span);

          document.querySelector("#convertedUntilOutput > ul").append(li);
        }
      });
    }
  }
}


document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const galactic = new Galactic(parseFloat(document.getElementById("age").value));
  if(!galactic.earth || galactic.earth <= 0) {
    document.getElementById("error").removeAttribute("class");
    document.getElementById("convertedAges").setAttribute("class", "hidden");
    document.getElementById("until").setAttribute("class", "hidden");
    document.getElementById("error2").setAttribute("class", "hidden");
    document.getElementById("convertedUntilOutput").setAttribute("class", "hidden");
  } else {
    document.getElementById("error").setAttribute("class", "hidden");
    handleFormSubmission(galactic);
  }
});