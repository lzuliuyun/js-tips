function Parent() {
  this.name = 'hhh';
}

Parent.prototype.getName = function() {
  console.log(this.name);
}

function Child() {  }
Child.prototype = new Parent();

var child1 = new Child();
console.log(child1.getName())