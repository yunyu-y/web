function doFirst(){
 document.getElementById('theFile').onchange = fileChange;
}
function fileChange(){
  let files = document.getElementById('theFile').files;
  let massage = '';

for(let i = 0; i <files.length; i++){
   massage += `檔案名稱:${files[i].name}\n`; // massage +=:字串串接 \n:換行
  massage += `檔案大小:${files[i].size}byte(s) \n`;
  massage += `檔案格式:${files[i].type}\n`;
  massage += `檔案最後更新日期:${files[i].lastModifiedDate}\n`;
  massage += `=========================\n`

  document.getElementById('fileInfo').value = massage;
}

 


  
}
window.addEventListener('load',doFirst);