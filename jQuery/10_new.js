$(document).ready(function () {
  //  let size = parseInt($('div').css('fontSize')); //加上parseIn()印出無px的數字
  //  alert(size);

  $('#shrink').click(function(){
    changeSize('small'); //傳送參數以分辨點選shrink or zoom
  });
  $('#zoom').click(function(){
    changeSize('big');
  });

  function changeSize(size){ //放大&縮小為同功能,呼叫同函數
    let currentSize=parseInt($('div').css('fontSize'));

    if(size =='small'){
      newSize = currentSize - 2;
    }else if(size == 'big'){
      newSize = currentSize + 2;
    }

    $('div').css(`fontSize`,`${newSize}px`);
  }

});