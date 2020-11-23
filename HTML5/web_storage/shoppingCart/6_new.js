let storage = sessionStorage;
function doFirst(){
    let itemString = storage.getItem('addItemList');
    let items = itemString.substr(0,itemString.length-2).split(', ');
    // console.log(items);  //["A1001", "A1006", "A1007", "A1003"]

    newDiv = document.createElement('div');
    newTable = document.createElement('table');

    // table放進div，div放進cartList
    newDiv.appendChild(newTable);
    document.getElementById('cartList').appendChild(newDiv);

    total = 0;
    // 每購買一個品項就呼叫createCartList()新增一個<tr>
    for(let key in items){  //use items[key]
        let itemValue = storage.getItem(items[key]);
        createCartList(items[key],itemValue);
        
        total += parseInt(itemValue.split('|')[2]);
    }
    document.getElementById('total').innerText = total;
}
function createCartList(itemId,itemValue){
    // alert(`${itemId} : ${itemValue}`);
    let itemTitle = itemValue.split('|')[0];
    let itemImage = 'imgs/' + itemValue.split('|')[1];
    let itemPrice = parseInt(itemValue.split('|')[2]);

    // 建立每個品項的清單區域 -- <tr>
    let trItemList = document.createElement('tr');
    trItemList.className = 'item';  //trItemList.setAttribute('class','item');

    newTable.appendChild(trItemList);

    // 建立商品圖片 -- 第一個<td>
    let tdImage = document.createElement('td');
    tdImage.style.width = '200px';

    let image = document.createElement('img');
    image.src = itemImage;
    image.width = 80;

    tdImage.appendChild(image);
    trItemList.appendChild(tdImage);

    // 建立商品名稱和刪除按鈕 -- 第二個<td>
    let tdTitle = document.createElement('td');
    tdTitle.style.width = '280px';
    tdTitle.id = itemId;

    let pTitle = document.createElement('p');
    pTitle.innerText = itemTitle;

    let delButton = document.createElement('button');
    delButton.innerText = 'Delete';
    delButton.addEventListener('click',deleteItem);

    tdTitle.appendChild(pTitle);
    tdTitle.appendChild(delButton);
    trItemList.appendChild(tdTitle);

    // 建立商品價格 -- 第三個<td>
    let tdPrice = document.createElement('td');
    tdPrice.style.width = '170px';
    tdPrice.innerText = itemPrice;

    trItemList.appendChild(tdPrice);

    // 建立商品數量 -- 第四個<td>
    let tdItemCount = document.createElement('td');
    tdItemCount.style.width = '60px';

    let inputItemCount = document.createElement('input');
    inputItemCount.type = 'number';
    inputItemCount.value = 1;
    inputItemCount.min = 0;
    inputItemCount.addEventListener('input',changeItemCount);

    tdItemCount.appendChild(inputItemCount);
    trItemList.appendChild(tdItemCount);
}
function deleteItem(){
    // alert(this.parentNode.id);
    // alert(this.parentNode.getAttribute('id'));
    let itemId = this.parentNode.getAttribute('id');

    // 1.先扣除總金額
    let itemValue = storage.getItem(itemId);
    total -= parseInt(itemValue.split('|')[2]);

    document.getElementById('total').innerText = total;

    // 2.清除storage的資料
    storage.removeItem(itemId);
    storage['addItemList'] = storage['addItemList'].replace(`${itemId}, `,'');

    // 3.刪除該筆tr
    // this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    newTable.removeChild(this.parentNode.parentNode);
    // newTable.removeChild(getElementById(itemId).parentNode);
}
function changeItemCount(){
    // 作業
}
window.addEventListener('load', doFirst);