$(document).ready(function () {

    $('#input').change(function () {
        var input = $(this).val();

        $('ul').append('<li>' + input + '<i class="fas fa-check" id = "icon1"></i> <i class="fas fa-trash" id = "icon2"></i> </li>');


    });

    $('ul').on('click', '.fa-trash', function () {

        $(this).parent('li').toggleClass('trashed');
        $(this).parent('li').fadeOut(900);

    });

    $('ul').on('click', '.fa-check', function () {

        $(this).parent('li').toggleClass('checked');



    });
});