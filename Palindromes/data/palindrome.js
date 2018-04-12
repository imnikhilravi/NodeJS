let exportedMethods = {
    pali (str) {
        //if(str === undefined) throw "Must provide an input";
        //if(str === null) throw "Must provide an input";
        if(!str || 0 === str.length ) throw "Must provide an input";

        let lowerString = str.toLowerCase().replace(/[_\W]+/g, "");
        console.log(lowerString);

        if (!lowerString ||lowerString.length === 0) throw "Must provide atleast one alpha numeric character"; 

        let reverseString = lowerString.split('').reverse().join('');  
        if (lowerString === reverseString)
        {
            return "Palindrome";
        }
        else {
            return "not a palindrome";
        }
    }
}

module.exports = exportedMethods;

