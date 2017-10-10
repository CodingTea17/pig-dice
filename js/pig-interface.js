var HumanPlayer = require('./../js/pig.js').humanPlayerModule;
var ComputerPlayer = require('./../js/pig.js').computerPlayerModule;
var PigGameTurn = require('./../js/pig.js').pigGameTurnModule;

// Frontend Logic
$(document).ready(function() {
  // Disables roll and hold buttons until game is started
  $("#roll").attr('disabled',true);
  $("#hold").attr('disabled',true);
  alert("Im working");
  // Waits to start a game until the start button is clicked
  /**************************************************************************/
  $("#start").click(function() {
  /**************************************************************************/
    $("#turn").text("Player's Turn");
    // Disables the start button once the game has already been "started"
    $(this).attr('disabled',true);
    // Disables the difficulty selector
    $("#difficulty").attr('disabled',true);
    // Enables the roll button so that the player may "roll"
    $("#roll").attr('disabled', false);

    // Figure out what difficulty the player wants to play at
    var compDifficulty = parseInt($("#difficulty option:selected").val());
    var comp1 = new ComputerPlayer(compDifficulty);
    var player1 = new HumanPlayer();

    // Initializes Scores
    $("#p1Score").text(player1.score);
    $("#c1Score").text(comp1.score);
    $("#turnRoll").text("0");
    $("#turnScore").text("0");

    var playerTurn = new PigGameTurn();
    var compTurn = new PigGameTurn();

    if(comp1.diff === 2) {
      comp1.compHardMode(compTurn,player1);
    }
    $("#c1Score").text(comp1.score);
    compTurn.turnScore = 0;
    /**************************************************************************/
    $("#roll").click(function() {
    /**************************************************************************/
      // Enables the hold button
      $("#hold").attr('disabled',false);

      // Returns true if a "1" is rolled and false if it runs as expected
      if(playerTurn.turn(player1)){
        alert("You got a 1 :(");
        $("#turn").text("Computer's Turn");
        // Disables hold button
        $("#hold").attr('disabled',true);
        if(comp1.diff === 1){
          comp1.compEasyMode(compTurn,player1);
        } else if(comp1.diff === 2) {
          comp1.compHardMode(compTurn,player1);
        }
        $("#c1Score").text(comp1.score);
        compTurn.turnScore = 0;
      };
    });
    /**************************************************************************/
    $("#hold").click(function() {
    /**************************************************************************/
      $("#turn").text("Computer's Turn");
      // The hold button disables itself
      $(this).attr('disabled','disabled');

      // Update the player score and the player's turn score
      player1.updateScore(playerTurn.turnScore);
      playerTurn.turnScore = 0;

      if(comp1.diff === 1){
        comp1.compEasyMode(compTurn,player1);
      } else if(comp1.diff === 2) {
        comp1.compHardMode(compTurn,player1);
      }
      // Update scores
      $("#c1Score").text(comp1.score);
      compTurn.turnScore = 0;
    });
      $("#turn").text("Player's Turn");
  });
});
