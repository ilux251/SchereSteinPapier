var choice = document.getElementById("choice");
var choices = ["Schere", "Stein", "Papier"];
var winCondition = ["ScherePapier", "SteinSchere", "PapierStein"];
var drawCondition = ["SchereSchere", "SteinStein", "PapierPapier"];
var scorePlayerOneNode = document.getElementById("playerOne");
var scorePlayerTwoNode = document.getElementById("playerTwo");
var playerOneChoice = "";
var playerTwoChoice = "";
var scorePlayerOne = 0;
var scorePlayerTwo = 0;
var resetTime = 200;

var setChoices = function()
{
    choices.forEach(element => {
        createChoiceElement(element);
    });
};

var createChoiceElement = function(text)
{
    var choiceChild = document.createElement('span');
    choiceChild.id = text.toLowerCase();
    choiceChild.className = "choice";

    var textNode = document.createElement('span');
    textNode.innerHTML = text;
    choiceChild.appendChild(textNode);

    choiceChild.addEventListener('click', choose.bind(this, text));

    choice.appendChild(choiceChild);
};

var start = function()
{
    enemyTurn();
    evaluateChoices();
}

var choose = function(choice)
{
    playerOneChoice = choice;
    start();
};

var enemyTurn = function()
{
    var enemyChoice = choices[getRandomInt(choices.length)];
    playerTwoChoice = enemyChoice;
};

var evaluateChoices = function()
{
    var choices = playerOneChoice + playerTwoChoice;
    if(winCondition.includes(choices))
    {
        console.log("You win!!!", choices);
        win();
    }
    else if(drawCondition.includes(choices))
    {
        console.log("Draw.", choices);
        draw();
    }
    else
    {
        console.log("You lose!!! Try again.", choices);
        lose();
    }
};

var win = function()
{
    scorePlayerOne += 1;
    scorePlayerOneNode.innerHTML = scorePlayerOne;
    var choiceBorder = document.getElementById(playerOneChoice.toLowerCase());
    choiceBorder.style.borderColor = "#2ecc71";
    reset(choiceBorder);
};

var lose = function()
{
    scorePlayerTwo += 1;
    scorePlayerTwoNode.innerHTML = scorePlayerTwo;
    var choiceBorder = document.getElementById(playerOneChoice.toLowerCase());
    choiceBorder.style.borderColor = "#e74c3c";
    reset(choiceBorder);
};

var draw = function()
{

};

var reset = function(choiceBorder)
{
    var resetBorderColor = setInterval(function(){
        console.log("Test");
        if(resetTime <= 0)
        {
            console.log("reset");
            choiceBorder.style.borderColor = "#bdc3c7";
            clearInterval(resetBorderColor);
            resetTime = 200;
        }
        resetTime -= 1;
    }, 1);
}

var getRandomInt = function(max)
{
    return Math.floor(Math.random() * Math.floor(max));
};

setChoices();