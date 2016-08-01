define(function (require) {
    var utilities = require('helper/util');

    // Reset scores and times to 0
    utilities.setDefaults();
      
    // Action happens after user presses start button
    $('.startButton').click(function() {
      var minutesRemaining = $('.minutesInput').val();
      var secondsRemaining = $('.secondsInput').val();
      $('.minutesRemaining').text(minutesRemaining || 0);
      $('.secondsRemaining').text(utilities.doubleDigitSeconds(secondsRemaining));
      $('.minutesInput').val('');
      $('.secondsInput').val('');
      
      // Timer Countdown Logic
      var countDown = setInterval(function(){
        if (parseInt(minutesRemaining) === 0 && parseInt(secondsRemaining) <= 10) {
          $('.timeDisplay').addClass('lowTime');
        }

        if (parseInt(secondsRemaining) > 0) {
          secondsRemaining--;
          $('.secondsRemaining').text(utilities.doubleDigitSeconds(secondsRemaining));
        } else if (minutesRemaining > 0 && parseInt(secondsRemaining) === 0) {
          secondsRemaining = 59;
          minutesRemaining--;
          $('.minutesRemaining').text(minutesRemaining);
          $('.secondsRemaining').text(utilities.doubleDigitSeconds(secondsRemaining));
        } else {
          utilities.evaluateWinner(countDown);
        }
      }, 1000);

      // Rock Paper Scissors Click Handler
      $('.rock').click(function() {
        utilities.computerMove('rock');
      });
      $('.paper').click(function() {
        utilities.computerMove('paper');
      });      
      $('.scissors').click(function() {
        utilities.computerMove('scissors');
      });
      // Reset scores and times to 0
      $('.restartButton').click(function() {
        utilities.setDefaults();
        clearInterval(countDown);
      }); 
    });
  
});