function Person(name) { 
  this.name = name;
}

Person.prototype = {
  constructor: Person,
  getName: function () {  
    console.log(this.name)  
  }
}

console.log(new Person('hhh'))