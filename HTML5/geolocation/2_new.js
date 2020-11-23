function doFirst(){
  navigator.geolocation.getCurrentPosition(succCallback,errorCallback,{
    enableHighAccuracy:false, //開啟高精準度
    timeout:100000, //毫秒
    maximumAge: 30000, //毫秒
  });
}
function succCallback(e){
  let lati = e.coords.latitude;
  let longi = e.coords.longitude;
  let accuracy = e.coords.accuracy;

  if(accuracy < 5000){
    document.getElementById('position').innerHTML = `
    緯度: ${lati} <br>
    經度: ${longi} <br>
    準確度: ${accuracy}公尺 <br>
    `;
  }else{
    document.getElementById('position').innerHTML = 
    `超過偵測範圍`;
  }  
}
function errorCallback(e){
  document.getElementById('position').innerHTML = `
  錯誤碼: ${e.code} <br>
  錯誤訊息: ${e.message} <br>
  `;
}
window.addEventListener('load',doFirst);