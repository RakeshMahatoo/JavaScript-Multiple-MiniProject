const colorPicker = document.getElementById('colorPicker');
const canvasColor = document.getElementById('canvasColor');
const fontSize = document.getElementById('fontPicker'); // fixed
const canvas = document.getElementById('myCanvas');

const clearButton = document.getElementById('clearButton');
const saveButton = document.getElementById('saveButton');
const retrieveButton = document.getElementById('retrieveButton'); // fixed

const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Default settings
ctx.strokeStyle = "#000000"; // black pen
ctx.lineWidth = 5;

// Text color picker (pen color)
colorPicker.addEventListener('change', (e) => {
    ctx.strokeStyle = e.target.value;
});

// Background color picker
canvasColor.addEventListener('change', (e) => {
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// Font size (pen thickness)
fontSize.addEventListener('change', (e) => {
    ctx.lineWidth = e.target.value;
});

// Start drawing
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    lastX = event.offsetX;
    lastY = event.offsetY;
});

// Drawing while moving
canvas.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        ctx.beginPath(); // fixed
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        lastX = event.offsetX;
        lastY = event.offsetY;
    }
});

// Stop drawing
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

// Clear canvas
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Save & download signature
saveButton.addEventListener('click', () => {
    localStorage.setItem('canvasContents', canvas.toDataURL());
    let link = document.createElement('a');
    link.download = 'my-signature.png';
    link.href = canvas.toDataURL();
    link.click();
});

// Retrieve saved signature
retrieveButton.addEventListener('click', () => {
    let savedCanvas = localStorage.getItem('canvasContents');
    if (savedCanvas) {
        let img = new Image();
        img.src = savedCanvas;
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
        };
    }
});
