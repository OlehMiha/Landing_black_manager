//Прелодер и первичные анимации
$(window).on('load', function () {
        var $preloader = $('.volosunov'),
            $spinner = $preloader.find('.spinner');
        $spinner.delay(650).fadeOut('slow');
        $preloader.delay(650).fadeOut('slow');
        $('.mov_fadeIn_start').addClass('animated fadeIn');
        $('.mov_fadeIn_start').css("opacity","1");
        $('.mov_fadeInUp_start').addClass('animated fadeInUp');
        $('.mov_zoomIn_start').css("opacity","1");
        $('.mov_zoomIn_start').addClass('animated zoomIn');
        $('.load_active').addClass('active');

          $.each($('.mov1_left_one_by_one_start p'), function(i, el) {
            setTimeout(function() {
                $(el).addClass('animated fadeInLeft')
            }, 0 + (i * 300));

          });
    });


$(document).ready(function(){ 
//Отключить выделение
    window.oncontextmenu = function() {
        return false;
    } 

    document.addEventListener('mousemove',function(e){
      if( e.target.getAttribute('unselectable')=='on' )
        e.target.ownerDocument.defaultView.getSelection().removeAllRanges();
    },false);
    

//Меню топ  
var close = false;
    $(".button_mobi_menu").on('click', function () {
        if ($(this).hasClass('active')) {
            $('.button_mobi_menu').removeClass("active");
            close = false;
            $('.menu_div').removeClass("active");
            return;
        }
        $('.button_mobi_menu').addClass("active");
        $('.menu_div').addClass("active");
        close = true;
    }); 

    $(".menu_top li:not(.price_menu_modal)").on('click', function () {
        if(close = true){
            $('.button_mobi_menu').removeClass("active");
            $('.menu_div').removeClass("active");
            close = false;
        
        }
    }); 




//Плавный скрол
    $('a.go_a').mPageScroll2id({
        scrollSpeed: 900,
        scrollEasing: 'swing',
        scrollingEasing: 'swing',
        offset: 0
    });


//Меню топ скрол
    var h = $(window).height();
 
    if ( ($(this).scrollTop()) > 0 ) {
        $(".menu_div").addClass('scroll');
    } 
    $(window).scroll(function(){
        if ( ($(this).scrollTop()) > 0 ) {
            $(".menu_div").addClass('scroll');
        } 
        if ( $(this).scrollTop() == 0 ) {
            $(".menu_div").removeClass('scroll');
        }


        $('.mov_next_fadeInUp').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $(this).addClass('animated fadeInUp');
            } else {
                $(this).removeClass('animated fadeInUp');
            }
        });


        $('.mov_next_fadeInLeft').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $.each($(this).find('p'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass('animated fadeInLeft')
                    }, 0 + (i * 250));

                  });
            } else {
                $(this).find('p').removeClass('animated fadeInLeft');
            }
        });
        $('.mov_next_fadeInRight').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $.each($(this).find('div'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass('animated fadeInRight')
                    }, 0 + (i * 150));

                  });
            } else {
                $(this).find('div').removeClass('animated fadeInRight');
            }
        });


        $('.mov_next_fadeIn').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $(this).addClass('animated fadeIn');
            } else {
                $(this).removeClass('animated fadeIn');
            }
        });

        $('.mov_next_fadeIn_timeOut').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                var el = $(this);
                setTimeout(function() {
                        $(el).addClass('animated fadeIn');
                    }, 500);
            } else {
                $(this).removeClass('animated fadeIn');
            }
        });


        $('.mov_slideInLeft').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $.each($(this).find('div'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass('animated fadeInLeft');
                    }, 0 + (i * 80));

                  });
            } else {
                $(this).find('div').removeClass('animated fadeInLeft');
            }
        });
    });
    

    var width_el = Number(document.documentElement.clientWidth);
    if(width_el <= 768){
        $('.item_block_1').removeClass('active');
    }


	
	

//Формы  
    $("#sps").on("click","div", function () {
            $('#sps').modal('toggle');
     });


    $("#email_form").submit(function() {

        $('#exampleModal_1').modal('toggle');
        setTimeout(function() {
            $('#active_email').modal('toggle');
        },250);
    });

});