//itemsの中身
const hitokoto_items = [
    "今日はいい日になりそう。いっそのこと遊びにいったらどうですか？(+2)",
    "今日はまだマシ枠なんじゃないですかねｗ不運が襲ってくることはなさそうｗ(+1)",
    "今日は何とも言えない日いいことも悪いこともないかもしれんｗ(+-0)",
    "今日は運悪いねｗあきらめるしかないぜ(-1)",
    "今日はとことん運がわるいぜ、死ぬなよ(-2)"


    ];
//htmlからidを所得する
const btn = document.getElementById("gacha-button");
const disp = document.getElementById("gacha-display");

//math.floor関数を使ってランダムな数値を出す。
//その数値の小数点以下はすべて切り捨てる。
btn.addEventListener("click", function() {
  const num = Math.floor(Math.random() * hitokoto_items.length );
    disp.innerHTML = hitokoto_items[num];
});

//idを所得し2.htmlファイルに移動させる。
//ボタンを離したときトリガー発動

document.getElementById("urlbtn").addEventListener("mouseup", function() {
  window.location.href = "2.html";
});