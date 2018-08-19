console.log(0, ...[1,2,3], 4);
let [first, ...rest] = [1,2,3];
console.log('first', first);
console.log('rest', rest);

var a = 'adsfefas';
console.log([...a]);

var cl = (...args) => {
  console.log(args);
}

cl(1,2,3)


var data = [
  {
    age: 12,
    group: 1
  },
  {
    age: 12,
    group: 9
  },
  {
    age: 12,
    group: 4
  },
  {
    age: 33,
    group: 4
  },
  {
    age: 10,
    group: 4
  }
];

var res = data.sort((cur, next) => {
  if (cur.age - next.age === 0) {
    return cur.group - next.group;
  } else {
    return next.age - cur.age;
  }
});

console.log(res);

function Parent () {
  this.a = 1;
}

Parent.a = 2;
var p = new Parent();
console.log(p.a, Parent.a);

var str ='aaa111';
var res = str.replace(/(\d)/g, ($0, $1) => {
  return $1 * 2;
});
console.log(res);