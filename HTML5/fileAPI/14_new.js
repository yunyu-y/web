function doFirst(){
  //要求瀏覽器同意我們執行drag&drop
 document.getElementById('dropzone').ondragover = dragOver; //停在裡面
 document.getElementById('dropzone').ondrop = dropped; //放下

}
function dragOver(e){ //事件物件的方法須引用事件物件
  e.preventDefault(); //阻斷!瀏覽器預設不能放

}

function dropped(e){
  e.preventDefault();

  let file = e.dataTransfer.files[0]; //引用重點
  document.getElementById('fileName').innerText = file.name;
  
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load',function(e){ //物件.事件.處理函數 
    document.getElementById('image').src = readFile.result;
    image.src = readFile.result;
    image.style.maxWidth ='500px';
    image.style.maxHeight ='400px';

  });
}

function fileChange(){
  let file = document.getElementById('theFile').files[0];
  let massage = '';
  massage += `檔案名稱:${file.name}\n`; // massage +=:字串串接 \n:換行
  massage += `檔案大小:${file.size}byte(s) \n`;
  massage += `檔案格式:${file.type}\n`;
  massage += `檔案最後更新日期:${file.lastModifiedDate}\n`;



  document.getElementById('fileInfo').value = massage;

}
window.addEventListener('load',doFirst);