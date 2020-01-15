var timerForm = $('.timer');

var minutes = timerForm.find('#min');
var seconds = timerForm.find('#sec');

minutes.val(0);
seconds.val(0);

function countdown(e) {
  e.preventDefault();

  minutes.attr("disabled", true);
  seconds.attr("disabled", true);

  var minutesLeft = Number(minutes.val());
  var secondsLeft = Number(seconds.val());

  var intervalId = setInterval(function tick() {

    if (minutesLeft > 0) {
      if (secondsLeft > 0) {
        secondsLeft--;
      } else {
        minutesLeft--;
        minutes.val(minutesLeft);
        secondsLeft = 59;
      };
      seconds.val(secondsLeft);
    } else if (secondsLeft > 0) {
      secondsLeft--;
      seconds.val(secondsLeft);
    } else {
      minutes.attr('disabled', false);
      seconds.attr('disabled', false);
      clearInterval(intervalId);

    }
  }, 1000);

}

timerForm.on("submit", countdown);