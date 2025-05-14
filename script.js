document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const surpriseButton = document.getElementById('surpriseButton');
    const musicButton = document.getElementById('musicButton');
    const emojiContainer = document.getElementById('emojiContainer');
    const scPlayer = document.getElementById('sc-player');
    let player;

    // Initialize SoundCloud player
    window.SC.Widget(scPlayer).bind(window.SC.Widget.Events.READY, function() {
        player = window.SC.Widget(scPlayer);
    });

    // Create confetti elements
    function createConfetti() {
        const colors = ['#ff6f61', '#00ffcc', '#ffcc00', '#ff00ff', '#66ccff'];
        const confettiContainer = document.createElement('div');
        confettiContainer.style.position = 'fixed';
        confettiContainer.style.top = '0';
        confettiContainer.style.left = '0';
        confettiContainer.style.width = '100%';
        confettiContainer.style.height = '100%';
        confettiContainer.style.pointerEvents = 'none';
        confettiContainer.style.zIndex = '1000';
        document.body.appendChild(confettiContainer);

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = -10 + 'px';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.opacity = '1';
            confettiContainer.appendChild(confetti);

            const animation = confetti.animate([
                { transform: `translate(0, 0) rotate(${Math.random() * 360}deg)`, opacity: 1 },
                { transform: `translate(${Math.random() * 200 - 100}px, ${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: 2000 + Math.random() * 1000,
                easing: 'cubic-bezier(.37,0,.63,1)'
            });

            animation.onfinish = () => confetti.remove();
        }

        setTimeout(() => confettiContainer.remove(), 3000);
    }

    // Handle surprise button click
    surpriseButton.addEventListener('click', function() {
        envelopeContainer.style.display = 'flex';
        setTimeout(() => {
            envelope.classList.add('open');
            createConfetti();
            if (player) {
                player.play();
            }
        }, 100);
    });

    // Handle music button click
    musicButton.addEventListener('click', function() {
        if (player) {
            player.toggle();
            musicButton.textContent = player.isPaused() ? 'تشغيل الموسيقى 🎵' : 'إيقاف الموسيقى ⏸️';
        }
    });

    // Add hover effect to emojis
    const emojis = document.querySelectorAll('.emoji');
    emojis.forEach(emoji => {
        emoji.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
        });
        emoji.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});
