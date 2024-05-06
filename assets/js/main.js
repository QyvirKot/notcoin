const body = document.body;
const image = body.querySelector('#coin');
const h1 = body.querySelector('h1');
localStorage.setItem('total', '1000');
body.querySelector('#total').textContent = '/1000';
localStorage.setItem('power', '100');
body.querySelector('#power').textContent = '100';
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
    localStorage.setItem('power', '100');
    body.querySelector('#power').textContent = '100';
} else {
    body.querySelector('#power').textContent = power;
}

if (count == null) {
    localStorage.setItem('count', '1')
}

// Добавлены обработчики событий для клика и сенсорного касания
const clickHandler = () => {
    incrementCounters();
};

const touchStartHandler = () => {
    incrementCounters();
};

image.addEventListener('click', clickHandler);
image.addEventListener('touchstart', touchStartHandler);

// Функция для увеличения счетчиков монет и силы
const incrementCounters = () => {
    coins = localStorage.getItem('coins');
    power = localStorage.getItem('power');

    if (Number(power) > 0) {
        localStorage.setItem('coins', `${Number(coins) + 1}`);
        h1.textContent = `${(Number(coins) + 1).toLocaleString()}`;

        localStorage.setItem('power', `${Number(power) - 1}`);
        body.querySelector('#power').textContent = `${Number(power) - 1}`;
    }

    body.querySelector('.progress').style.width = `${(100 * power) / total}%`;

    // Добавлен сброс трансформации после нажатия
    resetTransformation();
};

// Функция для сброса трансформации
const resetTransformation = () => {
    image.style.transform = 'none';
};

setInterval(() => {
    count = localStorage.getItem('count');
    power = localStorage.getItem('power');
    if (Number(total) > power) {
        localStorage.setItem('power', `${Number(power) + Number(count)}`);
        body.querySelector('#power').textContent = `${Number(power) + Number(count)}`;
        body.querySelector('.progress').style.width = `${(100 * power) / total}%`;
    }
}, 100);
