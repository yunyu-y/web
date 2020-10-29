function doFirst(){
  //先跟HTML畫面產生關聯
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');

  let pic1 = new Image();
  pic1.src = '../../images/cityscape.jpg';
  pic1.addEventListener('load',loadImage)

  let pic2 = new Image();
  pic2.src = '../../images/Shinnosuke/Shinnosuke9.png';
  pic2.addEventListener('load',loadImage)

function loadImage(){
  context.globalAlpha=0.5;  
  context.drawImage(pic1, 0, 0,canvas.width, canvas.height); 
   
  context.globalAlpha=1;
  context.drawImage(pic2, 300, 100);
  
  
}  
}
window.addEventListener('load',doFirst);