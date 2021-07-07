var ask = prompt("are you ready?");
var choice = prompt('rock,paper or scissors?');
if (ask="yes") {

    if (!choice) {
        // choice was undefined
        document.write("<p>Player 1, you have no choice but to choose.</p>");
    } else {
        // Display user choice
        document.write("<p>Player 1:" + " " + choice + "</p>");
    }

// Computer choice
    var machineChoice = Math.random();
    if (machineChoice < 0.34) {
        machineChoice = "rock";
    } else if (machineChoice <= 0.67) {
        machineChoice = "paper";
    } else {
        machineChoice = "scissors";
    }

// Display computer choice
    document.write("<p>Computer:" + " " + machineChoice + "</p>");

// Compare  choice vs computer choice
    var compare = function (option1, option2) {
        if (option1 === option2) {
            return "we both win";
        }
        if (option1 === "rock") {
            if (option2 === "scissors") {
                // rock wins
                return "You win!";
            } else {
                // paper wins
                return "You lose!";
            }
        }
        if (option1 === "paper") {
            if (option2 === "rock") {
                // paper wins
                return "You win!";
            } else {
                // scissors wins
                return "You lose!";
            }
        }
        if (option1 === "scissors") {
            if (option2 === "rock") {
                // rock wins
                return "You lose!";
            } else {
                // scissors wins
                return "You win!";
            }
        }
    };


// Run the compare function
    var finalOp = compare(choice, machineChoice);

// Display results
    document.write("<br><hr><br>" + finalOp);
}