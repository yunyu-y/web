function doFirst(){
  //先跟HTML畫面產生關聯
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');

// ------格線開始-----

context.beginPath();

  for(let i = 0 ;i < 100 ; i++){
    let position = i * 50;
    
    //水平線
    context.moveTo(0,position);
    context.lineTo(canvas.width, position);
    context.fillText(position,0,position);
    

    //垂直線
    context.moveTo(position,0);
    context.lineTo(position,canvas.height);
    context.fillText(position,position,10);

  }
  context.strokeStyle='rgba(0,0,0,0.2)';
  context.stroke();

// ------格線結束-----


let gradient = context.createRadialGradient(350,300,100, 350,300,200);
gradient.addColorStop(0 , 'red');
gradient.addColorStop(1, 'blue');

context.fillStyle = gradient ;
// context.fillStyle='yellow';
context.fillRect(100,100,500,400);

//把放射狀漸層放在圓裡面,13_arcMore.js

}
window.addEventListener('load',doFirst);