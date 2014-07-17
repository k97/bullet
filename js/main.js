$(function(){
    var Body = $('body');

    $('#logo').click(function(){
        $('#dropdown').slideToggle();
    })

    $('#reset').click(function(){
        Body.find('*').removeAttr('style');
    });

    $('#contrast').click(ScreenSwitcher);
    $('#text').click(TextSwitcher);
    $('#close').click(function(){
        $('#content').html('');
    })


    function ScreenSwitcher(){
        Body.hasClass('black') ? Body.removeClass('black').addClass('white') : Body.removeClass('white').addClass('black');

        var iconEle = $('#contrast').find('i');
        iconEle.hasClass('iconsun') ? iconEle.removeClass( "iconsun").addClass("iconmoon") : iconEle.removeClass("iconmoon").addClass("iconsun");
    }//ScreenSwitcher

    function TextSwitcher(){
        Body.hasClass('sans') ? Body.removeClass('sans').addClass('serif') : Body.removeClass('serif').addClass('sans');
    }//TextSwitcher

});