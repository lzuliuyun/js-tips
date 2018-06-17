function getMinute(time) {
  var times = time.toString().split(':');
  return parseInt(times[0]) * 60 + parseInt(times[1])
}

function getTimeByMintue(minutes) { 
  var h = minutes / 60 | 0;
  var m = minutes % 60;

  if (m < 10) {
    m = '0' + m;
  }

  return  h +':'+ m;
}

function inputDateRange (time, step) {
  var times = time.split('-');
  var start = times[0];
  var end = times[1];
  var startMinute = getMinute(start);
  var endMinute = getMinute(end);
  step = parseInt(step);

  var newTimes = [];
 
  var minutes =  endMinute - startMinute;

  if (minutes <= 0) {
    throw new Error('time is not correct')
  }

  var stepNum = minutes / step | 0;
   
  newTimes.push(times[0]);

  for(var i=1; i<= stepNum; i ++) {
    newTimes.push(getTimeByMintue(startMinute + i * step))
  }

  minutes % step > 0 && newTimes.push(times[1])

  return newTimes
}

console.log(inputDateRange('3:00-5:10', '20'))