function updateClock() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const greetingElement = document.getElementById('greeting');

    // 時間表示（12時間表示）
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // 0時を12時に変換
    const formattedHours = String(hours).padStart(2, '0');

    // 日付表示
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
    const weekday = weekdays[now.getDay()];

    // 時間に応じたメッセージ
    let greeting = '';
    const currentHour = now.getHours();
    if (currentHour >= 1 && currentHour < 10) {
        greeting = 'おはようございます。今日は、';
    } else if (currentHour >= 11 && currentHour < 18) {
        greeting = 'こんにちは。今日は、';
    } else {
        greeting = 'こんばんは。今日は、';
    }

    // 要素に値を設定
    timeElement.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}です。`;
    dateElement.textContent = `${year}年${month}月${day}日 (${weekday})`;
    greetingElement.textContent = greeting;
}

// 初回表示
updateClock();

// 1秒ごとに更新
setInterval(updateClock, 1000);

