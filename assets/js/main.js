const body = document.body;
const image = body.querySelector('#coin');
const h1 = body.querySelector('h1');
localStorage.setItem('total', '1000');
body.querySelector('#total').textContent = '/1000';
localStorage.setItem('power', '1');
body.querySelector('#power').textContent = '1';
let coins = localStorage.getItem('coins');
let total = localStorage.getItem('total');
let power = localStorage.getItem('power');
let count = localStorage.getItem('count')

if (coins == null) {
    localStorage.setItem('coins', '0');
    h1.textContent = '0';
} else {
    h1.textContent = Number(coins).toLocaleString();
}

if (total == null) {
    localStorage.setItem('total', '1000')
    body.querySelector('#total').textContent = '/1000';
} else {
    body.querySelector('#total').textContent = `/${total}`;
}

if (power == null) {
    localStorage.setItem('power', '1');
    body.querySelector('#power').textContent = '1';
} else {
    body.querySelector('#power').textContent = power;
}

if (count == null) {
    localStorage.setItem('count', '1')
}

image.addEventListener('touchstart', (e) => {

    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;

    navigator.vibrate(5);

    coins = localStorage.getItem('coins');
    power = localStorage.getItem('power');

    if (Number(power) > 0) {
        localStorage.setItem('coins', `${Number(coins) + 1}`);
        h1.textContent = `${(Number(coins) + 1).toLocaleString()}`;

        localStorage.setItem('power', `${Number(power) - 1}`);
        body.querySelector('#power').textContent = `${Number(power) - 1}`;
    }

    if (x < 150 & y < 150) {
        image.style.transform = 'translate(-0.25rem, -0.25rem) skewY(-10deg) skewX(5deg)';
    } else if (x < 150 & y > 150) {
        image.style.transform = 'translate(-0.25rem, 0.25rem) skewY(-10deg) skewX(5deg)';
    } else if (x > 150 & y > 150) {
        image.style.transform = 'translate(0.25rem, 0.25rem) skewY(10deg) skewX(-5deg)';
    } else if (x > 150 & y < 150) {
        image.style.transform = 'translate(0.25rem, -0.25rem) skewY(10deg) skewX(-5deg)';
    }

    setTimeout(() => {
        image.style.transform = 'translate(0px, 0px)';
    }, 100);

    body.querySelector('.progress').style.width = `${(100 * power) / total}%`;
});

setInterval(() => {
    count = localStorage.getItem('count')
    power = localStorage.getItem('power');
    if (Number(total) > power) {
        localStorage.setItem('power', `${Number(power) + Number(count)}`);
        body.querySelector('#power').textContent = `${Number(power) + Number(count)}`;
        body.querySelector('.progress').style.width = `${(100 * power) / total}%`;
    }
}, 500);
