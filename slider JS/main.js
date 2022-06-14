const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

const move = (next) => {
    document.getElementById("navdot" + counter).classList.remove("active");
    if (next) {
        counter++;
        if (counter >= carouselImages.length - 1);
        console.log(counter)
    } else {
        counter--;
        if (counter <= 0);
        console.log(counter)
    }
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if (counter === 6) {
        return document.getElementById("navdot1").classList.add("active");
    } else if (counter === 0) {
        return document.getElementById("navdot5").classList.add("active");
    }
    document.getElementById("navdot" + counter).classList.add("active");
}

document.querySelectorAll('.navigation span').forEach(dot => {
    dot.addEventListener('click', () => {
        document.getElementById("navdot" + counter).classList.remove("active");
        const dotcount = dot.id[dot.id.length - 1]
        counter = dotcount;
        if (counter >= 0 && counter <= 7) {
            for (var i = 0; i <= dotcount; i++) {
                carouselSlide.style.transition = "transform 0.4s ease-in-out";
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
            }
            document.getElementById("navdot" + counter).classList.add("active");
        }
    })
})

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'last') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'first') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
// Button Listeners

nextBtn.addEventListener('click', () => {
    move(true)
});

prevBtn.addEventListener('click', () => {
    move()
});