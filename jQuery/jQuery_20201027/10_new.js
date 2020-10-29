$(document).ready(function () {
//    let size = parseInt($('div').css('fontSize'));
//    alert(size);

    $('#shrink').click(function(){
        changeSize('small');
    });
    $('#zoom').click(function(){
        changeSize('big');
    });

    function changeSize(size){
        let currentSize = parseInt($('div').css('fontSize'));

        if(size == 'small'){
            newSize = currentSize - 2;
        }else if(size == 'big'){
            newSize = currentSize + 2;
        }

        $('div').css(`fontSize`,`${newSize}px`);
    }
});