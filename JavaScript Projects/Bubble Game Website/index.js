let timer = 6;
let score = 0;
let hitRn = 0;
function makeBubbles(){

    let clutter = '';

    for(let i = 1; i<=70; i++){
        let rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`
    }

document.querySelector('#pbtm').innerHTML = clutter

}

function runTimer(){
    let timerint = setInterval(() => {
        if(timer > 0){
            timer--
            document.querySelector('#timerval').textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}

function getNewHit(){
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = hitRn;
}

function increaseScore(){
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

document.querySelector('#pbtm').addEventListener('click', function(dets){
    let clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitRn){
        increaseScore();
        makeBubbles();
        getNewHit();
    }
});

runTimer();

makeBubbles();

getNewHit();