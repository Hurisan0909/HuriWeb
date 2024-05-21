var is24HourFormat = false;

function updateClock() {
  var now = new Date();
  var milliseconds = now.getMilliseconds();
  var seconds = now.getSeconds();
  var minutes = now.getMinutes();
  var hours = now.getHours();

  if (!is24HourFormat) {
    // 12時間表示に変換
    hours = hours % 12 || 12; // 午前0時の場合、12時に変換
  }

  // ゼロパディング
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  milliseconds = (milliseconds < 100 ? "0" : "") + (milliseconds < 10 ? "0" : "") + milliseconds;

  var timeString = hours + ':' + minutes + ':' + seconds + '.' + milliseconds;

  if (!is24HourFormat) {
    timeString += (now.getHours() < 12) ? ' AM' : ' PM';
  }

  document.getElementById('clock').textContent = timeString;
}

function toggleClockFormat() {
  is24HourFormat = !is24HourFormat;
  updateClock(); // 時計の表示を更新
}

// 1ミリ秒ごとに時計を更新
setInterval(updateClock, 1);

window.addEventListener('load', function() {
    // スマートフォンで開かれたかどうかを判断するための条件
    if (window.innerWidth <= 768) { // 例えば、768px以下をスマートフォンとして認識する
      // スマートフォン用のフォントサイズを設定
      document.body.style.fontSize = '14px'; // サイズは適宜変更してください
    }
});

window.addEventListener('load', function() {
            // フルスクリーン表示
            document.getElementById('button1').addEventListener('click', function() {
                document.body.requestFullscreen();
            });

            // フルスクリーン解除
            document.getElementById('button2').addEventListener('click', function() {
                document.exitFullscreen();
            });
        });