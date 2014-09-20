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

    var player1_txt = document.querySelector("#kabal").querySelector("p");
    var player2_txt = document.querySelector("#kratos").querySelector("p");
    var round_txt = document.querySelector("#round_number");
    var button = document.getElementById("fight_btn");

    button.addEventListener("click", fight, false);

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

    round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
    player1_txt.innerHTML = players[0].name + ":" + players[0].health;
    player2_txt.innerHTMl = players[1].name + ":" + players[1].health;

    //Start of the "fight" function which will damage both player's health each round.
    function fight(){

        //alert(player1[0]+":"+player1[2]+"  *START*  "+player2[0]+":"+player2[2]);
        player1_txt.innerHTML = players[0].name + ":" + players[0].health;
        player2_txt.innerHTML = players[1].name + ":" + players[1].health;


            //Variable that will generate a random amount of damage.
            var p1 = Math.floor(Math.random() * players[0].damage + players [0].damage * .5);
            var p2 = Math.floor(Math.random() * players[1].damage + players [1].damage * .5);

            //inflict damage
            players[0].health -= p1;
            players[1].health -= p2;

            //Logs the result of the damage done to each player in the console.
            console.log(players[0].health, players[1].health);

            var result = winnerCheck();
            console.log(result);

            round_txt.innerHTML = "ROUND #" + round + " Results:";
            round++;

            //Logs winner in the console.
            if (result === "no winner")
            //If the result is strictly equal to "no winner" then continue loop.
            {
                player1_txt.innerHTML = players[0].name + ":" + players[0].health;
                player2_txt.innerHTML = players[1].name + ":" + players[1].health;
            } else{
                player1_txt.innerHTML = result;
                player2_txt.innerHTML = "";

                button.removeEventListener("click", fight, false);

                document.querySelector(".buttonblue").innerHTML = "DONE!!!";
            };


    };

    function winnerCheck(){
    //Stores the winnerCheck variable.
        var result="no winner";
        //Sets up the result variable.
        if (players[0].health <1 && players[1].health < 1)
        {
            //If the both players health drops below 1 then the result equals "You Both Die"
            result = "You Both Die - GAME OVER!";
        } else if
            (players[0].health < 1){
            result = players[1].name + " WINS!!!"
        } else if
            (players[1].health < 1)
        {
            result = players[0].name + " WINS!!!"
        }
        //Returns the value of the result.
        return result;
    }

})();