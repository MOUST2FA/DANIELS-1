/// <reference types="../@types/jquery" />

$(window).on('scroll' ,function(){
    let scrollTop = $(window).scrollTop() ;
    let offsetTop = $("#about").offset().top ;
    if(scrollTop > offsetTop - 80){
        $('.navbar').css({backgroundColor : 'white'})
        $('.navbar a').css({color : 'black'})
        $('.navbar .nav-item .active').css({borderColor : 'black'})
    }else{
        $('.navbar').css({backgroundColor : 'transparent'})
        $('.navbar a').css({color : 'white'})
        $('.navbar .nav-item .active').css({borderColor : 'white'})
    }
})