$(document).ready(function () {
    $('.my_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ],
    });
})

function showMenu(amal) {
    switch (amal) {
        case "show" :
            document.getElementById('top-menu').classList.add("showMenu")
            break
        case "hide" :
            document.getElementById('top-menu').classList.remove("showMenu")
    }
}

window.addEventListener('scroll', () => {
    document.getElementById('top-menu').classList.remove("showMenu")

    if(scrollY>=100) {
        document.getElementById('header').classList.add("header-shadow");
    }else {
        document.getElementById('header').classList.remove("header-shadow");
    }

})




