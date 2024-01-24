//you can can add addtional attrubute using the prototype keyword
function Person(name,age,city)
{
    this.name=name;
    this.age=age;
    this.city=city;
}

Person.prototype.nationality="Indian";
Person.prototype.country="India";

const obj = new Person("John",25,"Chennai");
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);
console.log(obj.country);
console.log(obj.nationality);
