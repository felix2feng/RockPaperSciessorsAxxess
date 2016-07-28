define(function () {
  return {
    setDefaults: function() {
      $('.winScore').text(0);
      $('.lossScore').text(0);
      $('.drawScore').text(0);
      // $('.minutesRemaining').text(0);
      $('.secondsRemaining').text(0);
    },

    evaluateWinner: function(countDown) {
        // Declare Result
        if (parseInt($('.winScore').text()) >= parseInt($('.drawScore').text()) && 
            parseInt($('.winScore').text()) >= parseInt($('.lossScore').text())) {
          alert('You win!');
        } else if (parseInt($('.drawScore').text()) >= parseInt($('.lossScore').text())) {
          alert('Its a draw!!');
        } else {
          alert('You Lose :(');
        }    
        clearInterval(countDown);  
    },

    scoreIncrement: function(scoreType) {
      var scoreSelector = '.' + scoreType + 'Score';
      $(scoreSelector).text(parseInt($(scoreSelector).text()) + 1);
    },

    updateScoreboard: function(decision, computerDecision) {
      if (decision === computerDecision) {
        $('.drawScore').text(parseInt($('.drawScore').text()) + 1);
      } else if (decision === 'rock') {
        if (computerDecision === 'scissors') {
          this.scoreIncrement('win');
        } else if (computerDecision === 'paper') {
          this.coreIncrement('loss');
        }
      } else if (decision === 'paper') {
        if (computerDecision === 'rock') {
          this.scoreIncrement('win');
        } else if (computerDecision === 'scissors') {
         this.scoreIncrement('loss'); 
        }
      } else if (decision === 'scissors') {
        if (computerDecision === 'paper') {
          this.scoreIncrement('win');
        } else if (computerDecision === 'rock') {
          this.scoreIncrement('loss');
        }          
      }
    },

    computerMove: function(decision) {
      var decisionMap = ['rock', 'paper', 'scissors'];
      var computerDecision = decisionMap[Math.floor(Math.random() * decisionMap.length)];
      // Display computer decision
      $('.computerChoice').text(computerDecision);
      this.updateScoreboard(decision, computerDecision);
    }
  }
});