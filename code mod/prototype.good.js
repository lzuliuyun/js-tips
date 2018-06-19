function Person() {  }

Person.prototype = {
  constructor: Person,
  name: 'aaa',
  getName: function() {
    console.log(this.getName)
  }
}

console.log(new Person())