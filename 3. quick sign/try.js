const colorPicker = document.getElementById('colorPicker');
const canvasColor = document.getElementById('canvasColor');
const fonstSize = document.getElementById('fontPicker'); 
const canvas = document.getElementById('myCanvas');
const clearButton = document.getElementById('clearButton');
const saveButton = document.getElementById('saveButton');
const retrieveButton = document.getElementById('retrieveButton');
const save = document.getElementById('savebtn');

//use of getContext('2d') ->
const ctx = canvas.getContext('2d'); 

// set Default settings

let isDrawing = false;
let lastX = 0;
let lastY = 0;

ctx.strokeStyle = "#000000"; // black pen
ctx.lineWidth = 5;

// text color picker

colorPicker.addEventListener('change', (event)=>{
    ctx.strokeStyle = event.target.value;
});

//  background color

canvasColor.addEventListener('change',(event)=>{
    ctx.fillStyle = event.target.value;
    ctx.fillRect(0 , 0, canvas.width, canvas.height);
});

// font size

fonstSize.addEventListener('change',(event)=>{
    ctx.lineWidth = event.target.value;
});

// start drawing

canvas.addEventListener('mousedown',(event)=>{
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
});

//start drawing

canvas.addEventListener('mousemove', (event)=>{
    if(isDrawing){
        ctx.beginPath();
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        lastX = event.offsetX;
        lastY = event.offsetY;
    }
});

// stop drawing
canvas.addEventListener('mouseup',()=>{
    isDrawing= false;
})

//clear canvas

clearButton.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height);
})


//save

save.addEventListener('click',()=>{
    localStorage.setItem('canvasContents', canvas.toDataURL()); 
});

// download button
saveButton.addEventListener('click',()=>{  //download button
    let link = document.createElement('a');
    link.download = 'signature.png';
    link.href = canvas.toDataURL();
    link.click();
});

// retrieve saved signature
retrieveButton.addEventListener('click',()=>{
    let savedCanvas = localStorage.getItem('canvasContents');
    if(savedCanvas){
        let img = new Image();
        img.src = savedCanvas;
        img.onload = ()=>{
            ctx.clearRect(0,0, canvas.width, canvas.height);
            ctx.drawImage(img, 0,0);
        };
    }
})
