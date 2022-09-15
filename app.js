const simonBtns = document.querySelectorAll('.simonBtn button');
const startBtn = document.querySelector('.start');
const scoreContainer = document.querySelector('.score');
const btnContainer = document.querySelectorAll('.simonBtn');
let score = 0;



startBtn.addEventListener('click', () => {
    score++; scoreContainer.innerText = score;
    const result = drawSeq();
    displaySeq([...result]);
    clickPhase([...result])
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

function displaySeq(arr) {


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
    let counter = 0;
    simonBtns.forEach(e => e.addEventListener('click', () => {
        let clickedEl = e.parentNode.dataset.color;
        if(clickedEl !== arr[counter++] )  {//if user clicked not right
            roundResult(false)
        }  else {
            roundResult(true)
        }
        
    }))
 
}

function roundResult(bol) {
    const textInformation = document.querySelector('.text');
    textInformation.classList.remove('lostInfo');
    textInformation.classList.remove('winInfo');
    
    if(bol === false) {
        textInformation.classList.add('lostInfo');
        textInformation.textContent = 'LOST!!' ;
    } else if(bol === true) {
        textInformation.classList.add('winInfo');
        textInformation.textContent = 'GOOD' ;
    }
}

