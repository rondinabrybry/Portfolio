var swiper = new swiper('.slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert:false,
    },

    pagination:{
        el: '.slider-pagination',
        clickable:true,
    }
});