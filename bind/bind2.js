var foo = {
  value: 1
}

function bar(name, age) {
  console.log(this.value)
  console.log(name)
  console.log(age)
}

var bindFoo = bar.bind(foo, 'aa')
bindFoo(18)

Function.prototype.bind2 = function(contex) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1)

  return function() {
    var bindArgs = Array.prototype.slice.call(arguments)

    return self.apply(contex, args.concat(bindArgs))
  }
}

var bindFoo2 = bar.bind2(foo, 'aa')
bindFoo2(18)