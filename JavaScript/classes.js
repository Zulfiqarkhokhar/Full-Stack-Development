class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi() { // this method is kept in Person Prototype not in each object
        console.log(`Hello ${this.name}`);
    }
}

const p1 = new Person("Zulfiqar",28);
console.log(p1.name);
console.log(p1.age);
p1.sayHi();
console.log(p1);