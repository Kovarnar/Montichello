document.addEventListener('DOMContentLoaded', () => {
    const HEADER = document.querySelector('.header');
    const MENU_BUTTON = HEADER.querySelector('.header__button');
    MENU_BUTTON.addEventListener('click', () => {
        HEADER.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });


    const CONTACT = HEADER.querySelector('.header__social');
    CONTACT.addEventListener('click', () => {
        HEADER.classList.remove('active');
        document.body.classList.remove('no-scroll');
    })


    const MENU_LINK = document.querySelectorAll('a[href^="#"]');
    MENU_LINK.forEach(item => item.addEventListener('click', function(e) {
        e.preventDefault();
        const ID = item.getAttribute('href').slice(1);
        document.getElementById(ID).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
        HEADER.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }));


    const DOWN = document.querySelector('.hero__down');
    DOWN.addEventListener('click', () => {
        const  PROJECTS = document.querySelector('.projects');
        PROJECTS.scrollIntoView({
            behavior: 'smooth'
        });
    });


    $('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
	});


    const swiper_HERO = new Swiper('.hero__slider', {
        directMion: 'vertical',
        slidesPerView: 1,
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    const swiper_NEWS = new Swiper('.news__swiper', {
        loop: true,
        loopeSlides: 3,
        spaceBetween: 30,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            280:{
                slidesPerView: 1,
            },
            768:{
                slidesPerView: 2,
            },
            1200:{
                slidesPerView: 3,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });


    const FORM = document.querySelector('.contact__form'),
        INPUTS = FORM.querySelectorAll('.contact__form-input'),
        EMAIL = FORM.querySelector('.contact__form-input[type="email"]');

    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validateCountry(country) {
        let re = new RegExp('.co$');
        return re.test(String(country).toLocaleLowerCase());
    }

    FORM.onsubmit = function() {
        let emailVal = EMAIL.value,
            emptyInputs = Array.from(FORM).filter(input => input.value === '');
        INPUTS.forEach(function(input) {
            (input.value === '') ? input.classList.add('error') : input.classList.remove('error');
        });
        if (emptyInputs.length !==0) return false;
        if(!validateEmail(emailVal) || validateCountry(emailVal)) {
            EMAIL.classList.add('error');
            return false;
        } else EMAIL.classList.remove('error');
    };



});

function initMap() {
    const CENTER = { lat: 40.66269967882884, lng: -73.89080823791476};
    const   SVG_MAEKER = {
        url: 'img/pin-map.svg'
    }
    const MAP = new google.maps.Map(document.getElementById("map"), {
        center: CENTER,
        zoom: 13,
    });
    const   MARKER = new google.maps.Marker({
        position: { lat: 40.677477470289496, lng: -73.90631677431017 },
        map: MAP,
        icon: SVG_MAEKER,
        opacity: 0.7
    });
}