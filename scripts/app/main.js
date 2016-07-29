define(function (require) {
    console.log('Mainjs getting called');
    var utilities = require('helper/util');

    // Reset scores and times to 0
    utilities.setDefaults();
      
    // Action happens after user presses start button
    $('.startButton').click(function() {
      var minutesRemaining = $('.minutesInput').val();
      var secondsRemaining = $('.secondsInput').val();
      $('.minutesRemaining').text(minutesRemaining);
      $('.secondsRemaining').text(utilities.doubleDigitSeconds(secondsRemaining));
      $('.minutesInput').val('');
      $('.secondsInput').val('');
      
      // Timer Countdown Logic
      var countDown = setInterval(function(){
        

        if (secondsRemaining > 0) {
          secondsRemaining--;
          $('.secondsRemaining').text(secondsRemaining);
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
    });
  
    // Reset scores and times to 0
    $('.restartButton').click(function() {
      utilities.setDefaults();
    }); 
});