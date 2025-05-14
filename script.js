// Audio Control
const birthdaySong = document.getElementById('birthdaySong');
const musicButton = document.getElementById('musicButton');

musicButton.addEventListener('click', () => {
    if (birthdaySong.paused) {
        birthdaySong.play();
        musicButton.textContent = 'إيقاف الموسيقى ⏸️';
    } else {
        birthdaySong.pause();
        musicButton.textContent = 'تشغيل الموسيقى 🎵';
    }
});

// Confetti Effect
function createConfetti() {
    const colors = ['#ff6f61', '#00ffcc', '#ff00ff', '#ffcc00', '#66ccff'];
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Balloon Effect
function createBalloon() {
    const emojis = ['🎈', '🎁', '🎉'];
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(balloon);
    
    setTimeout(() => {
        balloon.remove();
    }, 5000);
}

// Create initial decorative elements
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        createConfetti();
        createBalloon();
    }, i * 1000);
}

// Create new elements periodically
setInterval(() => {
    createConfetti();
    createBalloon();
}, 3000);

// Surprise Button Effect
document.querySelector('.btn-control').addEventListener('click', () => {
    // Create a burst of confetti and balloons
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createConfetti();
            createBalloon();
        }, i * 200);
    }
    
    // Play birthday song if not already playing
    if (birthdaySong.paused) {
        birthdaySong.play();
        musicButton.textContent = 'إيقاف الموسيقى ⏸️';
    }
});

// Responsive Design
window.addEventListener('resize', () => {
    // Adjust layout for mobile devices
    if (window.innerWidth <= 768) {
        document.querySelector('.page-preview').style.height = '80vh';
    } else {
        document.querySelector('.page-preview').style.height = '96';
    }
}); 
