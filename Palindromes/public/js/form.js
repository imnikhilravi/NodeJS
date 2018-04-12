(function () {
    function pali (str) {
        //if(str === undefined) throw "Must provide an input";
        //if(str === null) throw "Must provide an input";
        if(!str || 0 === str.length ) throw "Must provide an input";
        
        let lowerString = str.toLowerCase().replace(/[_\W]+/g, "");
        console.log(lowerString);
        
        if (!lowerString ||lowerString.length === 0) throw "Must provide atleast one alpha numeric character"; 
        
        let reverseString = lowerString.split('').reverse().join('');  
        if (lowerString === reverseString)
        {
            return true;
        }
        else {
            return false;
        }
    }

    const staticForm = document.getElementById("static-form");

    if(staticForm){
        const strElement = document.getElementById("input");

        const errorContainer = document.getElementById("error-container");
        const errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];

        const resultContainer = document.getElementById("result-container");
        const resultTextElement = resultContainer.getElementsByClassName("text-goes-here")[0];

        staticForm.addEventListener("submit", (event) => {
            event.preventDefault();

            try {
                errorContainer.classList.add("hidden");
                resultContainer.classList.add("hidden");

                const strValue = strElement.value;

                const result = pali(strValue);
                let pal;
                if(result){
                    pal = "Palindrome";
                }else{
                    pal = "Not Palindrome";
                }
                resultTextElement.textContent = "The result is " + pal;
                resultContainer.classList.remove("hidden");
                if(result){
                    console.log("palindrome");
                    paliList();
                }
                else{
                    console.log("not palindrome");
                    nonpaliList();
                }
                
            } catch (e) {
                const message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });

        function paliList(){
            var ul = document.getElementById("dynamic-list1");
            var input = document.getElementById("input");
            var li = document.createElement("li");
            li.setAttribute('id',input.value);
            li.appendChild(document.createTextNode(input.value));
            ul.appendChild(li);
        }

        function nonpaliList(){
            var ul = document.getElementById("dynamic-list2");
            var input = document.getElementById("input");
            var li = document.createElement("li");
            li.setAttribute('id',input.value);
            li.appendChild(document.createTextNode(input.value));
            ul.appendChild(li);
        }
    }

})();