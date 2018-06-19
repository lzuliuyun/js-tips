Function.prototype.bind3 = Function.prototype.bind || function (context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var self = this;
  var args = [].slice.call(arguments, 1);
  //var args = [].splice.call(arguments, 1);

  // var fNOP = function () {  };

  var fBound = function () {
    var bindArgs = [].slice.call(arguments);
    return self.apply(this instanceof fBound ? this : context , args.concat(bindArgs));
    // return self.apply(this instanceof fNOP ? this : context , args.concat(bindArgs));
  }

  // fNOP.prototype = this.prototype;
  //如果要继承this，为何不用 new this.prototype.constructor();
  // fBound.prototype = new fNOP();
  // fBound.prototype = new this.prototype.constructor; 这样写行不行？？to-do

  fBound.prototype = Object.create(this.prototype);
  return fBound;
}

var value3 = 2;

var foo3 = {
    value: 1
};

function bar3(name, age) {
    this.habit = 'shopping';
    console.log(this.value3);
    console.log(name);
    console.log(age);
}

bar3.prototype.friend = 'kevin';

var bindFoo3 = bar3.bind3(foo3, 'daisy');

console.log('--------------')
var obj3 = new bindFoo3('18');
// undefined
// daisy
// 18
console.log(obj3.habit);
console.log(obj3.friend);
