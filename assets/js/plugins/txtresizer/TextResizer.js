function TextResize() {
    $('.textresize').prepend('<button class="resizer"><i class="fa fa-file-text" aria-hidden="true"></i></button>');

    $(".resizer").click(function () {
        var fontsize = $('.textresize').css('font-size');
        var convert = fontsize.replace("px", "") % 10;
        if (convert != 0 && convert != 3 && convert != 5) {
            var temp = fontsize.replace("px", "") - convert;
            fontsize = temp + "px";
        }        
        if (fontsize == '50px')
            $(".textresize").css("font-size", "40px");
        if (fontsize == '40px')
            $(".textresize").css("font-size", "30px");
        if (fontsize == '30px')
            $(".textresize").css("font-size", "25px");
        if (fontsize == '25px')
            $(".textresize").css("font-size", "20px");
        if (fontsize == '20px')
            $(".textresize").css("font-size", "15px");
        if (fontsize == '15px')
            $(".textresize").css("font-size", "13px");
        if (fontsize == '15px')
            $(".textresize").css("font-size", "50px");
    });
}