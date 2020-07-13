$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});


$('.fa-angle-double-up').on('click', function () {
    $('input').fadeToggle(500);
    var x = document.querySelector('.fa-angle-double-up')
    x.style.transform += 'rotate(-180deg)';



})

$('input').on('keypress', function (event) {
    if (event.which === 13) {
        $('ul').append(`<li><span><i style=" font-size:24px" class=" fa fa-scissors "></i></span> ${$('input').val()}</li>`);
        $('input').val("");
    }


})