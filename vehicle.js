class vehicle{
    constructor(name,maker,engine,color){
        this.name=name;
        this.maker=maker;
        this.engine=engine;
        this.color=color;

    }//end of the constructor
    getDetails(){
        return("the name of the vehicle is:"+this.name)
    }
}
let sedan=new vehicle('Atios','Toyota','1.4','blue')
console.log(sedan.name);
console.log(sedan.maker);
console.log(sedan.engine);
console.log(sedan.color);
console.log(sedan.getDetails());