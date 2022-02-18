//burger menu
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {
    navigation.classList.add('navigation__active')
});

navigationClose.addEventListener('click', () => {
    navigation.classList.remove('navigation__active')
});

//music
try {
    const mute = document.querySelector('.mute__checkbox');
    const audio = new Audio('audio/waterTower.mp3');

    const checkMute = () => {
        if (mute.checked) {
            audio.play().catch(() => {
                mute.checked = false;
            });
        }
        else {
            audio.pause();
        }
    };

    if (mute) {
        setTimeout(checkMute, 2000);
    }

    mute.addEventListener('change', checkMute);
} catch {
    console.log('На этой странице нет музыки');
}

try {
    const sliderThumbs = new Swiper('.slider-thumbs', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 3,
        centeredSlidees: true,
        loopedSlides: 4
    });

    sliderThumbs.on('click', (swiper) => {
        swiper.slideTo(swiper.clickedIndex);
    });

    const sliderMain = new Swiper('.slider-main', {
        loop: true,
        /*thumbs: {
            swiper: sliderThumbs
        },*/
        spaceBetween: 10,
        loopedSlides: 4
    });

    sliderThumbs.controller.control = sliderMain;
    sliderMain.controller.control = sliderThumbs;

    const videos = document.querySelectorAll('video');

    sliderMain.on('slideChange', () => {
        videos.forEach(video => {
            video.pause();
        })
    })

    const pagination = document.querySelector('.pagination');
    const paginationBtn = document.querySelector('.pagination__arrow');

    paginationBtn.addEventListener('click', () => {
        pagination.classList.toggle('pagination__active');
    })
} catch {
    console.log('На этой странице нет слайдеров');
}