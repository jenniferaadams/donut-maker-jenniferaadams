import DonutMaker from "./DonutMaker.js";
const donutMaker = new DonutMaker();

// let donutCount = donutMaker.donutCount;
// donutMaker.addToDonutCount()
setInterval(function(){
  donutMaker.activateAutoClickers();

},1000);

setInterval(function(){
  donutMaker.disableAutoClicker();
  donutMaker.disableDonutMult();
  totalDisplay.innerText = "Vegetable Count: " + Math.round(donutMaker.donutCount);
  multDisplay.innerText = "Multiplier Count: " + donutMaker.donutMultiplier;
  autoDisplay.innerText = "Auto Clicker Count: " + donutMaker.autoClicker;
  valueOfMult.innerText = "Vegetables Earned Per Click: " + Math.pow(1.2, donutMaker.donutMultiplier).toFixed(2);
  autoClickCostDisplay.innerText = "Auto Clicker Cost: " + Math.round(donutMaker.autoClickerCost);
  donMultCostDisplay.innerText = "Vegetable Multiplier Cost: " + Math.round(donutMaker.donutMultCost);
  restartGameBtn.innerText = "Start Over";
},500);

const addDonutBtn = document.querySelector(".donutButton");
const totalDisplay = document.querySelector(".totalDonutCount")
const addAutoClickBtn = document.querySelector(".autoClicker");
const autoDisplay = document.querySelector(".totalAutoClickerCount");
const addDonutMultBtn = document.querySelector(".donutMultiplier");
const multDisplay = document.querySelector(".totalDonutMultiplierCount");
const valueOfMult = document.querySelector(".earnedPerClick");
const autoClickCostDisplay = document.querySelector(".autoClickerCostDisplay");
const donMultCostDisplay = document.querySelector(".multCostDisplay");
const restartGameBtn = document.querySelector(".restartGameBtn");


addDonutBtn.addEventListener("click", () => {
  donutMaker.addToDonutCount();
  totalDisplay.innerText = "Vegetable Count: " + Math.round(donutMaker.donutCount);

})

addAutoClickBtn.addEventListener("click", () =>{
  donutMaker.addToAutoClickerCount();
  autoDisplay.innerText = "Auto Clicker Count: " + donutMaker.autoClicker;
  totalDisplay.innerText = "Vegetable Count: " + Math.round(donutMaker.donutCount);
})

addDonutMultBtn.addEventListener("click", () => {
  donutMaker.addToDonutMultCount();
  multDisplay.innerText = "Multiplier Count: " + donutMaker.donutMultiplier;
  totalDisplay.innerText = "Vegetable Count: " + Math.round(donutMaker.donutCount);
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
})

const devModal = document.querySelector(".developerModal");
const devButton = document.querySelector(".developerInfoBtn");
const devClose = document.querySelector(".devClose");
devModal.style.display = "none";

devButton.addEventListener("click", () =>{
  devModal.style.display = "block";
})
devClose.addEventListener("click", () => {
  devModal.style.display = "none";
})

restartGameBtn.addEventListener("click", () => {
  window.location.reload();
})




