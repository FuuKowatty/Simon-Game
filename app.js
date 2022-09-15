const simonBtns = document.querySelectorAll('.simonBtn button');
const simonBtnContainer = document.querySelectorAll('.simonBtn');

simonBtns.forEach(e => e.addEventListener('click', () => {
    clickAnimation(e);
}))

function clickAnimation(item) {
    let parentItem = item.parentNode;
    parentItem.classList.add('clicked');
    setTimeout( () => {parentItem.classList.remove('clicked')}, 400)
    
}