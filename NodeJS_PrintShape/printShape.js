module.exports = {

triangle: function(lines)
{
	if(lines === parseInt(lines,10) && lines > 0)
	{
	for (i=0;i<lines-1;i++)
	{
		console.log(`${' '.repeat((lines-1)-i)}/${' '.repeat(i*2)}\\`);		
	}
	console.log(`/${'-'.repeat((lines-1)*2)}\\`);
	}
	else throw "Please enter an integer";
},

square: function(lines)
{
	if(lines === parseInt(lines,10) && lines > 1){
	for (i=0;i<lines;i++){
		if(i == 0){
			console.log(`|${'-'.repeat(lines)}|`);
		}
		if(i != 0 && i != lines-1){
			console.log(`|${' '.repeat(lines)}|`);
		}
		if(i == lines-1){
			console.log(`|${'-'.repeat(lines)}|` );
		}
	}
	}
	else throw "Please enter an integer greater than equal to 2";
},

rhombus:(lines) =>
{
	if(lines === parseInt(lines,10) && lines > 1 && lines%2 == 0){
		var linesRhombus = [];
		linesRhombus[0] = (`${' '.repeat(lines-1)}/-\\`);
		linesRhombus[lines-1] = (`${' '.repeat(lines-1)}\\-/`);
		for (i=1;i<=(lines-2)/2;i++){
			linesRhombus[i] = (`${' '.repeat((lines-1)-i)}/${' '.repeat((i*2)+1)}\\`);
			linesRhombus[lines-i-1] = (`${' '.repeat((lines-1)-i)}\\${' '.repeat((i*2)+1)}/`);		
		}
		for(j=0; j<linesRhombus.length; j++){
			console.log(linesRhombus[j]);
		}
	}
	else throw "Please enter an even number";
},

};

 