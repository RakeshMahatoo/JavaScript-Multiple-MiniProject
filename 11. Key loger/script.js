let start = document.getElementById('start1');
let stop = document.getElementById('stop1');

let firstkey = document.getElementById('1');
let secondkey = document.getElementById('2');

console.log(firstkey, secondkey);
console.log(start, stop);

let initialStart = false;


 function startButton(){
    
    document.addEventListener('keydown', (event)=>{
        let pressedKey = event.key;
        console.log(pressedKey);
        firstkey.innerText = `KEY: ${pressedKey} pressed down`;
        secondkey.innerText =`key is down`;
        keyRelease();
    })
 }

 function keyRelease(){
    document.addEventListener('keyup', (event)=>{
        let releasedKey = event.key;
        console.log(releasedKey);
        secondkey.innerText = `KEY: ${releasedKey} released`;
        firstkey.innerTExt = `key ${releasedKey} is released`;

    })
 }


start.addEventListener('click', startButton);

stop.addEventListener('click',()=>{
    document.removeEventListener('keydown', startButton);
    document.removeEventListener('keyup', keyRelease);
    firstkey.textContent = "";
    secondkey.textContent = '';
})