/*-----------------------------------------------------------------------------------

 Template Name:Chitchat
 Template URI: themes.pixelstrap.com/chitchat
 Description: This is Chat website
 Author: Pixelstrap
 Author URI: https://themeforest.net/user/pixelstrap

 ----------------------------------------------------------------------------------- */
// 01. Tooltip js
// 02. Background Image js
// 03. OwlCarousel js
// 04. Chitchat Loader js
// 05. Search js
// 06. Mute js
// 07. Button Effect js
// 08. Collapse Title js
// 09. Refresh Request information next & previous button
// 10 .Full Screen
// 11. Header fix
// 12. Tap on Top
// 13. Customizer
// 14  Footer responsive js
// 15  Pin box
// 16  Reminder
// 17  Set wallpaper onclick
// 18  Custom tab
// 19  Theme mode
// 20. Add claas to nav
// 21. Live chat
// 22. Toggle classes
// 23. ADD tO-DO LIST
// 24. Right sidebar
// 25. Sticker
// 26. Emoji
// 27. Profile open
// 28. Dropdown

(function ($) {
    "use strict";

    /*=====================
      01. Tooltip js
      ==========================*/
      tippy('.sidebar-main .icon-btn', {
        theme: 'tooltiprad',
        placement: 'right-end',
        arrow: false
    });
      tippy('.user-popup', {
        content: "Status",
        theme: 'gradienttooltip',
        placement: 'right-end',
        arrow: false
    });
      tippy('.calls  > li > .icon-btn', {
        placement: 'bottom-end',
        arrow: true
    });
      tippy('.clfooter a', {
        placement: 'top-end',
        arrow: true
    });
      tippy('.audiocall2 a', {
        placement: 'top-end',
        arrow: true
    });
    //   tippy('.videocall a', {
    //     placement: 'top-end',
    //     arrow: true
    // });

    /*=====================
      02. Background Image js
      ==========================*/
      $(".bg-top").parent().addClass('b-top');
      $(".bg-bottom").parent().addClass('b-bottom');
      $(".bg-center").parent().addClass('b-center');
      $(".bg_size_content").parent().addClass('b_size_content');
      $(".bg-img").parent().addClass('bg-size');
      $('.bg-img').each(function () {
        var el = $(this),
        src = el.attr('src'),
        parent = el.parent();
        parent.css({
            // 'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'display': 'block'
        });
        el.hide();
    });

    /*=====================
      03. OwlCarousel js
      ==========================*/
      var owl_carousel_custom_recent = {
        init: function () {
            var recent = $('.recent-slider');
            recent.owlCarousel({
                items: 3,
                dots: false,
                loop: true,
                margin: 15,
                nav: false,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
                responsive: {
                    768: {
                        items: 7
                    },
                    800: {
                        items: 7
                    },
                    801: {
                        items: 2
                    },
                    1366: {
                        items: 2
                    },
                    1600: {
                        items: 3
                    }
                }
            })
        }
    };
    owl_carousel_custom_recent.init();

    var owl_carousel_custom_testimonial = {
        init: function () {
            var recent = $('.testimonial-slider');
            recent.owlCarousel({
                items: 4,
                dots: false,
                loop: true,
                margin: 60,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: false,
                responsive: {
                    320: {
                        items: 1,
                        margin: 25,
                    },
                    575: {
                        items: 2,
                        margin: 25,
                    },
                    1070: {
                        items: 3,
                        margin: 25,
                    },
                    1600: {
                        items: 4
                    },
                }
            })
        }
    };
    owl_carousel_custom_testimonial.init();

    var owl_carousel_custom_price = {
        init: function () {
            var recent = $('.price-slider');
            recent.owlCarousel({
                items: 3,
                dots: false,
                loop: true,
                margin: 60,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: false,
                responsive: {
                    320: {
                        items: 1,
                        margin: 25,
                    },

                    601: {
                        items: 2,
                        margin: 25,
                    },
                    1070: {
                        items: 3,
                        margin: 25,
                    },
                    1600: {
                        items: 3
                    },
                }
            })
        }
    };
    owl_carousel_custom_price.init();

    var owl_carousel_custom_team = {
        init: function () {
            var recent = $('.team-slider');
            recent.owlCarousel({
                items: 2,
                dots: false,
                loop: true,
                margin: 20,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: false,
                responsive: {
                    320: {
                        items: 1
                    },
                    1199: {
                        items: 2
                    },
                }
            })
        }
    };
    owl_carousel_custom_team.init();

    var owl_carousel_custom_testimonial = {
        init: function () {
            var recent = $('.counter-slider');
            recent.owlCarousel({
                items: 4,
                dots: false,
                loop: true,
                margin: 60,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: false,
                responsive: {
                    320: {
                        items: 1,
                        margin: 25,
                    },
                    480: {
                        items: 2,
                        margin: 25,
                    },
                    575: {
                        items: 3,
                        margin: 25,
                    },
                    768: {
                        items: 4,
                        margin: 25,
                    },
                    1600: {
                        items: 4
                    },
                }
            })
        }
    };
    owl_carousel_custom_testimonial.init();

    /*=====================
         04. Chitchat Loder js
         ==========================*/
         $('.chitchat-loader').slideUp('slow', function () {
            $(this).remove();
        });

    /*=====================
         05. Search js
         ==========================*/
         $('.search').on('click', function (e) {
            $(this).siblings().toggleClass("open");
        });
         $('.close-search').on('click', function (e) {
            $(this).parent().parent().removeClass("open");
        });
         $('.search-right').on('click', function (e) {
            $(this).parent().parent().parent().parent().parent().parent().find(".form-inline").toggleClass("open");
        });
         $('.close-search').on('click', function (e) {
            $(this).parent().parent().removeClass("open");
        });

    /*=====================
         06. Mute js
         ==========================*/
         $('.mute').on('click', function (e) {
            $(this).children().toggleClass("off");
        });

    /*=====================
         07. Button Effect js
         ==========================*/
         $('.button-effect').on('click', function (e) {
            e.preventDefault();
            var self = $(this),
            wave = '.effect-wave',
            btnWidth = self.outerWidth(),
            x = e.offsetX,
            y = e.offsetY;
            self.prepend('<span class="effect-wave"></span>')
            $(wave)
            .css({
                'top': y,
                'left': x
            })
            .animate({
                opacity: '0',
                width: btnWidth * 2,
                height: btnWidth * 2
            }, 500, function () {
                self.find(wave).remove()
            })
        })

    /*=====================
         08. Collapse Title js
         ==========================*/
         $('.block-title').on('click', function (e) {
            e.preventDefault;
            var speed = 300;
            var thisItem = $(this).parent(),
            nextLevel = $(this).next('.block-content');
            if (thisItem.hasClass('open')) {
                thisItem.removeClass('open');
                nextLevel.slideUp(speed);
            } else {
                thisItem.addClass('open');
                nextLevel.slideDown(speed);
            }
        });

    /*=====================
         09. Refresh Request information next & previous button
         ==========================*/
         $('.refresh').on('click', function (e) {
            $(this).toggleClass('refreshed');
        });
         $('.req-info').on('click', function (e) {
            $(this).addClass('disabled');
        });
         $('.next').on('click', function (e) {
            $(this).parent().parent().siblings().addClass('open');
        });
         $('.previous').on('click', function (e) {
            $(this).parent().parent().parent().removeClass('open');
        });

         $('.chat-cont-toggle').on('click', function (e) {
            $('.chat-cont-setting ').toggleClass('open');
        });




    /*=====================
          10 .Full Screen
          ==========================*/

          $('.toggle-full-screen').on('click', function (e) {
            $('#videocall').toggleClass("active");
        })

    /*=====================
          11.Header fix
          ==========================*/
          $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 60) {
                $(".landing-header").addClass("fixed");
            } else {
                $(".landing-header").removeClass("fixed");
            }
        });
    /*=====================
      12.Tap on Top
      ==========================*/
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.tap-top').fadeIn();
        } else {
            $('.tap-top').fadeOut();
        }
    });
      $('.tap-top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    /*=====================
           13. Customizer
           ==========================*/
           
           $('.cog-click').on('click', function () {
            $('.setting-sidebar').css("right", "0px");
        });
           $(".cog-close").on('click', function () {
            $('.setting-sidebar').css("right", "-400px");
        });
           $(".theme-layout li").on('click', function () {
            $(".theme-layout li").removeClass('active');
            $(this).addClass("active");
            var themeLayout = $(this).attr("data-attr");
            $("body").attr("class", themeLayout);
        });
           var body_event = $("body");
           body_event.on("click", ".rtl-setting", function () {
            $(this).toggleClass('rtl');
            $('body').removeClass('rtl');
            if ($('.rtl-setting').hasClass('rtl')) {
                $('.rtl-setting').text('LTR');
                $('body').addClass('rtl');
            } else {
                $('.rtl-setting').text('RTL');
            }
            return false;
        });
           body_event.on("click", ".themes-content li", function () {
            $(this).addClass('active').siblings().removeClass('active');
            $color = $(this).attr("data-attr");
            $("#color").attr("href", "../assets/css/" + $color + ".css");
            return false;
        });

    /*=====================
    14 footer responsive js
    ==========================*/
    var contentwidth = jQuery(window).width();
    if ((contentwidth) < '768') {
        jQuery('.footer-title h3').append('<span class="according-menu"></span>');
        jQuery('.footer-title').on('click', function () {
            jQuery('.footer-title').removeClass('active');
            jQuery('.footer-contant').slideUp('normal');
            if (jQuery(this).next().is(':hidden') == true) {
                jQuery(this).addClass('active');
                jQuery(this).next().slideDown('normal');
            }
        });
        jQuery('.footer-contant').hide();
    } else {
        jQuery('.footer-contant').show();
    }
    /*=====================
        15. Pin box
        ==========================*/
        $('.ti-pin2').on('click', function () {
            $(this).parent().parent().parent().toggleClass('pined');
        });

    /*=====================
        16 Reminder
        ==========================*/
        $(".reminder-count li").on('click', function () {
            $('.reminder-count li').removeClass('active');
            $(this).addClass('active');
        });

        $('.Show-reminder').on('click', function (e) {
            $('.target-reminder-list').show(500);
            $('.Show-reminder').hide(0);
            $('.Hide-reminder').show(0);
        });
        $('.Hide-reminder').on('click', function (e) {
            $('.target-reminder-list').hide(500);
            $('.Show-reminder').show(0);
            $('.Hide-reminder').hide(0);
        });
        $('.toggle').on('click', function (e) {
            $('.target-reminder-list').toggle('slow');
        });

    /*=====================
        17 set wallpaper onclick
        ==========================*/
        $('.wallpaper li.bg-color').on('click', function () {
            var color = $(this).css('background-image');
            $(".wallpaper li").removeClass('active');
            $(this).addClass("active");
            $(".chitchat-main .messages").css({
                'background-image': color,
                'background-blend-mode': 'unset',
            });
        });
        $('.wallpaper li.bg-size').on('click', function () {
            var color = $(this).children(".bg-img").attr('src');
            $(".wallpaper li").removeClass('active');
            $(this).addClass("active");
            $(".chitchat-main .messages").css({
                'background-image': 'url(' + color + ')',
                'background-color': 'transparent'
            });
        });

    /*=====================
        18 custom tab
        ==========================*/
        $(".contact-log-main li , .call-log-main li").on('click', function () {
            $(this).parent().find("li").removeClass("active");
            $(this).addClass("active");
        });
        $("#myTab1 li a").on('click', function () {
            var active_class = $(this).attr("data-to");
            $('.messages.custom-scroll').removeClass("active");
            $('#' + active_class).addClass("active");
        });
        $(".chat-tabs .nav-tabs li[data-to]").on('click', function () {
            $('.chitchat-main .tabto').removeClass("active");
            var active_class = $(this).attr("data-to");
            $('.' + active_class).addClass("active");
        });
        $(".sidebar-top  a").on('click', function () {
            $(".sidebar-top  a").removeClass("active");
            $(this).addClass("active");
            $('.dynemic-sidebar').removeClass("active");
            var active_class = $(this).attr("href");
            $('#' + active_class).addClass("active");
        });


    /*=====================
      22. toggle classes
      ==========================*/
      $('.mobile-sidebar').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
    });
      $('.chat-main .chat-box').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
    });
      $('.group-main .group-box').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
    });
      $('.call-log-main .call-box').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
    });
      $('.contact-log-main .contact-box').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
    });

      $('.mobile-back').on('click', function () {
        $('.chitchat-container').toggleClass("mobile-menu");
        $('.main-nav').removeClass("on");
    });


      $('.chat-friend-toggle').on('click', function () {
        $('.chat-frind-content').toggle();
    });

      $('.gr-chat-friend-toggle').on('click', function () {
        $('.gr-chat-frind-content').toggle();
    });
      $('.msg-setting').on('click', function () {
        $(this).siblings('.msg-dropdown').toggle();
    });
      $(".favourite").on('click', function () {
        $(this).toggleClass("btn-outline-primary").toggleClass("btn-primary");
    });
      $(".edit-btn").on('click', function () {
        $(this).parent().parent().toggleClass("open");
    });

    /*=====================
        23. ADD tO-DO LIST
        ==========================*/

        $('.add').on('click', function (e) {
            var total_element = $(".element").length;
            var lastid = $(".element:last").attr("id");
            var split_id = lastid.split("_");
            var nextindex = Number(split_id[1]) + 1;
            var max = 100;
            if (total_element < max) {
                $(".element:last").after("<div class='element' id='div_" + nextindex + "'></div>");
                $("#div_" + nextindex).append("<form class='p-15'><div class='form-group' style='display :flex'><input type='checkbox' id='txt_" + nextindex + "'/><input type='text' class='m-l-15'/></div><div class='todo-buttons'><a class='badge badge-success font_label' href='#'' style='padding: 7px 12px'>Save</a><a class='badge badge-outline-primary font_label' href='#'' style='margin-left : 15px;padding: 7px 12px'>Cancel</a><span id='remove_" + nextindex + "' class='remove' style='margin-left : 40px'><i class='fa fa-trash' style='font-size : 20px'></i></span></div></form>");
            }
        });
        $('.todo-list').on('click', '.remove', function () {
            var id = this.id;
            var split_id = id.split("_");
            var deleteindex = split_id[1];
            $("#div_" + deleteindex).remove();
        });

        $('.trashbtn').on('click', function (e) {
            $(".todo-main-content .default-form").remove();
        });

    /*=====================
           24. right sidebar
           ==========================*/
           $(".app-list-ul  a").on('click', function () {
            $(".app-list-ul  a").removeClass("active");
            if ($(window).width() >= 1500) {
                $(".chitchat-main").removeClass("small-sidebar");
            }
            $(this).addClass("active");
            $('.apps-ul li').removeClass("active");
            var active_class = $(this).attr("href");
            $('#' + active_class).addClass("active");
        });

           $('.apps-toggle').on('click', function () {
            if (!$('body').hasClass('sidebar-active main-page menu-active'))
                $('body').toggleClass('sidebar-active main-page');
            $('body').removeClass('menu-active');
            $('.app-sidebar').toggleClass('active');
            $('.chitchat-main').toggleClass("small-sidebar");
        });



    /*=====================
           27. profile open close
           ==========================*/
           $('.menu-trigger, .close-profile').on('click', function (e) {
            $('body').toggleClass('menu-active'); //add class
            $('.app-sidebar').toggleClass('active'); //remove
            $('.chitchat-main').toggleClass("small-sidebar"); //remove
            if($( window ).width() <= 1440 ) {
                $('.chitchat-container').toggleClass('sidebar-overlap');
              $('.chitchat-main').addClass("small-sidebar"); //remove
          }
          if ($('body').hasClass('menu-active')) {
            $('body').addClass('sidebar-active main-page');
            $('.app-sidebar').removeClass('active');
            $('.chitchat-main').removeClass("small-sidebar");
        }

    });
    /*=====================
           28. dropdown
           ==========================*/

           $('.dropdown').click(function () {
            $(this).attr('tabindex', 1).focus();
            $(this).toggleClass('active');
            $(this).find('.dropdown-menu').slideToggle(300);
        });
           $('.dropdown').focusout(function () {
            $(this).removeClass('active');
            $(this).find('.dropdown-menu').slideUp(300);
        });
           $('.dropdown .dropdown-menu li').click(function () {
            $(this).parents('.dropdown').find('span').text($(this).text());
            $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
        });

    /*=====================
        29. Sidebar setting
        ==========================*/

        $(".sidebar-setting .two-column").on('click', function () {
            $(".sidebar-setting li").removeClass('active');
            $(this).addClass("active");
            $('.theme-title .icon-btn').removeClass("btn-outline-light").removeClass("btn-outline-primary");
            $('.main-nav').removeClass("on");
        });
        $(".sidebar-setting .three-column").on('click', function () {
            $(".sidebar-setting li").removeClass('active');
            $(this).addClass("active");
            $('.theme-title .icon-btn').addClass("btn-outline-light").addClass("btn-outline-primary");
            $('.main-nav').addClass("on");
        });

    /*=====================
        Chat 
        ==========================*/

        // $(".messages").animate({ scrollTop: $(document).height() }, "fast");
        // $('.submit').on('click', function() {
        //     typingMessage();
        //     newMessage();
        // });
        // $(window).on('keydown', function(e) {
        //     if (e.which == 13) {
        //         if(!e.target.value){
        //             return false
        //         }
        //         typingMessage();
        //         newMessage();
        //         return false;
        //     }
        // });

