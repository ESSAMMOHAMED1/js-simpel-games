function MyChoiceIs(userChoice) {
    document.querySelector('.computer-choice').className = 'computer-choice stop-spinning';
    const randomNumber = Math.ceil(Math.random()*2);
    const computerChoice = ['rock','paper','scissors'][randomNumber];
    document.querySelector('.computer-choice .'+computerChoice).style.display = 'block';
    const draw = userChoice === computerChoice;
    if (draw) {
      document.querySelector('.result').innerText = 'are you copy me 🤨';
    } else {
      const userWon = (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper');
      if (userWon) {
        document.querySelector('.result').innerText = 'Not bad 😑';
      } else {
        document.querySelector('.result').innerText = 'I Win hhhhhhhhhh 😜';
      }
    }
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }