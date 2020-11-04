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

  //===============3_textRead Start===========
  let readFile = new FileReader();
  readFile.readAsText(file);
  readFile.addEventListener('load',function(e){ //物件.事件.處理函數
    // document.getElementById('fileContent').value = e.target.result;
    // document.getElementById('fileContent').value = this.result; 
    document.getElementById('fileContent').value = readFile.result;

  });


}
window.addEventListener('load',doFirst);