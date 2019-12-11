const squares = $(".square");
const currentColor = $(".current-color");
const scoreText = $(".score-text");
const bottomText = $(".answer");

let correctSquare;
let score = 0;

startGame();

function startGame() {
  // Color squares
  for (let i = 0; i < squares.length; i++) {
    squares.eq(i).css("background", randomRgb());
  }
  // Chooses correct square
  correctSquare = Math.floor(Math.random() * squares.length);
  // Grabs correct square RGB code and sets to heading text
  let colorText = squares[correctSquare].style.backgroundColor;
  currentColor.text(`The correct color is: ${colorText}`);
}

// Checks if clicked square is correct
squares.click(e => {
  if (e.target === squares[correctSquare]) {
    answer(true);
  } else {
    e.target.style.backgroundColor = "transparent";
    answer(false);
  }
});

// Updates score and bottom text after click
function answer(a = true) {
  if (a) {
    score++;
    bottomText.text("Correct!");
    bottomText.css("color", "rgb(0, 255, 0)");
    startGame();
  } else {
    if (score > 0) score--;
    bottomText.text("Try Again!");
    bottomText.css("color", "rgb(255, 0, 0)");
  }
  scoreText.text(`Score: ${score}`);
}

// Generates random RGB color
function randomRgb() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
