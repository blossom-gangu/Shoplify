const header = document.querySelector('header');

window.addEventListener('scroll',function(){
    header.classList.toggle("sticky",window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('#menu-icon');
    navlist.classList.toggle('open');
};

window.onscroll = () =>{
    menu.classList.remove('#menu-icon');
    navlist.classList.remove('open');
};

const sr = ScrollReveal ({
    distance : '30px',
    duration : 2600, 
    reset: true
});

sr.reveal('.home-text',{delay:280, origin:'bottom'});
sr.reveal('.feature,.cta,.new,.brand,.contact',{delay:200, origin:'bottom'});