// Fonction flêche Previous

function previous() {

    const widthSlider = document.querySelector('.diapo').offsetWidth;
    const sliderContent = document.querySelector('.slider_content');
    sliderContent.scrollLeft -= widthSlider;
    const scrollLeft = sliderContent.scrollLeft
    const itemsSlider = sliderContent.querySelectorAll('.slider_content_items');

    if(scrollLeft == 0) {
        sliderContent.scrollLeft = widthSlider * (itemsSlider.length - 1);
    }

}

// Fonction flêche Next

function next() {

    const widthSlider = document.querySelector('.diapo').offsetWidth;
    const sliderContent = document.querySelector('.slider_content');
    sliderContent.scrollLeft += widthSlider;
    const scrollLeft = sliderContent.scrollLeft
    const itemsSlider = sliderContent.querySelectorAll('.slider_content_items');

    if(scrollLeft == widthSlider * (itemsSlider.length - 1)) {
        sliderContent.scrollLeft = 0;
    }

}