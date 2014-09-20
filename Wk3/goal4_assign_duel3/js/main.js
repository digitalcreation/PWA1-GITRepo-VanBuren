/*
Kevin Van Buren
09/19/2014
DEVELOP Duel #3
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
    //console.log("FIGHT!!!");
    //Logs the string "FIGHT!!!" in the console

    //Setup variable for players 1&2 that will show name and health on the page.
    var player1_txt = document.querySelector("#kabal").querySelector("p");
    var player2_txt = document.querySelector("#kratos").querySelector("p");
    //Setups variable for the current round on the page.
    var round_txt = document.querySelector("#round_number");
    //Setup variable for the fight button on the page.
    var button = document.getElementById("fight_btn");

    //sets up click event
    button.addEventListener("click", fight, false);

    //Creates an array of objects for 2 players
    var players = [
        {
            name:"Kabal",
            damage:20,
            health:100
        },
        {
            name:"Kratos",
            damage:20,
            health:100
        }];

    //Creates a variable for the round number, which starts at 1.
    var round = 1;

    //Initialize DOM innerHTML text for HTML page.
    round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
    player1_txt.innerHTML = players[0].name + ":" + players[0].health;
    player2_txt.innerHTMl = players[1].name + ":" + players[1].health;

    //Start of the "fight" function which will damage both player's health each round.
    function fight(){

        //alert(player1[0]+":"+player1[2]+"  *START*  "+player2[0]+":"+player2[2]);
        //Prints the name and current health of each player
        player1_txt.innerHTML = players[0].name + ":" + players[0].health;
        player2_txt.innerHTML = players[1].name + ":" + players[1].health;


            //Variable that will generate a random amount of damage.
            var p1 = Math.floor(Math.random() * players[0].damage + players [0].damage * .5);
            var p2 = Math.floor(Math.random() * players[1].damage + players [1].damage * .5);

            //inflicts damage
            players[0].health -= p1;
            players[1].health -= p2;

            //Logs the result of the damage done to each player in the console.
            console.log(players[0].health, players[1].health);
            //Setups variable that will run the winnerCheck function which will determine if there is a winner or not.
            var result = winnerCheck();
            //Logs the results in the console.
            console.log(result);
            //Prints the current round and results on the HTML page.
            round_txt.innerHTML = "ROUND #" + round + " Results:";
            //Increments the current round by 1.
            round++;

            //If the result is strictly equal to "no winner" then continue loop.
            if (result === "no winner")
            {
                //If there is no winner, print each players name and current health on the HTML page.
                player1_txt.innerHTML = players[0].name + ":" + players[0].health;
                player2_txt.innerHTML = players[1].name + ":" + players[1].health;
            } else{
                //Otherwise, print the results in the player1 name/health area on the HTML page and empty player 2's area.
                player1_txt.innerHTML = result;
                player2_txt.innerHTML = "";

                //Disable the button.
                button.removeEventListener("click", fight, false);
                //Prints "DONE!!!" in the fight button.
                document.querySelector(".buttonblue").innerHTML = "DONE!!!";
            };

    };

    //Setup winnerCheck function.
    function winnerCheck(){
        //Variable that sets the result = to "no winner".
        var result = "no winner";


        if
            (players[0].health <1 && players[1].health < 1)
        {
            //If the players1&2 health is <1 then result = "You Both Die - GAME OVER!".
            result = "You Both Die - GAME OVER!";
        } else if
            //Otherwise if, player1 health is <1 then result = player 2 wins.
            (players[0].health < 1){
            result = players[1].name + " WINS!!!"
        } else if
            //Otherwise if, player2 health is <1 then result = player 1 wins.
            (players[1].health < 1)
            result = players[0].name + " WINS!!!";

        //Returns the value of the result.
        return result;
    }

})();