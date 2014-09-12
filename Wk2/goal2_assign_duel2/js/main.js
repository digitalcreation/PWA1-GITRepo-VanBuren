/*
Kevin Van Buren
09/11/2014
DEVELOP Duel #2
*/

/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){
//Start of function
    console.log("FIGHT!!!");
//Logs the string "FIGHT!!!" in the console

//Creates an array for player1 that contains: 1) Player Name, 2) Player's Damage, 3)Players Health
    var player1 = [
        "Spiderman",
        20,
        100
    ];
//Creates an array for player2 that contains: 1) Player Name, 2) Player's Damage, 3)Players Health
    var player2 = [
        "Batman",
        20,
        100
    ];
            //player name
            //var playerOneName = "Spiderman";
            //var playerTwoName = "Batman";

            //Creates a name variable for players one and two.
            //player damage
            //var player1Damage = 20;
            //var player2Damage = 20;

            //Creates a maximum damage variable for players one and two.
            //player health
            //var playerOneHealth = 100;
            //var playerTwoHealth = 100;

//Creates a total health variable for players one and two
    //initiate round
    var round=0;
//Creates a variable for the round number, which starts at 0.
    function fight(){
//Start of the "fight" function which will damage both player's health each round.
        alert(player1[0]+":"+player1[2]+"  *START*  "+player2[0]+":"+player2[2]);
//Alerts the user of both players starting health.
        for (var i = 0; i < 10; i++)
//Start of the for loop which first sets up a round counter, starting at 0 then increasing by 1 until it reaches 10 or there is a winner.
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1[1] * .5;
            var minDamage2 = player2[1] * .5;
//Variable for minimum play damage which is max damage * .5
            var f1 = Math.floor(Math.random()*(player1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2[1]-minDamage2)+minDamage2);
//Variable that will generate a random amount of damage.

            //inflict damage
            player1[2]-=f1;
            player2[2]-=f2;
//Applies to random amount of damage to each player.
            //console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);
            console.log(player1[0]+":"+player1[2]+" "+player2[0]+":"+player2[2]);
//Logs the result of the damage done to each player in the console.
            //check for victor
            var result = winnerCheck();
//Variable that will check to see if there is a winner.
            console.log(result);
//Logs winner in the console.
            if (result==="no winner")
//If the result is strictly equal to "no winner" then continue loop.
            {
                round++;
                alert(player1[0]+":"+player1[2]+"  *ROUND "+round+" OVER"+"*  "+player2[0]+":"+player2[2]);
//If there is no winner, alert the user of each player's health and current round.
            } else{
                alert(result);
                break;
//If there is a winner alert the user of the result (who the winning player is) and stop the loop.
            };

          };
    };

    function winnerCheck(){
//Stores the winnerCheck variable.
        var result="no winner";
//Sets up the result variable.
        if (player1[2]<1 && player2[2]<1)
        {
            result = "You Both Die";
//If the both players health drops below 1 then the result equals "You Both Die"
        } else if(player1[2]<1){
            result =player2[0]+" WINS!!!"
//Otherwise, if player one's health is below 1 then the result is player two wins.
        } else if (player2[2]<1)
        {
            result = player[0]+" WINS!!!"
//Otherwise, if player two's health is below 1 then the result is player one wins.
        };
       return result;
//Returns the value of the result.
    };

    /*******  The program gets started below *******/
    fight();

})();