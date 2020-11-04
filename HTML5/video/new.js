function doFirst(){
  // barsize = 636;
  //先跟HTML畫面產生關連
myMovie = document.getElementById('myMovie');
playButton = document.getElementById('playButton');
defaultBar = document.getElementById('defaultBar');
progress = document.getElementById('progress');

barsize = parseInt(window.getComputedStyle(defaultBar).width);
// alert(barsize);

//全螢幕
fullButton = document.getElementById('fullButton');
fullButton.addEventListener('click',function(){
  myMovie.webkitEnterFullScreen();  //webkitEnterFullScreen不支援所有瀏覽器
})

//再建事件聆聽功能
playButton.addEventListener('click',playOrPause);
defaultBar.addEventListener('click',clickedBar);

}
function playOrPause(){
 if(!myMovie.paused && !myMovie.ended){ //影片正在撥放,按按鈕暫停
    myMovie.pause();
    playButton.innerText = 'play';
 }else{ //影片暫停中或結束了
    myMovie.play();
    playButton.innerText = 'pause';
    setInterval(update,300);
 }
}
function update(){
  if(!myMovie.ended){ //影片還沒跑完時,會一直更新progress
    let size = barsize / myMovie.duration * myMovie.currentTime;
    progress.style.width=`${size}px`;
  }else{ //
    progress.style.width=`0px`;
    playButton.innerText = 'play';
    myMovie.currentTime = 0;
  }
}

function clickedBar(e){
  let mouseX = e.pageX - defaultBar.offsetLeft;
  progress.style.width = `${mouseX}px`;

  let newTime = mouseX / (barsize / myMovie.duration);
    myMovie.currentTime = newTime;

}

window.addEventListener('load',doFirst);