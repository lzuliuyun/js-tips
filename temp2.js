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

let isSameORSeqNum = (num) => {
  let numStrs = [...(num + '')];
  let res = numStrs.reduce((data, cur, index) => {
    if (index === 0) {
      data.cur = cur;
      return data;
    }

    data.same = cur - data.cur === 0 ? data.same + 1 : 0;
    data.sameMax = Math.max(data.sameMax, data.same);

    data.seq = cur - data.cur === 1 ? data.seq + 1 : 0;
    data.seqMax = Math.max(data.seqMax, data.seq);

    data.cur = cur;

    return data;
  }, {
    cur: '',
    same: 0,
    sameMax: 0,
    seq: 0,
    seqMax: 0
  })

  console.log(res);
  return res.sameMax > 1 || res.seqMax > 2;
}


console.log(isSameORSeqNum(1211), isSameORSeqNum(12111), isSameORSeqNum(1211111234), isSameORSeqNum(12234), isSameORSeqNum(121234));


var data = {a: 1, b:2, c:3 };
for(key in data)
{
  console.log(key);
}