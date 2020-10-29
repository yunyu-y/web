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

  //左上角
  context.beginPath();
  context.strokeStyle = 'red';    
  context.lineWidth = 10;

  context.arc(250, 200, 150, 0, 2* Math.PI);
  context.stroke();

  context.translate(250, 200);
  context.moveTo(0, 0);
  context.lineTo(0, -120);

  // context.moveTo(250, 200);
  // context.lineTo(250, 80);
  context.stroke();
  
  //右下角
  context.translate(-250, -200);
  context.translate(750, 600);
  
  let gradient = context.createRadialGradient(0, 0, 150-10, 0, 0, 150+10);
  gradient.addColorStop(  0, '#666');
  gradient.addColorStop(0.5, '#fff');
  gradient.addColorStop(  1, '#666');

  context.beginPath();
  context.arc(0, 0, 150, 0, 2* Math.PI);

  context.strokeStyle = gradient;    
  context.lineWidth = 20;
  context.stroke();
  

}
window.addEventListener('load',doFirst);