
var hello = 'Hello World';
alert(hello);

// 整数を代入する
var int1 = 1;
// 負数を代入する
var int2 = -10;
// 小数点を代入する
var float1 = 3.14;
// 文字列を代入する
var str1 = 'JavaScriptを覚えよう';

// 足し算
alert(4 + 3);
// 引き算
alert(8 - 5);
// 掛け算
alert(2 * 6);
// 割り算
alert(10 / 2);
//文字列の結合
alert('Hello' + 'World');

//変数の結合
var str1 = 'Hello';
var str2 = 'World!!';
alert(str1 + str2);

//条件分岐
var orange = 100;
var apple = 120;

if (orange<apple){
  alert('みかんの値段がりんごよりやすい');
}else if(orange == apple){
  alert('みかんとりんごが同じ値段');
}else{
  alert('みかんの値段がりんごより高い');
}

//繰り返し処理
//２をかけて100を超えるまでにかかった回数を数える
//while文　処理結果がtrueかfalseかで判断している
var max = 100;
var num = 1;
var count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

//for文を使って繰り返し処理
//for分の場合繰り返しの判断は真偽値ではなく条件を設定する

var i;
var num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です')


//２章確認問題
//回答をアラートで表示且つ計算式の結果を変数に代入し回答ごとに改行表示

var add = 1 + 1;
var sub = 1 - 1;
var mul = 2 * 2;
var div = 2 / 2;

alert('足し算の結果' + add + '\n' + '引き算の結果' + sub + '\n' + '掛け算の結果' + mul + '\n' + '割り算の結果' + div);


//関数の定義
//文字列を結合する関数の例で練習

var alertString;
alertString = addString("WebCamp");

alert(alertString)

function addString(strA){
  var addStr = "Hello" + strA;
  return addStr;
}

//入力ダイアログを作成する
//ジャンケンの手をランダムに選択する関数を追加する
//ジャンケンの勝ち負けを判断できるようにする

var promptStr = prompt('何か好きな文字を入力してください。');

alert(promptStr);

var user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
}

var js_hand = getJShand();
var judge = winlose(user_hand, js_hand);

if (user_hand != null){
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}else {
  alert("またチャレンジしてね")
}

function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3);

  if(js_hand_num == 0){
    js_hand = "グー";
  } else if(js_hand_num == 1){
    js_hand = "チョキ";
  } else if(js_hand_num == 2){
    js_hand = "パー";
  }

  return js_hand;
}





