var pacMan = null;
var direction = "r"
var desiredDir = "n";
var currentThreadID = null;
var score=0;

mazeArray = [["blocktop", 90,90, 420, 10],["blockdown", 500,90, 420, 10],
["blockright",90,500,10,420],["blockleft",90,90,10,420],
["bintop",131,131,338,10],["bindown",459,131,338,10],
["binleft",172,131,10,256],["binright",172,459,10,256],
["bmidup",172,172,256,10],["bmiddown",418,172,256,10],
["blockl",213,172,10,174],["blockr",213,418,10,174],
["gtop",213,213,174,30],["gdown",316,213,174,30],
["gleft",213,213,41,133],["pacblock",377,213,174,10]];

sugarArray=[["s1", 102, 105], ["s2", 102, 135],["s3", 102, 165],
["s4", 102, 195],["s5", 102, 225],["s6", 102, 255],
["s7", 102, 285],["s8", 102, 315],["s9", 102, 345],
["s10", 102, 375],["s11", 102, 405],["s12", 102, 435],
["s13", 102, 475],["s15", 132, 104],["s16", 162, 104],
["s17", 192, 104],["s18", 222, 104],["s19", 252, 104],
["s20", 282, 104],["s21", 312, 104],["s22", 342, 104],
["s23", 372, 104],["s24", 402, 104],["s25", 432, 104],
["s26", 470, 104],["s27", 470, 105],["s28", 470, 135],
["s29", 470, 165],["s30", 470, 195],["s31", 470, 225],
["s32", 470, 255],["s33", 470, 285],["s34", 470, 315],
["s35", 470, 345],["s36", 470, 375],["s37", 470, 405],
["s38", 470, 435],["s39", 470, 472],["s40", 132, 472],
["s41", 162, 472],["s42", 192, 472],["s43", 222, 472],
["s44", 252, 472],["s45", 282, 472],["s46", 312, 472],
["s47", 342, 472],["s48", 372, 472],["s49", 402, 472],
["s50", 432, 472],["s51", 470, 472],["s52", 432, 435],
["s53", 432, 405],["s54", 432, 375],["s55", 432, 345],
["s56", 432, 315],["s57", 432, 285],["s58", 432, 255],
["s59", 432, 225],["s60", 432, 195],["s61", 432, 165],
["s62", 432, 135],["s63", 142, 430],["s64", 142, 405],
["s65", 142, 375],["s66", 142, 345],["s67", 142, 315],
["s68", 142, 285],["s69", 142, 255],["s70", 142, 225],
["s71", 142, 195],["s72", 142, 165],["s73", 142, 135],
["s74", 172, 430],["s75", 202, 430],["s76", 232, 430],
["s77", 262, 430],["s78", 292, 430],["s79", 322, 430],
["s80", 352, 430],["s81", 390, 430],["s82", 390, 144],
["s83", 355, 144],["s84", 325, 144],["s85", 295, 144],
["s86", 265, 144],["s87", 235, 144],["s88", 205, 144],
["s89", 175, 144],["s90", 390, 185],["s91", 390, 215],
["s92", 390, 245],["s93", 390, 275],["s94", 390, 305],
["s95", 390, 335],["s96", 390, 365],["s97", 390, 395],
["s98", 390, 185],["s99", 360, 185],["s100", 330, 185],
["s101", 300, 185],["s102", 270, 185],["s103", 240, 185],
["s104", 205, 185],["s105", 183, 185],["s106", 183, 215],
["s107", 183, 245],["s108", 183, 275],["s109", 183, 305],
["s110", 183, 335],["s111", 183, 365],["s112", 183, 395],
["s113", 213, 389],["s114", 243, 389],["s115", 273, 389],
["s116", 303, 389],["s117", 333, 389],["s118", 363, 389]];


function checkSugar(){
	currentLeft = parseInt(pacMan.style.left);
	currentTop = parseInt(pacMan.style.top);
	
	for (var i = 0; i < sugarArray.length; i++) 
	{
		switch (direction) 
		{
			case "l":
				if (currentLeft == (sugarArray[i][2] + 15) &&
				currentTop >= (sugarArray[i][1] - 5) &&
				currentTop <= (sugarArray[i][1] + 5)) 
				{
					if(document.getElementById(sugarArray[i][0]).style.display != "none")
					{
				    score+=5;
		            document.getElementById("score").innerHTML="Score:&nbsp;" + score; 	
					//return;
					}

					document.getElementById(sugarArray[i][0]).style.display = "none";
				}
				break;
				
			case "r":
				if (currentLeft == (sugarArray[i][2] - 15) &&
				currentTop >= (sugarArray[i][1] - 5) &&
				currentTop <= (sugarArray[i][1] + 5)) 
				{
				if(document.getElementById(sugarArray[i][0]).style.display != "none")
					{
				    score+=5;
		            document.getElementById("score").innerHTML="Score:&nbsp;" + score;
					//return;
					}

					document.getElementById(sugarArray[i][0]).style.display = "none";
				}
				break;
				
			case "u":
				if (currentTop == (sugarArray[i][1] + 15) &&
				currentLeft >= (sugarArray[i][2] - 5) &&
				currentLeft <= (sugarArray[i][2] + 5)) 
				{
				    if(document.getElementById(sugarArray[i][0]).style.display != "none")
					{
				    score+=5;
		            document.getElementById("score").innerHTML="Score:&nbsp;" + score; 	
					//return;
					}
					document.getElementById(sugarArray[i][0]).style.display = "none";
				
				}
				break;
				
			case "d":
				if (currentTop == (sugarArray[i][1] - 15) &&
				currentLeft >= (sugarArray[i][2] - 5) &&
				currentLeft <= (sugarArray[i][2] + 5)) 
				{
				    if(document.getElementById(sugarArray[i][0]).style.display != "none")
					{
				    score+=5;
		            document.getElementById("score").innerHTML="Score:&nbsp;" + score;
					//return;
					}
					document.getElementById(sugarArray[i][0]).style.display = "none";
				}
				break;
		}			
	}
}

