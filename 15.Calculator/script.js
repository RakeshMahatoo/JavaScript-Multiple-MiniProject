let input = document.getElementById("input");
let button = document.querySelectorAll("button");


button.forEach((element)=>{
    element.addEventListener("click", (e)=>{
        let evalue = e.target.innerText;
        console.log("evalue is", evalue);
        console.log(evalue);
        if(evalue === "C"){
           input.innerText = "";
        }
        else if(evalue === "="){
            input.innerText = eval(input.innerText);
        }
        else if(evalue === "<"){
            input.innerText = input.innerText.slice(0, -1);
        }
        else{
            input.innerText += evalue;
        }
        console.log("what is the value of input", input.innerText);
    })
})