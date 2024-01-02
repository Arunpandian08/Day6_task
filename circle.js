class Circle{
    constructor(radius =1.0,color ="Red"){
        this._radius = radius;
        this._color = color;
    }
    get radius(){
        return this._radius
    }
    set radius(newRadius){
        if(newRadius>0){
            this._radius = newRadius;
        }
        else{
            console.log("radius value should be greaterthan zero")
        }
    }
    get color(){
        return this._color;
    }
    set color(newColor){
     this._color=newColor;
    }
    toString(){
        return `Circle[radius = ${this._radius},color =${this._color}]`
    }
    get area(){
        return Math.PI*(Math.pow(this._radius,2))
    }
    get circumference(){
        return 2 * Math.PI * this._radius
    }

}
const myCircle = new Circle()

console.log(myCircle.toString())

console.log(`area: ${parseInt(myCircle.area)}`)

console.log(`circumference: ${parseInt(myCircle.circumference)}`)

/* OUTPUT: 

Circle[radius = 1,color =Red]
Circle[radius = 1,color =Red]
area: 3
circumference: 6

 */