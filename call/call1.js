var foo = {
  value: 1
};

function bar() {
  console.log(this.value)
}

bar.call(foo)


Function.prototype.call2 = function(context) {
  context.__fn__ = this;
  context.__fn__();
  delete context.__fn__;
}

bar.call2(foo)