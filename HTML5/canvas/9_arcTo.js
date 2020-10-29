function doFirst(){
  //先跟HTML畫面產生關聯
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');

// ------格線開始-----

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

//四分之一線開始
context.beginPath();

context.moveTo(0, canvas.height / 2);
context.lineTo(canvas.width, canvas.height / 2);

context.moveTo(canvas.width / 2 ,0);
context.lineTo(canvas.width / 2,canvas.height);

context.strokeStyle='rgba(0,0,0,0.5)';
context.stroke();
//四分之一線結束

context.strokeStyle = 'red';
context.lineWidth = 5 ;

//左上角
context.beginPath();

context.moveTo(100,250);
context.arcTo(250,100,350,300,110);
context.stroke();

//輔助線
context.strokeStyle='blue';
context.lineWidth=1;
context.beginPath();
context.moveTo(100,250);
context.lineTo(250,100);
context.lineTo(350,300);
context.stroke();

//座標
ontext.fillText('(100,250)',70,260);
ontext.fillText('(350,300)',328,310);




}
window.addEventListener('load',doFirst);