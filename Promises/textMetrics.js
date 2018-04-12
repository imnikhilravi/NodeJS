module.exports = {
	
simplify: text =>{
	if(typeof text == 'string' && text.length > 0){
		simplifytext = text.toLowerCase().replace(/\s+/g, ' ').trim().replace(/[^a-zA-Z0-9 ]/g, "").replace(/ +/g, ' '); 
		return simplifytext;
	}
	else throw "Enter a valid string";
},
//const simplifiedText = simplify("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23");
	
createMetrics: text => {
	if(typeof text == 'string' && text.length > 0){
		let totalLetters = text.replace(/ /g,"").length;
		let totalWords = text.replace(/\s+/g, ' ').split(' ').length;
		let avgLen = (totalLetters)/totalWords;
		let split = text.replace(/\s+/g, ' ').split(" ");
		WordOccurences = {};
		for (let x=0; x<split.length; x++){
			if(WordOccurences[split[x]]===undefined){
				WordOccurences[split[x]]=1;
			}else{
				WordOccurences[split[x]]++;
			}
		}
		var longWordsArray = text.match(/[\w0-9]{6,}/gi);
		if(longWordsArray == null){
			longWords = 0
		}else{
			longWords = longWordsArray.length;
		}
		let uniqueWords = Object.keys(WordOccurences).length;
		//console.log(`Total Letters: ${totalLetters} \nTotal words: ${totalWords} \nAverage Length: ${avgLen} \n Long words: ${longWords} \n Word Occurences: ${WordOccurences} \n Unique Words: ${uniqueWords}`);
		return {"Total Letters": totalLetters, "total Words": totalWords, "Average Length": avgLen, "Long Words": longWords, "Unique Words": uniqueWords, "Word Occurences": WordOccurences}
	}
	else throw "Enter a valid string";
},
};
//createMetrics(simplifiedText);
