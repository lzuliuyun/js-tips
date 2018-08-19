var data = [
  {
    name: "a",
    value: 1
  },
  {
    name: "b",
    value: 1
  },
  {
    name: "a",
    value: 1
  },
  {
    name: "b",
    value: 3
  }
];

var res = data.reduce((res, cur, index)=>{
  if (index === 0) {
    res.push(cur);
  } else {
    var temp = res.find((item)=>{
      return item.name === cur.name;
    });

    temp ? (temp.value = temp.value + cur.value) : res.push(cur);
  }

  return res;
}, []);

console.log(res);
