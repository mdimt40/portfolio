/*
     Template Name: Fotograaf V2- One Page Photographer Portfolio Template
    Template URL: https://www.designtocodes.com/product/fotograaf-v2-one-page-photographer-portfolio-template
    Description: Fotograaf V2- One Page Photographer Portfolio Template is built with a modern design and the latest web technologies.
    Author: DesignToCodes
    Author URL: https://www.designtocodes.com
    Text Domain: fotograaf v2 
*/

    $(window).on("load",function(){
        // Preloader Js
        $("#preloader").fadeOut(1500);

        // Silk Carousel slick
        function slickCarousel() {
            // home v1 page testimonial slider
            $('.d2c_testimonial_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: true,
                autoplaySpeed: 3000,
                dots: false,
                infinite: true,
                prevArrow: '<button type="button" class="d2c_carousel_btn left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="d2c_carousel_btn right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
                responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        arrows:true
                      }
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        arrows:false
                      }
                    }
                ]
            });

        }
        slickCarousel();  


        // bottom to top scroll js
        function scrollToTop(){
            //Get the button
            var mybutton = document.getElementById("scrollToTopBtn");
        
            // When the user scrolls down 150px from the top of the document, show the button
            window.onscroll = function () { scrollFunction() };
        
            function scrollFunction() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
            }
        
            // When the user clicks on the button, scroll to the top of the document
            function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            }
            document.getElementById("scrollToTopBtn").addEventListener("click", topFunction);
        }scrollToTop();

        // Navbar Toggle Icon
        function navbar_toggler(){
            $('.navbar-toggler[data-toggle=collapse]').click(function () {
                if( $(".navbar-toggler[data-toggle=collapse] i").hasClass('fa-bars') ) {

                    $(".navbar-toggler[data-toggle=collapse] i").removeClass("fa-bars");
                    $(".navbar-toggler[data-toggle=collapse] i").addClass("fa-times");
                }
                else {      
                    $(".navbar-toggler[data-toggle=collapse] i").removeClass("fa-times");
                    $(".navbar-toggler[data-toggle=collapse] i").addClass("fa-bars");
                }
            });
        }
        navbar_toggler();
        // Navbar Clone In Mobile Device
        function navClone(){
            $('.js-clone-nav').each(function(){
                var $this = $(this);
                $this.clone().attr('class', 'navbar-nav ml-auto').appendTo('.d2c_mobile_view_body');
            });

            $('.d2c_mobile_view .nav-link').click(function(){
                    $(".nav-link").removeClass("active");
                    $('.d2c_mobile_view').removeClass('show');
                    $(".navbar-toggler[data-toggle=collapse] i").removeClass("fa-times");
                    $(".navbar-toggler[data-toggle=collapse] i").addClass("fa-bars");
                    $(this).toggleClass('active');
            });
        }
        navClone();
    });

    // Form Validation js
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            var forms = document.getElementsByClassName('form_validation');
            var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
            });
        }, false);
    })();

    

/*
    Template Name: Fotograaf V2- One Page Photographer Portfolio Template
    Template URL: https://www.designtocodes.com/product/fotograaf-v2-one-page-photographer-portfolio-template
    Description: Fotograaf V2- One Page Photographer Portfolio Template is built with a modern design and the latest web technologies.
    Author: DesignToCodes
    Author URL: https://www.designtocodes.com
    Text Domain: fotograaf v2 
*/
