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

// ... existing code ...
