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

  context.strokeStyle='red';
  context.lineWidth=20;

  context.beginPath();

//lineCap
context.font='bold 20px sans-serif';
context.fillText('lineCap',100,70);

context.lineCap='butt';

context.beginPath();
context.moveTo(100,100);
context.lineTo(300,100);
context.stroke();

context.lineCap='round';

context.beginPath();
context.moveTo(100,150);
context.lineTo(300,150);
context.stroke();

context.lineCap='square';

context.beginPath();
context.moveTo(100,200);
context.lineTo(300,200);
context.stroke();
  
//lineJoin
context.fillText('lineJoin',100,270);

context.lineJoin='miter';
context.strokeRect(100, 300, 100, 200);

context.lineJoin='bevel';
context.strokeRect(250, 300, 100, 200);

context.lineJoin='round';
context.strokeRect(400, 300, 100, 200);

}
window.addEventListener('load',doFirst);