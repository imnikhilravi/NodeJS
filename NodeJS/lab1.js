function sumOfSquares(x, y, z)
{ 
	
	try {
        if(isNaN(x) || isNaN(y) || isNaN(z)) throw "not a number";
		if(x == undefined || y == undefined || z == undefined) throw "undefined";
		var sum = Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2);
		return sum;
    }
    catch(e) {
       throw e;
    }
}
try{
	console.log(sumOfSquares(3, 6, 8));
}catch(e){
	console.log("Input is " + e);
}




function sayHelloTo(firstName, lastName, title){	
	try{
	if(firstName == "" || lastName == "" || title == "") throw "Invalid input";
	if(firstName == undefined && lastName == undefined && title == undefined) throw "Invalid input";
	if (lastName == undefined && title == undefined)
	{
		return `Hello ${firstName}`;
	}
	else if(title == undefined)
	{
		return `Hello, ${firstName} ${lastName}! I hope you are having a good day!`;
	}
	else
	{
		return `Hello, ${title}. ${firstName} ${lastName}! Have a good evening!`;
	}
}catch(e){
	throw e;
}
}
try{
console.log(sayHelloTo("Nikhil","Ravi","Mr"));
}
catch(e){
console.log(e);
}




function cupsOfCoffee(Cups){
	try { 
        
        if(isNaN(Cups)) throw "not a number";
		if(!Number.isInteger(Cups)) throw "not a integer";
        if(Cups < 1)    throw "too low";
        if(Cups > 99)   throw "too high";
	if(Cups > 2)
	{
		console.log(`${Cups} cups of coffee on the desk! ${Cups} cups of coffee!`);
		console.log(`Pick one up, drink the cup, ${Cups-1} cups of coffee on the desk!`);
	}
	else if(Cups == 2)
	{
		console.log(`${Cups} cups of coffee on the desk! ${Cups} cups of coffee!`);
		console.log(`Pick one up, drink the cup, ${Cups-1} cup of coffee on the desk!`);
	}
	else
	{
		console.log(`${Cups} cup of coffee on the desk! ${Cups} cup of coffee!`)
		console.log(`Pick one up, drink the cup, No more coffee left on the desk!`);
		return;
	}
	cupsOfCoffee(Cups-1);
	}catch(e) {
        throw e;
	}
}
try{
cupsOfCoffee(40);
}catch(e){
	console.log(" Input is " +e);
}





function occurrencesOfSubstring(string, match) 
{
	try{
		if(typeof string != 'string' || typeof match != 'string' || string == "" || match == "") throw "invalid input";			
	var len = string.length;
	var count = 0;
	for(i=0; i<len-(match.length)+1; i++){
		if(string.substring(i,i+(match.length)) == match){
			count++;
		}
	}
	}catch(e){
		throw e;
	}
	return count;
}
try{
console.log(occurrencesOfSubstring("Web programming lab!", "a"));
}catch(e){
	console.log(e);
}



function randomizeSentences(para)
{
	try{
		if(typeof para != 'string' || para == "") throw "invalid input";	
	var len = para.length;
	var startIndex = 0;
	var myArray = [];
	var count = 0;
	for (i=0; i< len; i++){ 
	 if(para.charAt(i) == '!'  || (para.charAt(i) == '.')|| (para.charAt(i) == '?') ){
			myArray[count] = para.substring(startIndex, i+1);
			count++;
			startIndex = i + 1;
		}
	}
	var randomArr = [];
	var randomArrCount = 0;
	for(i=0;i<myArray.length;){
		var index = Math.floor(Math.random()*myArray.length);
		randomArr[randomArrCount] = myArray[index];
		myArray.splice(index, 1);
		randomArrCount++;
	}
	return randomArr.toString();
	}catch(e){
		throw e;
	}
	
}	 
try{
console.log(randomizeSentences("Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations."));
}
catch(e){
	console.log(e);
}
