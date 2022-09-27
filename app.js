const simonBtns = document.querySelectorAll('.simonBtn button');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.restart');
const scoreContainer = document.querySelector('.score');
const btnContainer = document.querySelectorAll('.simonBtn');
const textInformation = document.querySelector('.text');
const clickMusic = new Audio('clickVoice3.wav');
let score = 0;
let timer = 1;


startBtn.addEventListener('click', startGame);

function startGame() {
    startNextRound();
    const result = drawSeq();
    displaySeq([...result]);
    clickPhase([...result])    
}

function clickAnimation(parentItem) {
    parentItem.classList.add('clicked');
    setTimeout( () => {parentItem.classList.remove('clicked')}, 400)
    
}

function drawSeq() {
    const result = []
    const Simon = {
        1: 'yellow',
        2: 'red',
        3: 'blue',
        4: 'green'
    }

    for(let i=0; i<score+1;i++){
        result.push( Simon[ Math.floor(Math.random() * 4) + 1 ] );
    }

    return result;
}

function displaySeq(arr) {
    const waitInt = 700;

    setInterval( () => {
        if(arr.length === 0)  clearInterval();
        let chose = arr.shift();
        btnContainer.forEach(e => {
            let trigger = e.dataset.color;
            if(trigger === chose ) {
                clickAnimation(e)
            }
        })
    }, waitInt)
    timer = arr.length * waitInt + 750;
}

function clickPhase(arr) {
    let counter = 0;
    setTimeout( () => {
        textInformation.textContent = 'SIMON';
        textInformation.classList.remove('waitInfo');

        simonBtns.forEach(e => e.addEventListener('click', validor) )
        function validor(e) {
            stopAudio()
            clickMusic.play();
            clickAnimation(e.currentTarget.parentNode);
            clickedEl = e.currentTarget.parentNode.dataset.color
            if(clickedEl !== arr[counter] )  {//if user clicked not right
                roundResult(false);
                simonBtns.forEach(e => e.removeEventListener('click', validor))

            }  else if(clickedEl === arr[counter] && counter === arr.length-1) {
                roundResult(true);
                simonBtns.forEach(e => e.removeEventListener('click', validor))
            }
            counter++
        }
    }, timer )
}
 


function roundResult(bol) {

    removeResultInfo()
    
    if(!bol) {
        textInformation.classList.add('lostInfo');
        textInformation.textContent = 'LOST!!' ;
        score = 0; scoreContainer.textContent = score;
        startBtn.classList.add('hidden');

        resetBtn.classList.remove('hidden');
        resetBtn.addEventListener('click', startGame);

    } else if(bol) {
        textInformation.classList.add('winInfo');
        textInformation.textContent = 'GOOD' ;
        score++; scoreContainer.textContent = score;
    }
    startBtn.disabled = false;
}

function startNextRound() {
    
    resetBtn.classList.add('hidden');
    startBtn.classList.remove('hidden');

    textInformation.textContent = "WAIT!!"
    textInformation.classList.remove('lostInfo');
    textInformation.classList.remove('winInfo');
    textInformation.classList.add('waitInfo');

    startBtn.disabled = true;


}

function stopAudio() {
    clickMusic.pause();
    clickMusic.currentTime = 0;
}

function removeResultInfo() {
    textInformation.classList.remove('lostInfo');
    textInformation.classList.remove('winInfo');
}