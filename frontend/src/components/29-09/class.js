// function Person(name, age, number) {
//     console.log(name, age, number)
// }
class Person {
    constructor(name, age, place) {
        this.name = name;
        this.age = age;
        this.place=place;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    myAge() {
        console.log(`Hello my age is ${this.age}`)
    }
    myPlace() {
        console.log(`I live in ${this.place}`)
    }
}
const faez = new Person('faez', 21,"mumbai");
faez.sayHello(); // logs "Hello, my name is John and I am 30 years old."
faez.myAge();
faez.myPlace();