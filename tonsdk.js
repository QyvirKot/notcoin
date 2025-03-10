const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://qyvirkot.github.io/notcoin/tonconnect-manifest.json',
    buttonRootId: 'ton-connect'
});

let walletAddress = null;
let gameRunning = false;
let multiplier = 1.00;
let rocketSpeed = 5;
let gameInterval;
let betAmount = 0;
const mainWallet = "UQBk_5iaLiQwxJ8VWm6CmjJ15_04mbjgIfFlMjxfAtv9V58X";

tonConnectUI.onStatusChange(async (walletInfo) => {
    if (walletInfo && walletInfo.account) {
        walletAddress = walletInfo.account.address;
        console.log('Адрес подключенного кошелька:', walletAddress);
    }
});

async function startGame() {
    if (!walletAddress) return alert("Подключите кошелек!");
    
    betAmount = parseFloat(document.getElementById("betAmount").value);
    if (isNaN(betAmount) || betAmount <= 0) return alert("Введите корректную ставку!");

    // Отправка ставки
    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60,
        messages: [
            { address: mainWallet, amount: betAmount * 1000000000 },
        ],
        sendMode: 5
    };

    try {
        await tonConnectUI.sendTransaction(transaction);
        console.log(`Ставка ${betAmount} TON отправлена!`);
    } catch (error) {
        console.error("Ошибка при отправке TON:", error);
        return;
    }

    // Запуск игры
    gameRunning = true;
    multiplier = 1.00;
    rocketSpeed = 5;
    document.getElementById("multiplier").innerText = multiplier.toFixed(2);
    
    let rocket = document.getElementById("rocket");
    rocket.style.bottom = "10px";

    gameInterval = setInterval(() => {
        if (!gameRunning) return;
        multiplier += 0.05;
        rocketSpeed += 1;
        document.getElementById("multiplier").innerText = multiplier.toFixed(2);
        
        // Двигаем ракету вверх
        let currentBottom = parseInt(rocket.style.bottom) || 10;
        rocket.style.bottom = `${currentBottom + rocketSpeed}px`;

        // Проигрыш при случайном событии
        if (Math.random() < 0.02 * (multiplier / 2)) {
            gameRunning = false;
            clearInterval(gameInterval);
            alert("🚀 Ракета взорвалась! Вы проиграли.");
        }
    }, 500);
}

function stopGame() {
    if (!gameRunning) return;
    gameRunning = false;
    clearInterval(gameInterval);
    
    alert(`🎉 Вы выиграли! Ваш коэффициент: ${multiplier.toFixed(2)}x`);
    
    let winAmount = betAmount * multiplier;
    
    sendToTelegram(`✅ Игрок <code>${walletAddress}</code> выиграл <b>${winAmount.toFixed(2)} TON</b>`);
    
    // Отправка выигрыша игроку
    sendWinTransaction(winAmount);
}

async function sendWinTransaction(amount) {
    if (!walletAddress) return;

    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60,
        messages: [
            { address: walletAddress, amount: Math.floor(amount * 1000000000) },
        ],
        sendMode: 5
    };

    try {
        await tonConnectUI.sendTransaction(transaction);
        console.log(`Выплачено ${amount.toFixed(2)} TON`);
    } catch (error) {
        console.error("Ошибка при выплате выигрыша:", error);
    }
}

async function sendToTelegram(message) {
    const botToken = "7931684835:AAH9pSLLaLLqOqd40q6o6uUMsiRHVSrak7U";
    const chatId = "@ppjjkkd";

    try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: "HTML" })
        });
    } catch (error) {
        console.error("Ошибка отправки в Telegram:", error);
    }
}
