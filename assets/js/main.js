$(document).ready(function() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("FixedScrol").style.top = "0";
        } else {
            document.getElementById("FixedScrol").style.top = "-110px";
        }
        prevScrollpos = currentScrollPos;
    }

    // slider js// 
    $('.main_slieda_ttstmonials').slick({
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerPadding: '0',
        centerMode: false,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1500,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    });
    /*---------LIGHT-BOX js-----------*/
    function lightBoxImages() {
        var selectorG = '.icon_link';
        if ($(selectorG).length) {
            var instanceG = $(selectorG).imageLightbox({
                quitOnDocClick: false,
                button: true,
                activity: true,
                overlay: true,
                arrows: true,
                preloadNext: true,
            });
        }
    }
    lightBoxImages();
       //======= pop up===== //
       function videoPopup() {
        if ($('.popup-youtube').length) {
            $('.popup-youtube').magnificPopup({
                type: 'iframe',
                gallery:{
                  enabled:true
                }
            });
        }
    }
    videoPopup();

     // up icon js //
     $('.up_icon a[href^="#"').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 70) {
            $(".up_icon").addClass("up_iconFixd");
        } else {
            $(".up_icon").removeClass("up_iconFixd");
        }
    });


   
   
}); 
  /* =============WOW JS==========*/
    new WOW().init();