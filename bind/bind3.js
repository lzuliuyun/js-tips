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
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fBound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);

    return self.apply(this instanceof fBound ? this : contex, args.concat(bindArgs))
  }

  fBound.prototype = this.prototype;
  return fBound
}

console.log('---------2----------')
var bindFoo2 = bar.bind2(foo, 'hello')
bindFoo2(18)
var obj2 = new bindFoo2(18)
console.log(obj2.habit)
console.log(obj2.friend)