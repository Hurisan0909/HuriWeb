const kakugen_items = [
    "今日はいい日になりそう。いっそのこと遊びにいったらどうですか？",
    "今日はまだマシ枠なんじゃないですかねｗ不運が襲ってくることはなさそうｗ",
    "今日は何とも言えない日いいことも悪いこともないかもしれんｗ",
    "今日は運悪いねｗあきらめるしかないぜ",
    "今日はとことん運がわるいぜ、死ぬなよ"


    ];

const btn = document.getElementById("gacha-button");
const disp = document.getElementById("gacha-display");

btn.addEventListener("click", function() {
  const num = Math.floor(Math.random() * kakugen_items.length );
    disp.innerHTML = kakugen_items[num];
});