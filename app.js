const simonBtns = document.querySelectorAll('.simonBtn button');
const simonBtnContainer = document.querySelectorAll('.simonBtn');

simonBtns.forEach(e => e.addEventListener('click', () => {
    clickAnimation(e);
}))

function clickAnimation(item) {
    console.log(item)
    simonBtnContainer[item].classList.add('clicked')
}