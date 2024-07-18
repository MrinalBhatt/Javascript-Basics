class Fruits{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    getFruits(){
        console.log("This is " + this.name + " " + this.color);
    }
}
var f = new Fruits("banana" , "yellow");
f.getFruits()
