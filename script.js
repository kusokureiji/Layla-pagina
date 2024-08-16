document.getElementById('heart').addEventListener('click', function() {
    const card = document.getElementById('card');
    const heart = document.getElementById('heart');
    const song = document.getElementById('song');

    heart.style.display = 'none';
    card.style.transform = 'rotateY(180deg)';
    song.play();

    for (let i = 0; i < 10; i++) {
        createFloatingHeart();
    }
});

document.body.addEventListener('click', function(event) {
    if (event.target !== document.getElementById('heart')) {
        createInteractiveHeart(event.clientX, event.clientY);
    }
});

function createFloatingHeart() {
    const envelope = document.querySelector('.envelope');
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.classList.add('floating-heart');
    heart.style.left = `${Math.random() * 100}%`;
    envelope.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}

function createInteractiveHeart(x, y) {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.classList.add('floating-heart', 'colored-heart');
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}
