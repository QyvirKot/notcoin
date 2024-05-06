const body = document.body;
const image = body.querySelector('#coin');
const h1 = body.querySelector('h1');
const totalElement = body.querySelector('#total');
const powerElement = body.querySelector('#power');
const progressElement = body.querySelector('.progress');

localStorage.setItem('total', '1000');
localStorage.setItem('power', '100');
if (!localStorage.getItem('coins')) {
    localStorage.setItem('coins', '0');
    h1.textContent = '0';
} else {
    h1.textContent = Number(localStorage.getItem('coins')).toLocaleString();
}
totalElement.textContent = '/1000';
powerElement.textContent = '100';

image.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    navigator.vibrate(5);

    let coins = parseInt(localStorage.getItem('coins'));
    let power = parseInt(localStorage.getItem('power'));

    if (power > 0) {
        localStorage.setItem('coins', coins + 1);
        h1.textContent = (coins + 1).toLocaleString();

        localStorage.setItem('power', power - 1);
        powerElement.textContent = power - 1;
    }

    if (x < 150 && y < 150) {
        image.style.transform = 'translate(-0.25rem, -0.25rem) skewY(-10deg) skewX(5deg)';
    } else if (x < 150 && y > 150) {
        image.style.transform = 'translate(-0.25rem, 0.25rem) skewY(-10deg) skewX(5deg)';
    } else if (x > 150 && y > 150) {
        image.style.transform = 'translate(0.25rem, 0.25rem) skewY(10deg) skewX(-5deg)';
    } else if (x > 150 && y < 150) {
        image.style.transform = 'translate(0.25rem, -0.25rem) skewY(10deg) skewX(-5deg)';
    }

    setTimeout(() => {
        image.style.transform = 'translate(0px, 0px)';
    }, 100);

    progressElement.style.width = `${(100 * power) / 1000}%`;
});

setInterval(() => {
    let power = parseInt(localStorage.getItem('power'));
    if (power < 100) {
        localStorage.setItem('power', power + 1);
        powerElement.textContent = power + 1;
        progressElement.style.width = `${(100 * (power + 1)) / 1000}%`;
    }
}, 100);
