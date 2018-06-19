Function.prototype.bind2 = function(context) {
  if (typeof this !== 'function') {
      throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
  }

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fBound = function() {
      var bindArgs = Array.prototype.slice.call(arguments);
      if (this instanceof fBound) {
          var args2 = [];
          for(var i = 0, len = args.length; i < len; i++) {
              args2.push('args[' + i + ']');
          }
          for(var j = 0, len = bindArgs.length; j < len; j++) {
              args2.push('bindArgs[' + j + ']');
          }
          return eval('new self('+ args2 +')');
      } else {
          return self.apply(context, args.concat(bindArgs));
      }
  };
  
  return fBound;
};