function Person(name) {
  this.name = name;
  this.getName = function() {
    console.log(this.name);
  };
}

console.log(new Person('hello'))


function Person2() {

}

Person2.prototype.name = 'hello';
Person2.prototype.getName = function() {
  console.log(this.name);
}

console.log(new Person2())