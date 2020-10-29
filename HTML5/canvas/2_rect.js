function doFirst(){
  //先跟HTML畫面產生關聯
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');

  // context.fillRect(100,100,250,200);
  // context.strokeRect(100,100,250,200);
  // context.clearRect(150, 150, 50, 50);
  context.rect(100,100,250,200);
  // context.fill();
  context.stroke();
  
  


  //橡皮擦
  // context.clearRect(0, 0, canvas.width, canvas.height);
  
  

  
  
}
window.addEventListener('load',doFirst);