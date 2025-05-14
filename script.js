// Create more confetti elements
function createConfetti() {
    const colors = ['#ff6f61', '#00ffcc', '#ff00ff', '#ffcc00', '#66ccff'];
    const container = document.body;
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(confetti);
    }
}

// Create more balloons
function createBalloons() {
    const emojis = ['🎈', '🎁', '🎉'];
    const container = document.body;
    
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        balloon.style.left = Math.random() * 80 + 10 + '%';
        balloon.style.top = Math.random() * 80 + 10 + '%';
        balloon.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(balloon);
    }
}

// التحكم في مشغل SoundCloud عبر الزر
window.addEventListener('DOMContentLoaded', function () {
    var widgetIframe = document.getElementById('sc-player');
    if (!widgetIframe) return;
    var widget = window.SC && window.SC.Widget ? SC.Widget(widgetIframe) : null;
    var musicButton = document.getElementById('musicButton');
    var isPlaying = false;

    if (widget && musicButton) {
        musicButton.addEventListener('click', function () {
            // تمرير الصفحة إلى مشغل SoundCloud
            widgetIframe.scrollIntoView({ behavior: 'smooth', block: 'center' });
            if (!isPlaying) {
                widget.play();
                musicButton.textContent = 'إيقاف الموسيقى ⏸️';
                isPlaying = true;
            } else {
                widget.pause();
                musicButton.textContent = 'تشغيل الموسيقى 🎵';
                isPlaying = false;
            }
        });

        widget.bind(window.SC.Widget.Events.PAUSE, function () {
            musicButton.textContent = 'تشغيل الموسيقى 🎵';
            isPlaying = false;
        });
        widget.bind(window.SC.Widget.Events.PLAY, function () {
            musicButton.textContent = 'إيقاف الموسيقى ⏸️';
            isPlaying = true;
        });
    }
});

// Add click event to music button
document.addEventListener('DOMContentLoaded', () => {
    const musicButton = document.querySelector('#musicButton');
    const birthdaySong = document.querySelector('#birthdaySong');
    let isPlaying = false;
    
    musicButton.addEventListener('click', () => {
        if (!isPlaying) {
            birthdaySong.play();
            musicButton.textContent = 'إيقاف الموسيقى 🎵';
            isPlaying = true;
        } else {
            birthdaySong.pause();
            musicButton.textContent = 'تشغيل الموسيقى 🎵';
            isPlaying = false;
        }
    });
    
    // Add click event to surprise button
    const surpriseButton = document.querySelector('.btn-control');
    surpriseButton.addEventListener('click', () => {
        createConfetti();
        createBalloons();
    });
    
    // Initialize some confetti and balloons
    createConfetti();
    createBalloons();
});

// إظهار ظرف الرسالة عند الضغط على زر المفاجأة
window.addEventListener('DOMContentLoaded', function () {
    var surpriseButton = document.getElementById('surpriseButton');
    var envelopeContainer = document.getElementById('envelopeContainer');
    var envelope = document.getElementById('envelope');
    if (surpriseButton && envelopeContainer && envelope) {
        surpriseButton.addEventListener('click', function () {
            envelopeContainer.style.display = 'flex';
            setTimeout(function () {
                envelope.classList.add('open');
            }, 100); // لإعطاء وقت للظهور قبل فتح الغطاء
            // تمرير الصفحة للظرف
            envelopeContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // إخفاء زر المفاجأة بعد الفتح
            surpriseButton.style.display = 'none';
        });
    }
}); 
