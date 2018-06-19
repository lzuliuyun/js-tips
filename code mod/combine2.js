function Person(name) {
  this.name = name;

  if (typeof this.getName !== 'function') {
    Person.prototype.getName = function() {
      console.log(this.name);
    }
  }
}

console.log(new Person('aaa'))