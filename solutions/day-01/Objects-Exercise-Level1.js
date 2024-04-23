/*
1. Create an empty object called dog
2. Print the the dog object on the console
3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return _woof woof_
4. Get name, legs, color, age and bark value from the dog object
5. Set new properties the dog object: breed, getDogInfo=
*/

let dog = {};
console.log(dog);
dog.name = "King";
dog.legs = 4;
dog.age = 8;
dog.color = 'orange';
dog.bark = () => "_woof woof_";


console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

dog.breed = 'Aspin';

dog.getDogInfo = function() { 
    return console.log(`My dog's name is ${this.name} and he is ${dog.age} years old`);
};

dog.getDogInfo();
