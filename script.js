const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // effect: "fade",
    // effect: "cube",
    // grabCursor: true,
    // cubeEffect: {
    //     shadow: true,
    //     slideShadows: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    // },
    // effect: "flip",
    // grabCursor: true,
    // effect: "cards",
    // grabCursor: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true

    },
    slidesPerView: 3,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    }
});
// const swiperWrapper = document.querySelector('.swiper-wrapper')
const data = [
    {
        img: './images/01.jpg',
    },
    {
        img: './images/02.jpg',
    },
    {
        img: './images/03.jpg',
    },
    {
        img: './images/04.jpg',
    },
    {
        img: './images/05.jpg',
    },
    
];
// data.forEach(el =>{
//     const swiper = document.createElement('div');

//     swiper.classList.add('swiper-slide')
//     swiper.style.backgroundImage = url(`${el.img}`);

//     swiperWrapper.append(swiper)
// })
const swiper_wrapper = document.querySelector('.swiper-wrapper')

data.forEach(el =>{
    const swiper = document.createElement('div');

    swiper.classList.add('swiper-slide') ;
    swiper.style.backgroundImage = `url(${el.img})`;

   

    swiper_wrapper.append(swiper)

    
})



