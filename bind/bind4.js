var value = 2;

var foo = {
  value: 1
}

function bar(name, age) {
  this.habit = 'shopping'
  console.log(this.value)
  console.log(name)
  console.log(age)
}

bar.prototype.friend = 'helloworld'

var bindFoo = bar.bind(foo, 'hello')
console.log('---------1----------')
bindFoo(18)
var obj = new bindFoo(18)
console.log(obj.habit)
console.log(obj.friend)

Function.prototype.bind2 = function (contex) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind2 - what is trying to be bound is not callable");
  }

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function() {}

  var fBound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);

    return self.apply(this instanceof fNOP ? this : contex, args.concat(bindArgs))
  }

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound
}

console.log('---------2----------')
var bindFoo2 = bar.bind2(foo, 'hello')
bindFoo2(18)
var obj2 = new bindFoo2(18)
console.log(obj2.habit)
console.log(obj2.friend)