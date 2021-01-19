/*======== SHOW MENU =======*/

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', function(){
            nav.classList.toggle('show-menu');
        });
    }
}

showMenu('nav-toggle','nav-menu');

/*======== REMOVE MENU Mobile ======= */

const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=> n.addEventListener('click', linkAction));


/*====== SCROLL SECTION ACTIVE LINK ======= */

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active-link');
        }
        else{
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/* ===== CHANGE BACKGROUND HEADER ======= */

function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY > 200){
        nav.classList.add('scroll-header'); 
    }
    else{
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/* ==== Show scroll top==== */

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560){
        scrollTop.classList.add('scroll-top');
    }
    else{
        scrollTop.classList.remove('scroll-top');
    }
}

window.addEventListener('scroll', scrollTop);

/* ============= Dark -light theme =========*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon':'bx-sun';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedTheme === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

/*============ SCROLL REVAL ANIMATION ============= */

const sr = ScrollReveal({
    origin : 'top',
    distance: '30px',
    duration: 2000,
    reset : true
});

sr.reveal('.home_data,.home_img,.about_data, .about_img,'+
'.services_content, .menu_content, .app_data, .app_img, .contact_data, .contact_button,'+
'.footer_content', {
    interval: 200
})