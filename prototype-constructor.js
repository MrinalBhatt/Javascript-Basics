// function Animal(name){
//     this.name = name
// }
// Animal.prototype.speak  = function(){
//     console.log(`${this.name} make noise!`);
// }
// function Dog(name){
//     Animal.call(this,name);
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.speak = function(){
//     console.log(`${this.name} barks!`);
// } 

// const dog = new Dog('dreak');
// dog.speak()

function shape(color){
    this.color = color;
}

shape.prototype.describe = function(){
    console.log(`${this.color} is the color`);
}

function Rectangle(color,height,width){
    // console.log(`${this}`)
    shape.call(this,color)
    this.height = height;
    this.width = width;

}

Rectangle.prototype = Object.create(shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function(){
    return this.height * this.width;
}

let r1 = new Rectangle('red', 10 ,2);
r1.describe();
console.log(r1.area())

let r2 = new Rectangle('blue', 20 ,2);
r2.describe();
console.log(r2.area())