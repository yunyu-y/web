function doFirst(){
  //先跟HTML畫面產生關聯
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
//格線開始
  for(let i = 0; i < 100; i++){
      let position = i * 50;

      //水平線
      context.moveTo(0, position);
      context.lineTo(canvas.width, position);
      context.fillText(position, 0, position);

      //垂直線
      context.moveTo(position, 0);
      context.lineTo(position, canvas.height);
      context.fillText(position, position, 10);

  }
  context.strokeStyle='rgba(0,0,0,0.2)';
  context.stroke();
//格線結束

  //四分之一線開始
  context.beginPath();
  
  context.moveTo(0, canvas.height / 2);
  context.lineTo(canvas.width, canvas.height / 2);

  context.moveTo(canvas.width / 2, 0);
  context.lineTo(canvas.width / 2, canvas.height);
  
  context.strokeStyle ='rgba(0,0,0,0.5)';
  context.stroke();
  //四分之一線結束

  context.strokeStyle ='red';
  context.lineWidth = 5;
  
  //左上角
  context.beginPath();

  context.arc(250, 200, 150, 0, Math.PI, false);
  context.stroke();

  //右上角
  context.beginPath();

  context.arc(750, 200, 150, 0, Math.PI, true);
  context.stroke();

  //左下角
  context.beginPath();

  context.arc(250, 600, 150, 0, 2 * Math.PI);
  context.stroke();
  
  //左下角
  context.beginPath();

  context.arc(750, 600, 150, 0.3 * Math.PI, 1.6 * Math.PI, false);
  context.stroke();

  
}
window.addEventListener('load',doFirst);