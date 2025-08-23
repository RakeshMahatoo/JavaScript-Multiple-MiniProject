let button = document.getElementById("clickButton");
let quote = document.getElementById('para');


let apiurl = "https://api.quotable.io/random";
console.log(apiurl);

function getQuote(){
    fetch(apiurl)
    .then(response => response.json())
    .then(data=> {
        console.log(data.content);
        quote.innerText = data.content;


        
    })
}


button.addEventListener("click", getQuote);