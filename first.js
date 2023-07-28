let randomNum = Math.floor(Math.random() * 100) + 1;
        let lives = 5;

        function checkGuess() {
            let userGuess = parseInt(document.getElementById("userGuess").value);
            if (lives > 0) {
                if (userGuess === randomNum) {
                    document.getElementById("result").innerText = "Correct!";
                    document.getElementById("userGuess").disabled = true;
                } else {
                    lives--;
                    if (userGuess < randomNum) {
                        document.getElementById("result").innerText = `Try again! The number is greater than ${userGuess}. Lives left: ${lives}`;
                    } else {
                        document.getElementById("result").innerText = `Try again! The number is smaller than ${userGuess}. Lives left: ${lives}`;
                    }
                }
            } else {
                document.getElementById("result").innerText = `Game over. The number was ${randomNum}`;
                document.getElementById("userGuess").disabled = true;
            }
        }

        // Rock-Paper-Scissors Game
        function playGame() {
            let userChoice = document.querySelector('input[name="userChoice"]:checked').value;
            let computerChoice = Math.random();
            if (computerChoice < 0.33) {
                computerChoice = "rock";
            } else if (computerChoice < 0.66) {
                computerChoice = "paper";
            } else {
                computerChoice = "scissors";
            }
            let gameResult = determineWinner(userChoice, computerChoice);
            document.getElementById("gameResult").innerText = gameResult;
        }

        function determineWinner(user, computer) {
            if (user === computer) {
                return `User selected: ${user}\nComputer selected: ${computer}\nIt's a tie!`;
            } else if ((user === "rock" && computer === "scissors") || 
                       (user === "paper" && computer === "rock") || 
                       (user === "scissors" && computer === "paper")) {
                return `User selected: ${user}\nComputer selected: ${computer}\nWinner: You!`;
            } else {
                return `User selected: ${user}\nComputer selected: ${computer}\nWinner: Computer!`;
            }
        }