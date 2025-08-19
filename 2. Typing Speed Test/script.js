const typingText = document.querySelector('.typing-text p');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.time span p');
const mistake = document.querySelector('.mistake span p');
const wpm = document.querySelector('.wpm span p');
const cpm = document.querySelector('.cpm span p');
const btn = document.querySelector('button');

// set value
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;

let mistakes = 0;
let isTyping = false;


function loadParagraph() {
    const paragraph = ["Life is a journey filled with challenges, opportunities, and countless moments that shape who we are and who we become. Each day offers a chance to learn something new, to grow in ways we never imagined, and to connect with people who can inspire and motivate us. Success is not merely the result of hard work but also the willingness to adapt, to embrace change, and to persist even when the road ahead seems uncertain. True happiness lies not in the destination, but in the experiences we gather, the lessons we learn, and the memories we create along the way"];
    const randomIndex = Math.floor(Math.random() * paragraph.length);
    // console.log(randomIndex);
    typingText.innerHTML = "";
    for (const char of paragraph[randomIndex]) {
        // console.log(char);
        typingText.innerHTML += `<span>${char}</span>`;
    }
    typingText.querySelectorAll('span')[0].classList.add('active');
    document.addEventListener('keydown', () => {
        input.focus();
        typingText.addEventListener('click', () => {
            input.focus();
        })
    })
}

// handle user input

function initTyping() {
    const char = typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);
    // console.log(charIndex) // 1 2 3 4
    // console.log(typedChar) // a b c 
    // console.log(char); // it create span tag and it has correct and incorrect

    if (charIndex < char.length && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (char[charIndex].innerText === typedChar) {
            char[charIndex].classList.add('correct');
            // console.log('correct');
        } else {
            char[charIndex].classList.add('incorrect');
            // console.log('incorrect');
            mistakes++;
        }
        charIndex++;
        char[charIndex].classList.add('active');
        mistake.innerText = mistakes;
        cpm.innerText = charIndex - mistakes;


    }
    else {
        clearInterval(timer);
        input.value = "";

    }



}

// manupulate timer and wpmVal speed
function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        time.innerText = timeLeft;
        let wpmVal = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm.innerText = wpmVal;
    }
    else {
        clearInterval(timer);
    }
}


// reset function


function reset() {
    loadParagraph();
    input.value = "";
    charIndex = 0;
    mistakes = 0;
    timeLeft = maxTime;
    time.innerText = timeLeft;
    mistake.innerText = mistakes;
    wpm.innerText = 0;
    cpm.innerText = 0;
    isTyping = false;
    clearInterval(timer);
}
input.addEventListener('input', initTyping);
btn.addEventListener('click', reset);


loadParagraph();



