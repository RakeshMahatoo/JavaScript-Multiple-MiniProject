

// add all document 

const typingText = document.querySelector('.typing-text p');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.time span p');
const mistake = document.querySelector('.mistake span p');
const wpm = document.querySelector('.wpm span p');
const cpm = document.querySelector('.cpm span p');
const btn = document.querySelector('button');

// load paragraph() - paragraph array - randomindex - create forloop for each character using span and print that into the p - color active character (add active classList. add("active")) color add in css- keydown krne pe .focus() input and inputfield paragraph

function loadParagraph(){
    const paragraph = ["Life is a journey filled with challenges, opportunities, and countless moments that shape who we are and who we become."];
    const randomIndex = Math.floor(Math.random()* paragraph.length);
    typingText.innerHTML = "";
    for(const char of paragraph[randomIndex]){
        typingText.innerHTML = typingText.innerHTML + `<span>${char}</span>`;
    }
    typingText.querySelectorAll('span')[0].classList.add('active');
    document.addEventListener('keydown', ()=>{
        input.focus();
         typingText.addEventListener('click', ()=>{
            input.focus();
        });
    });
   
}

// variables
let maxTime = 60;
let charIndex = 0;
let timeLeft = maxTime;
let isTyping = false; // what is the use of this-
let timer;
let mistakes = 0;

// initTyping - select chat and Typechar - if(!isTyping) - timer start and istyping true; - chat[index].innertext === typed chat {chat[index].innerText === correct} else{char[chatIndex].classList.add(incorrect)}

function initTyping(){
    const char = typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);
    if(charIndex < char.length && timeLeft > 0){
        if(!isTyping){
            // console.log(!isTyping);
            timer = setInterval(initTimer, 1000);
            isTyping  = true;
        }
        if(char[charIndex].innerText === typedChar){
            char[charIndex].classList.add('correct');
        }
        else{
            char[charIndex].classList.add('incorrect');
            mistakes++;
        }
        charIndex++;
        char[charIndex].classList.add('active');
        mistake.innerText = mistakes;
        cpm.innerText = charIndex - mistakes;
    }
    else{
        clearInterval(timer);

    }
}


// initTimer function

function initTimer(){
    if(timeLeft > 0){
        timeLeft --;
        time.innerText = timeLeft;
        let wpmVal = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm.innerHTML = wpmVal;
    }
    else{
        clearInterval(timer);
        input.value = "";
    }
    
}

function reset(){
    loadParagraph();
    input.value = "";
    charIndex =0;
    mistakes = 0;
    timeLeft = maxTime;
    isTyping = false;
    clearInterval(timer);
    time.innerText = timeLeft;
    mistake.innerText = mistakes;
    wpm.innerText = 0;
    cpm.innerText = 0;
    loadParagraph();

}


input.addEventListener('input', initTyping);
btn.addEventListener('click',reset);
loadParagraph();