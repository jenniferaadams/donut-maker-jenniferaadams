import DonutMaker from "./DonutMaker.js";
const donutMaker = new DonutMaker();

// let donutCount = donutMaker.donutCount;
// donutMaker.addToDonutCount()
setInterval(function(){
  donutMaker.activateAutoClickers();
  totalDisplay.innerText = "Donut Count: " + Math.round(donutMaker.donutCount);
},1000);

const addDonutBtn = document.querySelector(".donutButton");
const totalDisplay = document.querySelector(".totalDonutCount")
const addAutoClickBtn = document.querySelector(".autoClicker");
const autoDisplay = document.querySelector(".totalAutoClickerCount");
const addDonutMultBtn = document.querySelector(".donutMultiplier");
const multDisplay = document.querySelector(".totalDonutMultiplierCount");


addDonutBtn.addEventListener("click", () => {
  donutMaker.addToDonutCount();
  totalDisplay.innerText = "Donut Count: " + Math.round(donutMaker.donutCount);

})

addAutoClickBtn.addEventListener("click", () =>{
  donutMaker.addToAutoClickerCount();
  autoDisplay.innerText = "Auto Clicker Count: " + donutMaker.autoClicker;
  totalDisplay.innerText = "Donut Count: " + Math.round(donutMaker.donutCount);
})

addDonutMultBtn.addEventListener("click", () => {
  donutMaker.addToDonutMultCount();
  multDisplay.innerText = "Multiplier Count: " + donutMaker.donutMultiplier;
  totalDisplay.innerText = "Donut Count: " + Math.round(donutMaker.donutCount);
})

const companyModal = document.querySelector(".companyModal");
const companyBtn = document.querySelector(".companyButton");
const companyClose = document.querySelector(".companyClose");
companyModal.style.display = "none";

companyBtn.addEventListener("click", () =>{
  companyModal.style.display = "block";
})

companyClose.addEventListener("click", () =>{
  companyModal.style.display = "none";
  console.log(modal);
})




