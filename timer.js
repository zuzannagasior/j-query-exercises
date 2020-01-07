// var timerForm = $('.timer');

// var minutes = timerForm.find('#min');
// var seconds = timerForm.find('#sec');

// minutes.val(0);
// seconds.val(0);

// function countdown(e) {
//   e.preventDefault();

//   minutes.attr("disabled", true);
//   seconds.attr("disabled", true);

//   var m = Number(minutes.val());
//   var s = Number(seconds.val());

//   var then = new Date();

//   console.log('then', then);
//   then.setMinutes( then.getMinutes() + m);
//   then.setSeconds( then.getSeconds() + s);

//   var intervalId = setInterval(function tick() {
//     var now = new Date();
//     var timeLeft = then.getTime() + 1000 - now.getTime();
//         console.log('timeLeft', timeLeft)

//         console.log('now', now);



//       if(timeLeft > 0) {

//         var minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60) + 1) / (1000 * 60));
//         var secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
//         console.log(minutesLeft, 'minutesLeft')
//         console.log(secondsLeft, 'secondsLeft')

//         minutes.val(minutesLeft);
//         seconds.val(secondsLeft);

//       } else {
//         minutes.attr('disabled', false);
//         seconds.attr('disabled', false);
//         clearInterval(intervalId);

//       }
//   }, 1000);


// }

// timerForm.on("submit", countdown);

var timerForm = $('.timer');

var minutes = timerForm.find('#min');
var seconds = timerForm.find('#sec');

minutes.val(0);
seconds.val(0);

function countdown(e) {
  e.preventDefault();

  var m = Number(minutes.val());
  var s = Number(seconds.val());

  var fullTime = m*60 + s;
  console.log('fullTime', fullTime);
  

}

timerForm.on("submit", countdown);