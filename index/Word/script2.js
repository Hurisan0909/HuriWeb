const kakugen_items = [
"明日はマジで最高な日...え？おばあちゃん助けた？(+3)",
"明日は最高の1日になるんじゃないかな、なんかに貢献した?(+2)",
"明日はちょっといい日このちょっとが結構嬉しかったりするかも...?(+1)",
"明日はなんもない日逆にこれはこれでいいかもねー(+-0)",
"明日はちょっと悪い日、何かやらかしたなら今のうち謝るか直したらいいんじゃないかな(-1)",
"明日は最高に最悪な日だね。...え？今日そんな酷いことしたの？...?(-2)",
"明日はマジで最悪な日、死なないように気を付けてねマジで(-3)"


    ];

const btn = document.getElementById("gacha-button");
const disp = document.getElementById("gacha-display");

btn.addEventListener("click", function() {
  const num = Math.floor(Math.random() * kakugen_items.length );
    disp.innerHTML = kakugen_items[num];
});

document.getElementById("urlbtn").addEventListener("mouseup", function() {
  window.location.href = "index.html";
});