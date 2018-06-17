Function.prototype.call2 = function(context) {
  context.__fn__ = this;

  var args = [];
  //从1开始，第一个参数是绑定的对象
  for(var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }

  eval('context.__fn__(' + args.join() + ')')
  delete context.__fn__;
}

// 测试一下
var foo = {
  value: 1
};

function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value);
}

bar.call2(foo, 'kevin', 18); 
// kevin
// 18
// 1