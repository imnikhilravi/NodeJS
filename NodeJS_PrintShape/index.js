const shape = require("./printShape.js");

shape.triangle(10);
shape.triangle(9);
shape.triangle(8);
shape.triangle(7);
shape.triangle(6);
shape.triangle(5);
shape.triangle(4);
shape.triangle(3);
shape.triangle(2);
shape.triangle(13);

shape.rhombus(2);
shape.rhombus(4);
shape.rhombus(8);
shape.rhombus(6);
shape.rhombus(10);
shape.rhombus(14);
shape.rhombus(12);
shape.rhombus(16);
shape.rhombus(18);
shape.rhombus(20);

shape.square(2);
shape.square(3);
shape.square(4);
shape.square(5);
shape.square(6);
shape.square(7);
shape.square(8);
shape.square(9);
shape.square(10);
shape.square(12);

/* for(i=0; i < noOfShapes; i++){
	let lines = Math.floor(Math.random()* (maxSize - minSize + 1)) + minSize; 
	console.log("Triangle of lines: " +lines);
	shape.triangle(lines);
} */

/* for(i=0; i < noOfShapes + 2; i++){
	let lines = Math.floor(Math.random() * (maxSize - minSize)); 
	console.log("Square of lines: " +lines);
	shape.square(lines);
}

for(i=0; i < noOfShapes; i++){
	let lines = Math.floor(Math.random() * (maxSize - minSize)); 
	console.log("Rhombus of lines: " +lines);
	shape.rhombus(lines);
}	 */
