// Create more confetti elements
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

// تخصيص الاسم والتاريخ والرسالة تلقائياً من المتغيرات في index.html
window.addEventListener('DOMContentLoaded', function () {
    if (window.birthdayData) {
        var nameEl = document.getElementById('birthdayName');
        var dateEl = document.getElementById('birthdayDate');
        var msgEl = document.getElementById('envelopeMessage');
        if (nameEl) nameEl.textContent = window.birthdayData.name;
        if (dateEl) dateEl.textContent = window.birthdayData.date;
        if (msgEl) msgEl.textContent = window.birthdayData.message;
    }
});

// انفجار الرموز عند المفاجأة
window.addEventListener('DOMContentLoaded', function () {
    var surpriseButton = document.getElementById('surpriseButton');
    var emojiRow = document.getElementById('emojiRow');
    var envelopeContainer = document.getElementById('envelopeContainer');
    var envelope = document.getElementById('envelope');
    if (surpriseButton && emojiRow && envelopeContainer && envelope) {
        surpriseButton.addEventListener('click', function () {
            // انفجار الرموز
            emojiRow.classList.add('explode');
            setTimeout(function () {
                emojiRow.classList.add('hide');
            }, 1200);
            // إظهار الظرف
            envelopeContainer.style.display = 'flex';
            setTimeout(function () {
                envelope.classList.add('open');
            }, 400);
            envelopeContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            surpriseButton.style.display = 'none';
        });
    }
});

window.birthdayData = {
    name: 'Shatha',
    date: '2025-06-18',
    message: 'Baby في يومك المميز أتمنى لك سنة مليئة بالسعادة ❤️'
};

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

document.addEventListener('DOMContentLoaded', function() {
    var surpriseBtn = document.getElementById('surpriseButton');
    var congratsMsg = document.getElementById('congratsMessage');
    var cakeImg = document.getElementById('cakeImage');
    var scPlayer = document.getElementById('sc-player');
    var scWidget = null;

    if (surpriseBtn) {
        surpriseBtn.onclick = function() {
            // إظهار العبارة مع تأثير
            congratsMsg.style.display = 'block';
            setTimeout(function() {
                congratsMsg.classList.add('show');
                if (cakeImg) {
                    cakeImg.style.display = 'block';
                }
            }, 10);

            // تشغيل الأغنية
            if (window.SC && window.SC.Widget) {
                if (!scWidget) scWidget = SC.Widget(scPlayer);
                scWidget.play();
            } else {
                var script = document.createElement('script');
                script.src = 'https://w.soundcloud.com/player/api.js';
                script.onload = function() {
                    scWidget = window.SC.Widget(scPlayer);
                    scWidget.play();
                };
                document.body.appendChild(script);
            }
        };
    }
}); 
