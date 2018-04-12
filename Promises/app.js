const fs = require("fs");
const fileData = require("./fileData");
const textMetrics = require("./textMetrics");

async function getStats(filePath){
	try{
	let jsonPath = filePath.substring(0, filePath.length-3)+"result.json";
		if (!fs.existsSync(jsonPath)){
			let debugFile = filePath.substring(0, filePath.length-3)+"debug.txt";
			let data = await fileData.getFileAsString(filePath);
			let simplifytext = textMetrics.simplify(data);
			let flag = await fileData.saveStringToFile(debugFile, simplifytext);
			if (flag)
			{
				let jsonObj = textMetrics.createMetrics(simplifytext);
				await fileData.saveJSONToFile(jsonPath,jsonObj);
				console.log(jsonObj);
			}
		}
		else{
			console.log(await fileData.getFileAsJSON(jsonPath));
		}
	}catch(err) {
			console.log(err);
	}
}

getStats("chapter1.txt");
getStats("chapter2.txt");
getStats("chapter3.txt");


