let myDiv = document.getElementById("myDiv");

document.addEventListener('mousemove', (event) => {
    move(event);
});

// const move = (event) => {
//     let x = event.pageX;
//     let y = event.pageY;

//     myDiv.style.left = (x - 100) + 'px';
//     myDiv.style.top = (y - 100) + 'px';
// }


const move = (event) => {
    let x = event.pageX;
    let y = event.pageY;

    myDiv.style.left = (x - 100) + 'px';
    myDiv.style.top = (y - 100) + 'px';
}


