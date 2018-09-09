//评测题目: //题目1：
//提取url中search部分参数，www.taobao.com?a=1&b=2

//题目2:
//2个正整数字符串的相加，即‘1’+’19’——>’20’（考虑超长字符串相加）

//题目3:实现es5,es6两种方式
//写一个类Person，拥有属性age和name，拥有方法say(something)
//再写一个类Superman，继承Person，拥有自己的属性power，拥有自己的方法fly(height)

function getUrlParamters(url) {
  if (!url || url.length === 0 || !url.includes('?')) return {}

  let urlParamter = url.split('?')[1] || '';
  let params = urlParamter.split('&');

  let ret = {};
  params.forEach((p) => {
      let urlPara = p.split('=');
      ret[urlPara[0]] = urlPara[1] || '';
  })

  return ret;
}


function getUrlParamtersByReg(url) {
  if (!url || url.length === 0 || !url.includes('?')) return {}

  let match = url.match(/(\w+)=(\w*)(?=&)*/g);

  let ret = {};
  match.forEach((p) => {
      let urlPara = p.split('=');
      ret[urlPara[0]] = urlPara[1] || '';
  })

  return ret;
}


console.log(getUrlParamtersByReg('www.taobao.com?a=1&b=2'));

function plus(str1, str2) {
  let res;
  try {
    res = praseInt(str1, 10) + praseInt(str2, 10) + '';
  } catch (e) {
    // big number
    let strs1;
    let strs2;

	// str2 设置为最大值 判断长度即可
    if (str1.length > str2.length) {
      let temp = str1;
      str1 = str2;
      str2 = temp;
    }

    strs1 = [...str1].reverse();
    strs2 = [...str2].reverse();

    res = [];

    let numPlus = 0;
    // 遍历数值大的
    strs2.forEach((num2, index)=> {
      let num1 = index < str1.length ? parseInt(strs1[index], 10) : 0;
      numPlus = parseInt(numPlus, 10) + parseInt(num2, 10) +  num1;

      if (numPlus > 9) {
        let tempPlus = numPlus + '';
      	res.push(tempPlus[1]);
        numPlus = tempPlus[0];
      } else {
        res.push(numPlus);
        numPlus = 0;
      }

    })

    // 自动tostring()
    res = res.reverse().join();
  }

  return res;
}


console.log(plus('11111111111111111', '222222222222222999'));



// es5
function Person(age, name) {
  this.age = age;
  this.name = name;
}

Person.prototype.say = function() {
	console.log('say someting');
}

function Superman(age, name, power) {
  Person.call(this, age, name);

  this.power = power;
}

function ObjectCreate(obj) {
  var fn = function() {
  };

  fn.prototype = obj;
  return new fn();
}

Superman.prototype = ObjectCreate(Person.prototype);
Superman.prototype.constructor = Superman;
Superman.prototype.fly = function(height) {
	this.height = height;
}

console.log(new Person(10, 'aa'));
console.log(new Superman(10, 'aa', 111));

// es6
class Person {
  constructor(name, age) {
    this.name = name;
	this.age = age;
  }
  say() {
    console.log('say something');
  }
}


class Superman extends Person {
  constructor(name, age, power){
  	super(name, age);
    this.power = power;
  }
  fly (height) {
    this.height = height;
  }
}

console.log(new Person(10, 'aa'));
console.log(new Superman(10, 'aa', 111));