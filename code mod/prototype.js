function Person() {

}

Person.prototype = {
  name: 'aaa',
  getName: function() {
    console.log(this.name)
  }
}

console.log(new Person())