let fans = document.querySelector(".fans");
let fish = document.querySelector(".fish");
let pets = document.querySelector(".pets");
let themeSelector = document.querySelector("#toggle");
let button = document.querySelector(".ball");
let h1 = document.querySelector("h1");
let body = document.querySelector("body");

//mouseover events
fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});

pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});

//light and dark toggle
themeSelector.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    button.classList.remove("move-right");
  } else {
    body.classList.add("light");
    button.classList.add("move-right");
    h1.innerText = "Party Quincy";
  }
});
