const dino = document.querySelector(".dino");
let isJumping = false;
const background = document.querySelector(".background");
let position = 0;
document.addEventListener('keydown', handleKeyUp);
createCactus();

function handleKeyUp(event) {
    if(event.keyCode === 32) {
        if(!isJumping)jump()
    }
}

function jump () {
    isJumping = true;

    let upInterval = setInterval(()=> {
        if (position >= 200) {
            clearInterval(upInterval);
            let downInterval = setInterval(()=> {
                if (position <= 20) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                position -= 20;
                dino.style.bottom = position + 'px';
            },20);
        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
        
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + 'px';
    background.appendChild(cactus);
    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if( cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // Game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="gameover">Game Over</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);
    setTimeout(createCactus, randomTime);
}