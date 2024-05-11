const kakugen_items = [
"明日はマジで最高な日...え？おばあちゃん助けた？",
  "明日は最高の1日になるんじゃないかな、なんかに貢献した?",
"明日はちょっといい日このちょっとが結構嬉しかったりするかも...?",
"明日はなんもない日逆にこれはこれでいいかもねー",
"明日はちょっと悪い日、何かやらかしたなら今のうち謝るか直したらいいんじゃないかな",
"明日は最高に最悪な日だね。...え？今日そんな酷いことしたの？...?",
"明日はマジで最悪な日、死なないように気を付けてねマジで"


    ];

const btn = document.getElementById("gacha-button");
const disp = document.getElementById("gacha-display");

btn.addEventListener("click", function() {
  const num = Math.floor(Math.random() * kakugen_items.length );
    disp.innerHTML = kakugen_items[num];
});