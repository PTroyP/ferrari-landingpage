let init = () => {
    let container = document.getElementsByClassName('jumbo-slider__container')[0],
    slides = document.getElementsByClassName('jumbo-slider__slide'),
    circles = document.getElementsByClassName('jumbo-slider__circle'),
    links = document.getElementsByClassName('jumbo-slider__link'),
    current = 1,
    time = 6000;
    // console.log(`current: ${current}`);

    //add animation class to slide
    slides[0].classList.add('jumbo-slider__slide--active');
    links[current-1].classList.add('jumbo-slider__link--active');
    circles[current-1].classList.add('jumbo-slider__circle--filled');

    //update elipsis and links
    let updateNav = (current) => {
        // console.log(`update current: ${current}`)
        for (let index = 0; index < slides.length; index++) {
            links[index].classList.remove('jumbo-slider__link--active');
            circles[index].classList.remove('jumbo-slider__circle--filled');           
        }

        links[current-1].classList.add('jumbo-slider__link--active');
        circles[current-1].classList.add('jumbo-slider__circle--filled');
    }

    let startSliding = () => {
        setInterval(() => {
            // console.log(`current: ${current}`)

            // remove active class from the first slide and add it to the second, so when it becomes the first slide, it has the active class attached to it
            slides[1].classList.add('jumbo-slider__slide--active');
            slides[0].classList.remove('jumbo-slider__slide--active');

            // clone the first slide and place it in the last slide's place
            container.appendChild(slides[0].cloneNode([true]));
            // remove the first slide after it has been cloned
            container.removeChild(slides[0]);

            // console.log(`current: ${slides.length}`);
            if(current < slides.length) {
                current++
                updateNav(current)
            }
            else {
                current = 1;
                updateNav(current)
            }
            
        }, time)
    }
    startSliding();

}

init();