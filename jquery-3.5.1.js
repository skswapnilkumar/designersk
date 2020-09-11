$('.toggle').click(function () {
    $('.menu').slideToggle('fast', function () {
        if ($(this).is(':visible'))
            $(this).css('display', 'flex');
    });
});