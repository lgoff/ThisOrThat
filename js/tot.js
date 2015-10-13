var b1 = document.querySelector(".b1");
var b2 = document.querySelector(".b2");

b1.addEventListener("click", playGame, false);
b2.addEventListener("click", playGame, false);

var questionNumber = 0;

var buttonTextArray = [

    ["Light", "Bold"],
    ["Uppercase", "Lowercase"],
    ["Initial Cap", "Drop Cap"],
    ["Kerning", "Leading"],
    ["Square", "Circle"],
    ["Photoshop", "Illustrator"],
    ["CMYK", "RGB"],
    ["Shades", "Tints"],
    ["Primary Colors", "Secondary Colors"],
    ["CSS", "Javascript"],
    ["Mac", "PC"],
    ["Symmetry", "Asymmetry"],
    ["Flat Design", "Realism"],
    ["Flush Left", "Centered"],
    ["Abstract", "Representational"]
]



function playGame() {
    if (questionNumber < 15 ){
    b1.innerHTML = buttonTextArray[questionNumber][0];
    b2.innerHTML = buttonTextArray[questionNumber][1];
    questionNumber++;
}else {
      setTimeout(endGame,300);
    }
}

function endGame(){
    location.assign("https://hennepintech.edu/programs/overview/Graphic_Design");
}


