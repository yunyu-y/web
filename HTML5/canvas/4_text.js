function doFirst(){
  //先跟HTML畫面產生關聯
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');

  context.font='bold 50px Tahoma';

  // context.textBaseline='alphabetic';  
  
  context.fillText('omgSilvia', 100, 100);
  // context.stroke('omgSilvia', 100, 100);

  context.strokeStyle='red';
  context.lineWidth=5;
  
  context.moveTo(100, 100);
  context.lineTo(350, 100);
  context.stroke();
  
}
window.addEventListener('load',doFirst);