function showMessage() {
    const cats = document.querySelectorAll('.cat');
    const specialMessage1 = document.getElementById('special-message-1');
    const recoveryMessage = document.getElementById('recovery-message');
    const specialMessage2 = document.getElementById('special-message-2');
    const music = document.getElementById('background-music');

    // Exibe os gatos
    cats.forEach(cat => {
        cat.classList.remove('hidden');
    });

   
    specialMessage1.classList.remove('hidden');
    recoveryMessage.classList.remove('hidden');
    specialMessage2.classList.remove('hidden');

    // Toca a música
    music.play();
}
