// LAST QUESTION 

// function endResponse(){
// 		// //version3
// 	if (humanMsg.indexOf("hogwarts") !== -1){
// 		computerMsg = "You&#39;re my kind of person, lets be friends!";
// 		human.className="displayNone";
// 		button.className="displayNone";
// 		setTimeout(endGame,1200);
// 	}else if (humanMsg.indexOf("narnia") !== -1){
// 		computerMsg = "Wrong answer, see you later!";
// 		human.className="displayNone";
// 		button.className="displayNone";
// 		setTimeout(endGame,1200);
// 	}
// }

// function endGame(){
// 	////.assign() leaves the back button working
// 	////.replace() disables the back button by replacing the location in the history
// 	location.assign("http://buzzfeed.com/danieldalton/griffin-door#.yeRolMaaea");
// }
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
    b1.innerHTML = buttonTextArray[questionNumber][0];
    b2.innerHTML = buttonTextArray[questionNumber][1];
    questionNumber++;

}
