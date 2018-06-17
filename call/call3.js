Function.prototype.call2 = function(context) {
  var result,
      args = [];

  context = context || window;
  context.__fn__ = this;

  //从1开始，第一个参数是绑定的对象
  for(var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }

  result = eval('context.__fn__(' + args.join() + ')');
  delete context.__fn__;
  return result;
}

// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call2(null); // 2

console.log(bar.call2(obj, 'kevin', 18));