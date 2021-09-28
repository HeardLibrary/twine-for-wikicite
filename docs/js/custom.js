"use strict";


$(".main_wrapper header .inner .language_nav ul li:nth-child(1) .flag_box").on('click', function(){
    $('.heading .desc .language_changer:nth-child(1) ').css({ "display": "none" });
    $('.heading .desc .language_changer:nth-child(2) ').css({ "display": "block" }); 
     $('.heading .desc .language_changer:nth-child(3) ').css({ "display": "none" });
      $('.heading .desc .language_changer:nth-child(4) ').css({ "display": "none" });
});

$(".main_wrapper header .inner .language_nav ul li:nth-child(3) .flag_box").on('click', function(){
    $('.heading .desc .language_changer:nth-child(1) ').css({ "display": "block" });
    $('.heading .desc .language_changer:nth-child(2) ').css({ "display": "none" }); 
    $('.heading .desc .language_changer:nth-child(3) ').css({ "display": "none" });
    $('.heading .desc .language_changer:nth-child(4) ').css({ "display": "none" });
});

$(".main_wrapper header .inner .language_nav ul li:nth-child(4) .flag_box").on('click', function(){
    $('.heading .desc .language_changer:nth-child(1) ').css({ "display": "none" });
    $('.heading .desc .language_changer:nth-child(2) ').css({ "display": "none" }); 
     $('.heading .desc .language_changer:nth-child(3) ').css({ "display": "block" });
      $('.heading .desc .language_changer:nth-child(4) ').css({ "display": "none" });
});