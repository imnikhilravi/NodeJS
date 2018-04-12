const bluebird = require("bluebird");
const promise = bluebird.promise;
const fs = bluebird.promisifyAll(require("fs"));



/* async function getFileAsString(path){
		fs.readFileAsync(path, 'utf8', function (err,data) {
		if (data) {
			return data;
		}
		else{
			return err;
			} 
		});
	}
} */

async function getFileAsString(path){
	if(typeof path == 'string' && path.length > 0)
		return await fs.readFileAsync(path, "utf-8")
	else throw "error";
} 

async function getFileAsJSON(path){
	let data = await getFileAsString(path);
	let jsonData = JSON.parse(data);
	if(jsonData)
		return jsonData;
	else throw "error"; 
}
/* async function saveStringToFile(path, text){
	if(typeof path == 'string' && path.length > 0)
	await fs.writeFileAsync(path, text, function(err) {
    if(err) {
        return err;
    }
    console.log("The file was saved!");
}); */

	
async function saveStringToFile(path, text){
	if(typeof path == 'string' && path.length > 0){
		await fs.writeFileAsync(path, text, "utf-8");
		return true;
	}
	else throw "error"; 
} 


async function saveJSONToFile(path, obj){
	if(typeof path == 'string' && path.length > 0){
		let jsonString = JSON.stringify(obj);
		return await saveStringToFile(path, jsonString);
	}
	else throw "error";
}
	


module.exports = { getFileAsString: getFileAsString, getFileAsJSON: getFileAsJSON, saveStringToFile: saveStringToFile, saveJSONToFile: saveJSONToFile}