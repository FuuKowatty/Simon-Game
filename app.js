const simonBtns = document.querySelectorAll('.simonBtn button');
const startBtn = document.querySelector('.start');
const scoreContainer = document.querySelector('.score');
let score = 0;

simonBtns.forEach(e => e.addEventListener('click', () => {
    clickAnimation(e);
}))


startBtn.addEventListener('click', () => {
    score++;
    scoreContainer.innerText = score;
    const result = drawSeq();
   
})

function clickAnimation(item) {
    let parentItem = item.parentNode;
    parentItem.classList.add('clicked');
    setTimeout( () => {parentItem.classList.remove('clicked')}, 400)
    
}

function drawSeq() {
    let rounds = 0;
    let result = []
    const Simon = {
        1: 'yellow',
        2: 'red',
        3: 'blue',
        4: 'green'
    }
    while(rounds < score) {
        result.push( Simon[ Math.floor(Math.random() * 4) + 1 ] );
        rounds++
    }

    return result;
}