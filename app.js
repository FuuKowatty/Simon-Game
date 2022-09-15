const simonBtns = document.querySelectorAll('.simonBtn button');
const startBtn = document.querySelector('.start');
const scoreContainer = document.querySelector('.score');
const btnContainer = document.querySelectorAll('.simonBtn');
let score = 0;

simonBtns.forEach(e => e.addEventListener('click', () => {
    clickAnimation(e.parentNode);

    return e.parentNode
}))


startBtn.addEventListener('click', () => {
    score++; scoreContainer.innerText = score;
    const result = drawSeq();
    displaySeq(result);
    clickPhase(result)
})

function clickAnimation(parentItem) {
    parentItem.classList.add('clicked');
    setTimeout( () => {parentItem.classList.remove('clicked')}, 800)
    
}

function drawSeq() {
    let result = []
    const Simon = {
        1: 'yellow',
        2: 'red',
        3: 'blue',
        4: 'green'
    }

    for(let i=0; i<score;i++){
        result.push( Simon[ Math.floor(Math.random() * 4) + 1 ] );
    }

    return result;
}

function displaySeq(result) {

    let arr = result;
    setInterval( () => {
        if(arr.length === 0)  clearInterval();
        let chose = arr.shift();
        btnContainer.forEach(e => {
            let trigger = e.dataset.color;
            if(trigger === chose ) {
                clickAnimation(e)
            }
        })
    }, 1000)
}

function clickPhase(arr) {
    
}