







function saveText() {
    const textInput = document.getElementById('textInput').value;
    localStorage.setItem('savedText', textInput);
    alert('Text Saved!');
    document.getElementById('textInput').value = '';
}


function retrieveText() {
    const savedText = localStorage.getItem('savedText');
    document.getElementById('output').innerText = savedText ? savedText : 'no text found';
}
