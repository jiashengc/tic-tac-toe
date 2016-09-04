$(document).ready(function() {

  var choose = ["X", "O"];
  var choice = "X";
  var start = false;
  var tl = 0,
    tm = 0,
    tr = 0,
    ml = 0,
    mm = 0,
    mr = 0,
    bl = 0,
    bm = 0,
    br = 0;
  var lastMove;

  $("#chooseX").click(function() {
    choice = choose[0];
    appendChoice(choice);
  });

  $("#chooseO").click(function() {
    choice = choose[1];
    appendChoice(choice);
  });

  function appendChoice(choice) {
    $("#selected").empty();
    $("#selected").append(choice);
  };

  function gameStart(choice) {
    if (start == false) {
      console.log("Game Start: Success!");
      $("#startGame").addClass("disabled");
      $("#choosing").addClass("disabled");
      $("h2").empty();
      tl = 0, tm = 0, tr = 0, ml = 0, mm = 0, mr = 0, bl = 0, bm = 0, br = 0;
      start = true;
      console.log("Game Start: " + start);
      if (choice == "X") {
        lastMove = 0
      } else if (choice == "O") {
        lastMove = 1
      }
      gameStart(choice);

    } else { // Start = true
      console.log("Current Move: " + lastMove);

      // Checks if someone has already won
      if ((tl == 1 && tm == 1 && tr == 1) || (tl == 1 && ml == 1 && bl == 1) || (tl == 1 && mm == 1 && br == 1) || (ml == 1 && mm == 1 && mr == 1) || (bl == 1 && bm == 1 && br == 1) || (bl == 1 && mm == 1 && tr == 1) || (tm == 1 && mm == 1 && bm == 1) || (tr == 1 && mr == 1 && br == 1)) {
        start = false;
        alert("Player Wins!");
        gameStart(choice);
      }
      else if ((tl == 2 && tm == 2 && tr == 2) || (tl == 2 && ml == 2 && bl == 2) || (tl == 2 && mm == 2 && br == 2) || (ml == 2 && mm == 2 && mr == 2) || (bl == 2 && bm == 2 && br == 2) || (bl == 2 && mm == 2 && tr == 2) || (tm == 2 && mm == 2 && bm == 2) || (tr == 2 && mr == 2 && br == 2)) {
        start = false;
        alert("Bot Wins!");
        gameStart(choice);
      } else if (tl != 0 && tm != 0 && tr != 0 && ml != 0 && mm != 0 && mr != 0 && bl != 0 && bm != 0 && br != 0) {
        start = false;
        alert("No one Wins!");
        gameStart(choice);
      }

      // Bot Move
      else if (lastMove == 1) {
        setTimeout(function() {
          console.log("Bot Moves!");
          var botMove = 0;
          var botPlace;
          var botChoice;
          if (choice == "X") {
            botChoice = "O"
          } else {
            botChoice = "X"
          }

          function generate(botPlace) {
            return botPlace = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
          };

          do {

            botPlace = generate(botPlace);
            console.log(botPlace);

            if (botPlace == 1 && tl == 0) {
              $("#tlh2").append(botChoice);
              botMove = 1;
              lastMove = 0;
              tl = 2;
            } else if (botPlace == 2 && tm == 0) {
              $("#tmh2").append(botChoice);
              botMove = 1;
              lastMove = 0;
              tm = 2;
            } else if (botPlace == 3 && tr == 0) {
              $("#trh2").append(botChoice);
              botMove = 1;
              lastMove = 0;
              tr = 2;
            } else if (botPlace == 4 && ml == 0) {
              $("#mlh2").append(botChoice);
              botMove = 1;
              lastMove = 0;
              ml = 2;
            } else if (botPlace == 5 && mm == 0) {
              $("#mmh2").append(botChoice);
              botMove = 1;
              lastMove = 0;
              mm = 2;
            } else if (botPlace == 6 && mr == 0) {
              $("#mrh2").append(botChoice);
              botMove = 1;
              lastMove = 0;
              mr = 2;
            } else if (botPlace == 7 && bl == 0) {
              $("#blh2").append(botChoice);
              botMove = 1;
              lastMove = 0;
              bl = 2;
            } else if (botPlace == 8 && bm == 0) {
              $("#bmh2").append(botChoice);
              botMove = 1;
              lastMove = 0;
              bm = 2;
            } else if (botPlace == 9 && br == 0) {
              $("#brh2").append(botChoice);
              botMove = 1;
              lastMove = 0;
              br = 2;
            }

          } while (botMove == 0);

          console.log("Bot chooses: " + botPlace);
          gameStart(choice);
        }, 1000);
      } // End of Bot Move

    }
  };

  // Player Moves
  $("#topleft").click(function() {
    console.log("tl: " + tl + " gameStart: " + start + " lastMove: " + lastMove);
    if (tl == 0 && start == true && lastMove == 0) {
      $("#tlh2").append(choice);
      lastMove = 1;
      tl = 1;
      console.log("Player moves!");
      gameStart(choice);
    }
  });

  $("#topmid").click(function() {
    if (tm == 0 && start == true && lastMove == 0) {
      $("#tmh2").append(choice);
      lastMove = 1;
      tm = 1;
      console.log("Player moves!");
      gameStart(choice);
    }
  });

  $("#topright").click(function() {
    if (tr == 0 && start == true && lastMove == 0) {
      $("#trh2").append(choice);
      lastMove = 1;
      tr = 1;
      console.log("Player moves!");
      gameStart(choice);
    }
  });

  $("#midleft").click(function() {
    if (ml == 0 && start == true && lastMove == 0) {
      $("#mlh2").append(choice);
      lastMove = 1;
      ml = 1;
      console.log("Player moves!");
      gameStart(choice);
    }
  });

  $("#midmid").click(function() {
    if (mm == 0 && start == true && lastMove == 0) {
      $("#mmh2").append(choice);
      lastMove = 1;
      mm = 1;
      console.log("Player moves!");
      gameStart(choice);
    }
  });

  $("#midright").click(function() {
    if (mr == 0 && start == true && lastMove == 0) {
      $("#mrh2").append(choice);
      lastMove = 1;
      mr = 1;
      console.log("Player moves!");
      gameStart(choice);
    }
  });

  $("#botleft").click(function() {
    if (bl == 0 && start == true && lastMove == 0) {
      $("#blh2").append(choice);
      lastMove = 1;
      bl = 1;
      console.log("Player moves!");
      gameStart(choice);
    }
  });

  $("#botmid").click(function() {
    if (bm == 0 && start == true && lastMove == 0) {
      $("#bmh2").append(choice);
      lastMove = 1;
      bm = 1;
      console.log("Player moves!");
      gameStart(choice);
    }
  });

  $("#botright").click(function() {
    if (br == 0 && start == true && lastMove == 0) {
      $("#brh2").append(choice);
      lastMove = 1;
      br = 1;
      console.log("Player moves!");
      gameStart(choice);
    }
  });

  $("#startGame").click(function() {
    if (start == false) {
      start = false;
      gameStart(choice);
    }
  });

});