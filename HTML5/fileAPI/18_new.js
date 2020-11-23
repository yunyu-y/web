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

  let files = e.dataTransfer.files; //引用重點
  
  let readFile = new FileReader(); //需先定義才可使用物件的事件跟方法
  for(let i = 0; i<files.length; i++){
    readFile.readAsDataURL(file[i]); //求出路徑+'檔名
    let index=0;
    readFile.addEventListener('load',function(e){ //物件.事件.處理函數 
    //動態新增<img>
    let image = document.cueateElement('img');
    image.src = readFile.result;
    image.id = `pic${index}`

    let dropzone = document.getElementById('dropzone');
    // dropzone.appendChild(image);
    dropzone.insertBefore(image,dropzone,firstChild);
    // index++;
  
  });

  }

  
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