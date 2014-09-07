/*
Kevin Van Buren
09/06/2014
ANALYZE Duel #1
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
    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";
//Creates a name variable for players one and two.
    //player damage
    var player1Damage = 20;
    var player2Damage = 20;
//Creates a maximum damage variable for players one and two.
    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;
//Creates a total health variable for players one and two
    //initiate round
    var round=0;
//Creates a variable for the round number, which starts at 0.
    function fight(){
//Start of the "fight" function which will damage both player's health each round.
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
//Alerts the user of both players starting health.
        for (var i = 0; i < 10; i++)
//Start of the for loop which first sets up a round counter, starting at 0 then increasing by 1 until it reaches 10.
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();