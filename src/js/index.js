const keys = document.querySelectorAll('.key');

function playNote(event) {
    const keyCode = getKeyCode(event);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    const cantFoundKey = !key;

    if (cantFoundKey) return;

    addPlayingClass(key);
    playAudio(keyCode);
}

function getKeyCode(event) {
    let keyCode;

    const isClickEvent = event.type === 'click';

    if (isClickEvent) {
        keyCode = event.target.dataset.key;
    } else {
        keyCode = event.keyCode;
    }

    return keyCode;
}

function addPlayingClass(key) {
    key.classList.add('playing');
}

function removePlayingClass(event) {
    event.target.classList.remove('playing');
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);

    audio.currentTime = 0;
    audio.play();
}

function registerEvents() {
    keys.forEach((key) => {
        key.addEventListener('click', playNote);
        key.addEventListener('transitionend', removePlayingClass);
    });

    window.addEventListener('keydown', playNote);
}

window.addEventListener('load', registerEvents);
