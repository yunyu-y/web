function doFirst(){
 document.getElementById('theFile').onchange = fileChange;
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