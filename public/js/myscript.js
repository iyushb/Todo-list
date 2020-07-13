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