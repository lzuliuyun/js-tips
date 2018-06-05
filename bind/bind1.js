var foo = {
  value: 1
}

function bar() { 
  console.log(this.value)
}

var bindFoo = bar.bind(foo)

bindFoo()

//test1
Function.prototype.bind2 = function(contex) {
  var self = this;

  return function() {
    return self.apply(contex)
  }
}

var bindFoo2 = bar.bind2(foo)
bindFoo2()