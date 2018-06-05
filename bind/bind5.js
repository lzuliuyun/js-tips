Function.prototype.bind = Function.prototype.bind || function (context) {
  if (typeof this !== 'function') {
    throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var args = Array.prototype.slice.call(arguments, 1);

  var self = this;
  var fNOP = function() {};
  fNOP.prototype = this.prototype;

  var fBound = function() {
    var innerArgs = Array.prototype.slice.call(arguments)

    return self.apply(this instanceof fNOP ? this : contex, args.concat(innerArgs))
  }

  fBound.prototype = new fNOP();
  
  return fBound;
}