// variable set up
let character = document.getElementById('character');
let obstacle = document.getElementById('obstacle');
let counter = 0;


// character jump
function jump(){
    if(character.classList != 'animate') {
        character.classList.add('animate');
    }
    setTimeout(function(){
        character.classList.remove('animate');
    }, 500);
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 32) {
        jump(); 
    }
});


// colision
let checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    if(obstacleLeft<60 && obstacleLeft>40 && characterTop>=130){
        obstacle.style.animation = 'none';
        alert('Game Over! \nScore: ' + Math.floor(counter/100));
        counter = 0;
        obstacle.style.animation = "obstacle 1s infinite linear";
    }
    else {
        counter++;
        document.getElementById('scoreSpan').innerHTML = Math.floor(counter / 100);
    }
}, 10);