
var height = document.getElementById("heightinput").value;
var brickSymbol = document.getElementById("bricksymbol").value;

drawPyramid(height, brickSymbol);

function sliderFunction(val) {
	var heightOutput = document.getElementById("heightoutput");
	let brickSymbol = document.getElementById("bricksymbol").value;

	heightOutput.innerHTML = val;

	heightStr = heightOutput.innerHTML;

	height = parseInt(heightStr);

    drawPyramid(height, brickSymbol);
}

function symbolChanged(val) {
	var brickSymbol = document.getElementById("bricksymbol");

	brickSymbol = val;

	drawPyramid(height, brickSymbol);
}

function drawPyramid(height, symbol) {

	var pyramid = document.getElementById("pyramid");

    pyramid.innerHTML = "";

	// for each row....
	for (var row = 0; row < height; row++) {
		// figure out number of bricks and spaces
		var numBricks = row + 2;
		var numSpaces = height - row - 1;

		// build up a string for this row
		var rowStr = "";
		for (var i = 0; i < numSpaces; i++) {
			rowStr += "\xa0";
		}
		for (var i = 0; i < numBricks; i++) {
			rowStr += symbol;
		}

		var pyramidRow = document.createTextNode(rowStr);

		var pyramidP = document.createElement("div");

		pyramidP.appendChild(pyramidRow);

		pyramid.appendChild(pyramidP);
	}
}
