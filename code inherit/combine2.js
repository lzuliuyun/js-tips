function Parent(name) {
  this.name = name;
  this.colors = ['1', '2'];
}

Parent.prototype.getName = function() {
  console.log(this.name);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

//方法1
function F() {};
F.prototype = Parent.prototype;

Child.prototype = {
  constructor: Child,
  prototype: new F() //或者 Object.create(Parent.prototype);
}

//方法2 做了封装
// function object(o) {
//   function F() {}
//   F.prototype = o;
//   return new F();
// }

// function prototype(child, parent) {
//   var prototype = object(parent.prototype);
//   prototype.constructor = child;
//   child.prototype = prototype;
// }

// prototype(child, parent);


var child1 = new Child('kevin', '18');
console.log(child1);