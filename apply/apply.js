Function.prototype.apply2 = function(context, params) {
  var result, newParams = [];

  context = context || window;
  context.__fn__ = this;

  if (!Array.isArray(params)) {
    result = context.fn();
  } else {
    for(var i = 0, len = params.length; i < len; i++) {
      newParams.push('params[' + i + ']')
    }
    result = eval('context.__fn__('+ newParams.join() +')');
  }
  
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

// bar.apply2(null); // 2

console.log(bar.apply2(obj, ['kevin', 18]));