//        $(".emojis-sub-contain ul li").click(function () {
//            var number = $(this).html();
//            $("#setemoj").focus().val(function() {
//               return this.value + number;
//               $(".messages").animate({
//                scrollTop: $(document).height()
//            }, "fast");
//           });
//            $('#send-msg').removeClass('disabled').removeAttr("disabled")
//        });

        
//        $('#send-msg').addClass('disabled').attr("disabled", "disabled")
//        $("#setemoj").keyup(function(e){
//            if(!e.target.value){
//                $('#send-msg').addClass('disabled').attr("disabled","disabled")
//            } else {
//                $('#send-msg').removeClass('disabled').removeAttr("disabled")
//            }
//        });

        // function newMessage() {
        //     var message = $('.message-input input').val();
        //     if($.trim(message) == '') {
        //         return false;
        //     }
        //     $('<li class="replies"> <div class="d-flex"> <div class="profile mr-4 bg-size" style="background-image: url(&quot;../assets/images/contact/1.jpg&quot;); background-size: cover; background-position: center center;"></div><div class="flex-grow-1"> <div class="contact-name"> <h5>Alan josheph</h5> <h6>01:42 AM</h6> <ul class="msg-box"> <li> <h5>' + message + '</h5> </li></ul> </div></div></div></li>').appendTo($('.messages .chatappend'));
        //     $('.message-input input').val(null);
        //     $('.chat-main .active .details h6').html('<span>You : </span>' + message);
        //     $(".messages").animate({ scrollTop: $(document).height() }, "fast");
        // };

    //     function typingMessage() {
    //       $('<li class="sent last typing-m"> <div class="d-flex"> <div class="profile mr-4 bg-size" style="background-image: url(&quot;../assets/images/contact/2.jpg&quot;); background-size: cover; background-position: center center; display: block;"><img class="bg-img" src="../assets/images/contact/2.jpg" alt="Avatar" style="display: none;"></div><div class="flex-grow-1"> <div class="contact-name"> <h5>Josephin water</h5> <h6>01:42 AM</h6> <ul class="msg-box"> <li> <h5> <div class="type"> <div class="typing-loader"></div></div></h5> </li></ul> </div></div></div></li>').appendTo($('.messages .chatappend'));
    //       $(".messages").animate({ scrollTop: $(document).height() }, "fast");   
    //       setTimeout(function() {
    //         $('.typing-m').hide(); 
    //         $('<li class="sent"> <div class="d-flex"> <div class="profile mr-4 bg-size" style="background-image: url(&quot;../assets/images/contact/2.jpg&quot;); background-size: cover; background-position: center center; display: block;"></div><div class="flex-grow-1"> <div class="contact-name"> <h5>Josephin water</h5> <h6>01:35 AM</h6> <ul class="msg-box"> <li> <h5> Sorry I busy right now, I will text you later </h5> <div class="badge badge-success sm ml-2"> R</div></li></ul> </div></div></div></li>').appendTo($('.messages .chatappend'));
    //         $(".messages").animate({ scrollTop: $(document).height() }, "fast");   
    //     }, 2000);
    //   }



    /*=====================
       25. Sticker
       ==========================*/
       $('.sticker-contain ul li').on('click', function (e) {
        var sticker = $(this).children().html();
        $('<li class="replies"> <div class="d-flex"> <div class="profile mr-4 bg-size" style="background-image: url("../assets/images/contact/1.jpg"); background-size: cover; background-position: center center;"></div><div class="flex-grow-1"> <div class="contact-name"> <h5>Alan josheph</h5> <h6>01:42 AM</h6> <ul class="msg-box"> <li> <h5>' + sticker + '</h5> </li></ul> </div></div></div></li>').appendTo($('.messages .chatappend'));
        $('.chat-main .active .details h6').html('<span>You : </span>' + sticker);
        var test = $(this).height();
                $(".messages").animate({

            scrollTop: $(document).height()
        }, "fast");
        $(".sticker-contain").removeClass("open");
        $(".toggle-sticker").removeClass("active");
    });

    // Toggle sticker
    $('.toggle-sticker').on('click', function () {
        $(this).toggleClass("active");
        $('.sticker-contain').toggleClass("open");
        $('.emojis-contain').removeClass("open");
        $(".toggle-emoji").removeClass("active");
        $('.contact-poll-content').css('display', 'none');
    });

    // Toggle emoji
    $('.toggle-emoji').on('click', function (e) {
        e.stopPropagation();
        $(this).toggleClass("active");
        $('.emojis-contain').toggleClass("open");
        $(".sticker-contain").removeClass("open");
        $(".toggle-sticker").removeClass("active");
        $('.contact-poll-content').css('display', 'none');
    });

    // Toggle poll
    $('.contact-poll').on('click', function (e) {
        $('.contact-poll-content').toggle();
        $('.emojis-contain').removeClass("open");
        $(".toggle-emoji, .toggle-sticker").removeClass("active");
    });

    // Outside click
    $(document).on('click', function (e) {
        var outside_space = $(".outside");
        if (!outside_space.is(e.target) &&
            outside_space.has(e.target).length === 0) {
            $(".sticker-contain").removeClass("open");
        $(".emojis-contain").removeClass("open");
        $(".toggle-emoji, .toggle-sticker").removeClass("active");
        $('.contact-poll-content').css('display', 'none');
        $('.chat-frind-content').css('display', 'none');
    }
})

    $(".mode").on("click", function () {
        $('.mode i').toggleClass("fa-moon-o").toggleClass("fa-lightbulb-o");
        $('body').toggleClass("dark");
    });       
    $(".mainnav").on("click", function () {
        $('.theme-title .icon-btn').toggleClass("btn-outline-light").toggleClass("btn-outline-primary");
        $('.main-nav').toggleClass("on");
    }); 
    
    $(".close-apps").on("click", function () {
        $('.apps-ul li').removeClass("active");
        $('.chitchat-main').addClass("small-sidebar");
    });

    $(".close-app").on("click", function () {
        $('body').removeClass("sidebar-active");
        $('.app-sidebar').removeClass("active");
    });
    
    $(".close-panel").on("click", function () {
        $('.dynemic-sidebar, .button-effect.active, sidebar-top .sidebar-top > li > a').removeClass("active");
        $('.recent-default').addClass("active");
    });
    
    $("body").on("click", ".colors li", function () {
        $(this).addClass('active').siblings().removeClass('active');
        var $color = $(this).attr("data-attr");
        $("#color").attr("href", "../assets/css/" + $color + ".css");
        return false;
    });



})(jQuery);


