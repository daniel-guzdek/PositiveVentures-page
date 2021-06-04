const nav = document.querySelector('.navigation');
const ulContainer = document.querySelector('.menu__item-list');
const menuItem = document.querySelector('.menu__item');
const activeClass = document.querySelector('.navigation.active');
const burger = document.querySelector('.burger');
const header = document.querySelector('header');
const main = document.querySelector('main');
const slogan = document.querySelector('.slogan');
const managers = document.querySelector('.managers');
const experience = document.querySelector('.experience');
const work = document.querySelector('.work');
const pricing = document.querySelector('.pricing');
const contact = document.querySelector('.contact');

// handling loader
window.addEventListener('load', () => {
    const preload = document.querySelector('.loader');
    preload.classList.add('loader-finish');
})

// set navigation after scroll
window.addEventListener('scroll', function(){
    nav.classList.toggle('sticky', window.scrollY > 0);
    burger.classList.toggle('sticky', window.scrollY > 0);
    menuItem.classList.toggle('sticky', window.scrollY > 0);
})

// scroll to sections
$('.link_about').on('click', function () {
    $('body, html').animate({
        scrollTop: $('main').offset().top + 70
    }, 500)
})

$('.link_team').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.managers').offset().top
    }, 500)
})

$('.link_work').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.work').offset().top
    }, 500)
})

$('.link_experience').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.experience').offset().top - 50
    }, 500)
})

$('.link_contact').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contact').offset().top
    }, 500)
})

