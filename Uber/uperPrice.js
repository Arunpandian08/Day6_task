class UperPrice {
    constructor(typeOfcar,id,pickUp,drap,baseRate,ratePerKm,perMinRate){
        this.typeOfcar = typeOfcar,
        this.id = id;
        this.pickUp=pickUp;
        this.drap = drap;
        this.baseRate=baseRate
        this.ratePerKm=ratePerKm;
        this.perMinRate =perMinRate;
    }
    calculatePrice(distance,time){
        const costOfDistance = distance * this.ratePerKm;
        const costForTime = time * this.perMinRate;
        const totalAmount = this.baseRate + costOfDistance + costForTime;
        return totalAmount;

    }
}

//Example :
const uberAmount = new UperPrice("sedan",12456,"coimbatore","tirupur",500,15,8)

const distance = 80;
const time = 60;

const totalCost = uberAmount.calculatePrice(distance,time) 

console.log(uberAmount,`Total traveling cost is = Rs.${totalCost}`)

/*output :
UperPrice {
    typeOfcar: 'sedan',
    id: 12456,
    pickUp: 'coimbatore',
    drap: 'tirupur',
    baseRate: 500,
    ratePerKm: 15,
    perMinRate: 8
  } 
  Total traveling cost is = Rs.2180
  */