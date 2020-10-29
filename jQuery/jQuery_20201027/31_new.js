$(document).ready(function(){
    let divWidth = $('#sliderBoard').width();
    let imgCount = $('#content li').length;
    // alert(imgCount)

    for(let i = 0; i < imgCount; i++){
        $('#contentButton').append('<li></li>')
    }
    $('#contentButton li:nth-child(1)').addClass('clickMe');

    $('#content li').width(divWidth);
    $('#content').width(divWidth * imgCount);

    let index;
    $('#contentButton li').click(function(){
        index = $(this).index();

        $('#content').animate({
            left: divWidth * index * -1,
        },500);

        $(this).addClass('clickMe');
        $('#contentButton li').not(this).removeClass('clickMe');
    });
});