function switchDirection(newDir){
	pacMan.style.display = "none";
	currentLeft = parseInt(pacMan.style.left);
	currentTop = parseInt(pacMan.style.top);
	
	switch (newDir) {
		case "l":
			newDir = "Left";
			break;
			
		case "r":
			newDir = "Right";
			break;
			
		case "u":
			newDir = "Up";
			break;
			
		case "d":
			newDir = "Down";
			break;
	}
	
	pacMan = document.getElementById('pacman' + newDir);
	pacMan.style.left = currentLeft + "px";
	pacMan.style.top = currentTop + "px";
	pacMan.style.display = "block";
}


function checkCollision(dir){
	currentLeft = parseInt(pacMan.style.left);
	currentTop = parseInt(pacMan.style.top);
	
	switch (dir) {
		case "r":
			for (var i = 0; i < mazeArray.length; i++) {
				
				if (currentLeft == mazeArray[i][2] - 29 &&
				currentTop > (mazeArray[i][1] - 29) &&
				currentTop < (mazeArray[i][1] + mazeArray[i][4] + 2)) 
					return true;
			}
			break;
			
		case "l":
			for (var i = 0; i < mazeArray.length; i++) {
				
				if (currentLeft == (mazeArray[i][2] + mazeArray[i][3] + 2) &&
				currentTop > (mazeArray[i][1] - 29) &&
				currentTop < (mazeArray[i][1] + mazeArray[i][4] + 2)) 
					return true;
			}
			break;
			
		case "u":
			for (var i = 0; i < mazeArray.length; i++) {
			
				if (currentTop == (mazeArray[i][1] + mazeArray[i][4] + 2) &&
				currentLeft > (mazeArray[i][2] - 29) &&
				currentLeft < (mazeArray[i][2] + mazeArray[i][3] + 2)) 
					return true;
			}
			break;
			
		case "d":
			for (var i = 0; i < mazeArray.length; i++) {
			
				if (currentTop == (mazeArray[i][1] - 29) &&
				currentLeft > (mazeArray[i][2] - 29) &&
				currentLeft < (mazeArray[i][2] + mazeArray[i][3] + 2)) 
					return true;
			}
			break;
	}
	return false;
}

function moveRight(){
	checkSugar();
	
	if (checkCollision("r")) {
		clearInterval(currentThreadID);
		return;
	}
		
    if (direction == "r") {
        pacMan.style.left = parseInt(pacMan.style.left) + 1 + "px";
    }
	else{
		direction = "r";
		switchDirection("Right");
	}
}

function moveLeft(){
	checkSugar();
	
	if (checkCollision("l")) {
		clearInterval(currentThreadID);
		return;
	}
		
    if (direction == "l") {
        pacMan.style.left = parseInt(pacMan.style.left) - 1 + "px";
    }
	else{
		direction = "l";
		switchDirection("Left");
	}
}

function moveUp(){
	checkSugar();
	
	if (checkCollision("u")) {
		clearInterval(currentThreadID);
		return;
	}
	
    if (direction == "u") {
        pacMan.style.top = parseInt(pacMan.style.top) - 1 + "px";
    }
	else{
		direction = "u";
		switchDirection("Up");
	}
}

function moveDown(){
	checkSugar();
	
	if (checkCollision("d")) {
		clearInterval(currentThreadID);
		return;
	}
	
    if (direction == "d") {
        pacMan.style.top = parseInt(pacMan.style.top) + 1 + "px";
    }
	else{
		direction = "d";
		switchDirection("Down");
	}
}

var init = function(){
	dojo.connect(null, "onkeydown", keydown_handler);
    pacMan = document.getElementById('pacmanRight');
}

var keydown_handler = function(event){
	var keys = dojo.keys;
	switch (event.keyCode) {
		case keys.LEFT_ARROW:
			if (checkCollision("l"))
				return;
			
			clearInterval(currentThreadID);
			currentThreadID = setInterval(moveLeft, 20);
			break;
			
		case keys.RIGHT_ARROW:
			if (checkCollision("r"))
				return;
			
			clearInterval(currentThreadID);
			currentThreadID = setInterval(moveRight, 20);
			break;
		case keys.UP_ARROW:
			if (checkCollision("u")) 
				return;
			clearInterval(currentThreadID);
			currentThreadID = setInterval(moveUp, 20);
			break;
		case keys.DOWN_ARROW:
			if (checkCollision("d")) 
				return;
			clearInterval(currentThreadID);
			currentThreadID = setInterval(moveDown, 20);
			break;
		default:
	}
}

dojo.addOnLoad(init);