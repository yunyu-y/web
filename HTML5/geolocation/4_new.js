function doFirst(){
  // let map = new google.maps.Map(document.getElementById('map'),{});
  let area = document.getElementById('map');
  let position = new google.maps.LatLng(24.9576137,121.2254213);
  
  let options = {
    zoom: 14,
    center: position,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  let map = new google.maps.Map(area,options);

  // let marker = new google.maps.Marker({
  //   position:position,
  //   map:map,
  // });

  let marker = new google.maps.Marker({
    position:position,
    map:map,
    // title:'這位置準不準?',
    icon:'../../images/number/dgtp.gif'
  });
  marker.setTitle('這位置準不準?');

}
window.addEventListener('load', doFirst);