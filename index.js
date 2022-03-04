import DonutMaker from "./DonutMaker.js";
const donutMaker = new DonutMaker();

donutMaker.addToDonutCount()

let donutCount = donutMaker.donutCount;

const addDonutBtn = document.querySelector(".donutButton");
const totalDisplay = document.querySelector(".totalDonutCount")
addDonutBtn.addEventListener("click", () => {
  donutMaker.addToDonutCount();
  totalDisplay.innerText = "Donut Count: " + donutMaker.donutCount;
})

