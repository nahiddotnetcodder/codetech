$(function($){
     var topmenu = $('.custom-nav').offset().top;
     $(window).on('scroll',function(){
        var scrol = $(window).scrollTop();
        
        var menu = $('.custom-nav');
        //menufix
        if(scrol>topmenu){
            menu.addClass('fixed_menu')
        }else{
            menu.removeClass('fixed_menu')
        }

        //topback js
        if( scrol > 200){
            $('.backtop').fadeIn(1000);
        }else{
            $('.backtop').fadeOut(1000);
        }
        });


     });

     //topback click js 
    $('.backtop').on('click', function(){
        $('body,html').animate({
            scrollTop: 0
        })
    });


	//preloader
	$(window).load(function() {
		$('#preloader').delay(500).fadeOut(500);
	 });
	//navbar js
	$('.menu-right-icon').on('click', function(){
		$('.logo').toggleClass('logo-left');
		$('#mynav ul').toggleClass('menu-hide');
	});
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	//progress bar
	$('.progress-bar').animate({
		width: "100%"
	}, 8000);

	//brands js
	$('.brands-items').slick({
		autoplay: true,
        infinite: true,
		arrows: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		prevArrow: '<i class="fa-solid fa-angle-left left-arrow"></i>',
		nextArrow: '<i class="fa-solid fa-angle-right right-arrow"></i>',
		responsive: [
				{
					breakpoint: 1198,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
						infinite: true,
						
					}
		},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						
					}
		},
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
	});
	//service js
	$('.service-slider').slick({
		arrows: false,
		slidesToShow: 3,
		autoplay: true,
		speed: 200,
		responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
	        {
		        breakpoint: 768,
		        settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
		        }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
	});
	

new WOW().init();

// $('#mynav li').on('click', function() {
//     $('#mynav li a').removeClass('active');
//     $(this).addClass('active');
// });

    
    
    