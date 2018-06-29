window.onload = function () {
  characters = {
    batman: {
      div: document.getElementById("batman"),
      name: "batman"
    },
    superman: {
      div: document.getElementById("superman"),
      name: "superman"
    },
  };
  startClucking();
  activateButtons();
};

function activateButtons(){
  //click the "go" button to start the characters
  document.getElementById("go").onclick = function(){
    startGame(characters);
  };
};
function startGame(characters){
  // start players and characters on left
  characters.batman.div.style.left = 0;
  characters.superman.div.style.left = 0;

  // stop initial animations
  document.getElementById("go").className = "";

  moveBatman();

  document.onkeydown = function(key) {
    characters.batman.position = parseInt(characters.batman.div.style.left, 10);
    characters.superman.position = parseInt(characters.superman.div.style.left, 10);
    checkWinner();
    movePlayer(key)
  };
};

function moveBatman(){
  characters.batman.position = parseInt(characters.batman.div.style.left, 10);
  setInterval(function(){
    var newVal = characters.batman.position += 40;
    if(newVal <= window.innerWidth - characters.batman.width){
      characters.batman.div.style.left = newVal + "px";
    }
  }, 100);
};

function movePlayer(key) {
  switch(key.which) {
    case 90: // press z to make homer go
      var newBatmanPosition = characters.batman.position += 40;
      characters.batman.div.style.left = newBatmanPosition + "px";
      break;
    case 39: // press right arrow to make peter go
      var newSupermanPosition = characters.superman.position += 40;
      characters.superman.div.style.left = newSupermanPosition + "px";
      break;
  };
};
