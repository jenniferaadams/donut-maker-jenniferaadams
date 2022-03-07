export default class DonutMaker {
    constructor(donutCount, donutMultiplier, autoClicker){
    this.donutCount = 0;
    this.donutMultiplier = 0;
    this.autoClicker = 0;
    this.autoClickerCost = 100;
    this.donutMultCost = 10;
    }

    addToDonutCount() {
        this.donutCount += Math.pow(1.2, this.donutMultiplier);
    }

    addToAutoClickerCount(){
        if (this.donutCount >= this.autoClickerCost){
        this.autoClicker ++;
        this.donutCount -= this.autoClickerCost;
        this.autoClickerCost = Math.round(this.autoClickerCost*1.1);
    }
    console.log("Not enough donuts");
}
    activateAutoClickers(){
        for(let i=0; i<this.autoClicker; i++){
            this.addToDonutCount();
        }
        console.log(this.autoClicker);
    }

    addToDonutMultCount() {
        if (this.donutCount >= this.donutMultCost){
        this.donutMultiplier ++;
        this.donutCount -= this.donutMultCost;
        this.donutMultCost = Math.round(this.donutMultCost*1.1);
    }
    else console.log("Not enough donuts to purchase a multiplier");
       
}

}
    