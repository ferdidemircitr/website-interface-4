const inputs = document.querySelectorAll('.input');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');




hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('change');
    hamburgerMenu.classList.toggle('change');
});

/* input-focus-blur */
function focusFunction(){
    let parent = this.parentNode;
    parent.classList.add('focus');
}
function blurFunction(){
    if(this.value == ''){
        let parent = this.parentNode;
        parent.classList.remove('focus');
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', focusFunction);
    input.addEventListener('blur', blurFunction);
});
