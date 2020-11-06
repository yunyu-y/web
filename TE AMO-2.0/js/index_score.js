//--------- 好評人數跑馬燈01
var controller = new ScrollMagic.Controller();

var re01 = new ScrollMagic.Scene({
    triggerElement: '#recom01',
    //offset : 0,// 改綠指標(單位px)
    triggerHook: 1, // 改藍色指標  0~1
    //duration : '300%' //單位是px or %  動畫執行的範圍
    reverse: false, // 動畫執行返回
})
    // .addIndicators()
    .on('enter', function () {
        //執行functtion
        enter();
        enter2();
        enter3();
        console.log('enter');
    })
    .addTo(controller);

//---------跑馬燈js------
var recom01 = { score: 0 },
    recom01_num = document.getElementById('recom01_num');

//創建一個介於20秒內改變分數的屬性值從0到100。

function enter() {
    var tween = TweenLite.to(recom01, 2, {
        score: 1000,
        onUpdate: showScore,
    });
}

//在tween update時通過這個功能輸出。
function showScore() {
    recom01_num.innerHTML = recom01.score.toFixed(0);
}

//--------- 好評人數跑馬燈02
//---------跑馬燈js------
var recom02 = { score: 0 },
  recom02_num = document.getElementById('recom02_num');

//創建一個介於20秒內改變分數的屬性值從0到100。

function enter2() {
  var tween2 = TweenLite.to(recom02, 2, {
      score: 10000,
      onUpdate: showScore2,
  });
}

//在tween update時通過這個功能輸出。
function showScore2() {
  recom02_num.innerHTML = recom02.score.toFixed(0);
}

//--------- 好評人數跑馬燈03
//---------跑馬燈js------
var recom03 = { score: 0 },
  recom03_num = document.getElementById('recom03_num');

//創建一個介於20秒內改變分數的屬性值從0到100。

function enter3() {
  var tween3 = TweenLite.to(recom03, 2, {
      score: 5000,
      onUpdate: showScore3,
  });
}

//在tween update時通過這個功能輸出。
function showScore3() {
  recom03_num.innerHTML = recom03.score.toFixed(0);
}