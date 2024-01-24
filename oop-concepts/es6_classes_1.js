class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

let john = new Person("John Doe");

let name = john.getName();
console.log(name); // "John Doe"

console.log(typeof Person); // function