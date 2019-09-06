// make transitional transparent color on text, while hover on img
let img = document.querySelectorAll('.key-features--col-my');
let  imgHover = document.querySelectorAll('.hover-text');

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('mouseover', () => {
        if (i%2 === 0) {
            imgHover[i].classList.add('img-hov');
        } else {
            imgHover[i].classList.add('img-hov-left');
        }
    })

    img[i].addEventListener('mouseout', () => {
        imgHover[i].classList.remove('img-hov');
        imgHover[i].classList.remove('img-hov-left');
    })
}

// show links, when clicking on menu button
let showNav = document.querySelector('.nav-div').style;

document.querySelector('.header__button').addEventListener('click', () => {
    setTimeout(() => {
    if (showNav.display === 'block') {
        showNav.display = 'none';
    } else {
        showNav.display = 'block';
    } 
}, 400); 
});