let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length; //3

function showSlides() {
    // Correctly loop through each slide ELEMENT and its INDEX
    slides.forEach((slide, index) => {
        // Compare the slide's index with the current slideIndex
        if (index === slideIndex) {
            // If it's the current slide, show it
            slide.style.display = 'block';
          }  else {
            // Otherwise, hide it
            slide.style.display = 'none';
        }
    });
}

function prevSlide() {
    slideIndex--;
    // Add boundary check: if index is less than 0, loop to the last slide
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    console.log(slideIndex<0);
    showSlides();
}

function nextSlide() {
    slideIndex++; //1
    // Add boundary check: if index is at the end, loop to the first slide
    if (slideIndex >= totalSlides) {    // 1>=3
        slideIndex = 0;
    }
    showSlides();
}

// Call showSlides() initially to display the first slide when the page loads
showSlides();