//BURGER - for @media (max-width: 768px)
const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const ulContainer = document.querySelector('.menu__item-list');
    const navLinks = document.querySelectorAll('.menu__item');
    
    
    burger.addEventListener('click', () => {
        //Toggle Nav
        ulContainer.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `ulConteinerFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        });
        //Burger Animation
        burger.classList.toggle('burgerAnimation'); 
    });
}

navSlide();

// showing hero image-title after scroll
const $scrollValue = $(this).scrollTop();
const $windowHeight = $(window).height();
const $imageTitleFromTop = $('.hero__image-title').offset().top;
const $imageTitleHeight = $('.hero__image-title').outerHeight(true);

function showHeroImageTitle() {
    if ($scrollValue > $imageTitleFromTop + $imageTitleHeight - $windowHeight) {
        $('.hero__image-title').addClass('show-hero-image-title');
    }
}
// showing ,,PV" logo
const $heroBgImage1FromTop = $('.hero__background-image-1').offset().top;
const $heroBgImage1Height = $('.hero__background-image-1').outerHeight(true);

function showHeroImageTitle() {
    if ($scrollValue > $heroBgImage1FromTop - $heroBgImage1Height / 3 - $windowHeight) {
        $('.hero__background-image-1').addClass('show-hero-bg-image-1');
    }
}

function showImmediatelyHeroElements() {
    $('.hero__image-title').addClass('show-hero-image-title');
    $('.hero__background-image-1').addClass('show-hero-bg-image-1');
}

$(document).on('DOMContentLoaded', (e) => {
    if ($windowHeight < $imageTitleFromTop) {
        $('.hero__image-title').addClass('show-hero-image-title'); 
    } else {
        showImmediatelyHeroElements();
    }
})
$(document).on('scroll', showHeroImageTitle);

// show hero main-subtitle after scroll
function showHeroSubtitle() {
    const $scrollValue = $(this).scrollTop();
    const $windowHeight = $(window).height();
    const $heroSloganFromTop = $('.hero__slogan').offset().top;
    const $heroSloganHeight = $('.hero__slogan').outerHeight(true);

    if($scrollValue > $heroSloganFromTop + $heroSloganHeight - $windowHeight) {
        $('.hero__slogan').addClass('show-hero-slogan');
    }
}
$(document).on('scroll', showHeroSubtitle);

// typing effect in hero description
const heroDescription = document.querySelector('.hero__description');
const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sed perferendis reprehenderit optio ratione architecto.'

let indexText = 0;
const time = 80;

const addLetter = () => {
    heroDescription.textContent += text[indexText];
    indexText++;

    if(indexText === text.length) {
        heroDescription.textContent = '';
        indexText = 0;
        clearInterval(indexTyping);
        setTimeout(() => {
            heroDescription.classList.add('show-description');
            heroDescription.textContent = text;
        }, 1000);
    }
}
const indexTyping = setInterval(addLetter, time);

//SECTION 'WORK' - showing content
function showHowWeWork() {
    const $scrollValue = $(this).scrollTop();
    const $windowHeight = $(window).height();

    const $work_panels = $('.work__panels-conteiner').offset().top;
    const $work_panelsHeight = $('.work__panels-conteiner').outerHeight(true);
   
    if ($scrollValue > $work_panels - $work_panelsHeight - $windowHeight) {
        $('.work__panels-conteiner').addClass('show-work');
    }
}

$(document).on('scroll', showHowWeWork);

// CONTACT FORM VALIDATION  
const form = document.querySelector('.contact__form');
const inputName = document.querySelector('.form__input-name');
const inputSurname = document.querySelector('.form__input-surname');
const inputEmail = document.querySelector('.form__input-email');
const textarea = document.querySelector('.form__textarea');
const btnSubmit = document.querySelector('.btn-submit');

// errors places 
const inputNameError = document.querySelector('.inputNameError');
const inputSurnameError = document.querySelector('.inputSurnameError');
const inputEmailError = document.querySelector('.inputEmailError');
const textareaError = document.querySelector('.textareaError');

// general message after validation
const generalMessage = document.querySelector('.general-message');

let errorMessage = false;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // checking for input ,,Name"
    if(inputName.value.length < 2) {
        inputNameError.textContent = 'Sorry, your name must have at least 2 signs';
        errorMessage = true;
        setTimeout(()=> {
            inputNameError.textContent = '';
        }, 5000);
        if(textareaError.textContent != '') {
            return;
        }
    }
    if(inputName.value === '') {
        inputNameError.textContent = 'Please write your name';
        errorMessage = true;
        setTimeout(()=> {
            inputNameError.textContent = '';
        }, 5000);
        if(textareaError.textContent != '') {
            return;
        }
    }
    if(typeof (inputName.value) === "number") {
        inputNameError.textContent = 'The numbers are not allowed';
        errorMessage = true;
        setTimeout(()=> {
            inputNameError.textContent = '';
        }, 5000);
        if(textareaError.textContent != '') {
            return;
        }
    }

    // checking for input ,,Surname"
    if(inputSurname.value.length < 2) {
        inputSurnameError.textContent = 'Sorry, your surname must have at least 2 signs';
        errorMessage = true;
        setTimeout(()=> {
            inputSurnameError.textContent = '';
        }, 5000);
        if(textareaError.textContent != '') {
            return;
        }
    }
    if(inputSurname.value === '') {
        inputSurnameError.textContent = 'Please write your surname';
        errorMessage = true;
        setTimeout(()=> {
            inputSurnameError.textContent = '';
        }, 5000);
        if(textareaError.textContent != '') {
            return;
        }
    }

    // checking for input ,,E-mail"
    if(!inputEmail.value.includes('@')) {
        inputEmailError.textContent = 'Sorry, your e-mail must include @ sign';
        errorMessage = true;
        setTimeout(()=> {
            inputEmailError.textContent = '';
        }, 5000);
        if(textareaError.textContent != '') {
            return;
        }
    }
    if(inputEmail.value === '') {
        inputEmailError.textContent = 'Please write your e-mail adress';
        errorMessage = true;
        setTimeout(()=> {
            inputEmailError.textContent = '';
        }, 5000);
        if(textareaError.textContent != '') {
            return;
        }
    }

    // checking for textarea
    if(textarea.value === '') {
        textareaError.textContent = 'Your message is empty. Please fill in the text area.';
        errorMessage = true;
        setTimeout(() => {
            textareaError.textContent = '';
        }, 5000);
        if(textareaError.textContent != '') {
            return;
        }
    } else {
        errorMessage = false;
    }

    if(!errorMessage) {
        inputName.value = '';
        inputSurname.value = '';
        inputEmail.value = '';
        textarea.value = '';
        generalMessage.textContent = 'Your message has been sent';
        setTimeout(() => {
            generalMessage.textContent = '';
        }, 5000);
    } 
})