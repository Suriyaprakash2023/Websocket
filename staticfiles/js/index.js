/*-----------------------------------------------------------------------------------

 Template Name:Chitchat
 Template URI: themes.pixelstrap.com/chitchat
 Description: This is Chat website
 Author: Pixelstrap
 Author URI: https://themeforest.net/user/pixelstrap

 ----------------------------------------------------------------------------------- */
// 01. Switchery  js
// 02. calling timer js
// 03 .Add class to body for identify this is application page
// 04. Mobile responsive screens

(function($) {
 "use strict";
 /*=====================
   01. Switchery  js
   ==========================*/
   var elem = document.querySelector('.js-switch');
   var init = new Switchery(elem, { color: '#3fcc35', size: 'small' });
   var elem = document.querySelector('.js-switch1');
   var init = new Switchery(elem, { color: '#3fcc35', size: 'small' });
   var elem = document.querySelector('.js-switch2');
   var init = new Switchery(elem, { color: '#3fcc35', size: 'small' });
   var elem = document.querySelector('.js-switch5');
   var init = new Switchery(elem, { color: '#3fcc35', size: 'small' });
   var elem = document.querySelector('.js-switch6');
   var init = new Switchery(elem, { color: '#3fcc35', size: 'small' });
   var elem = document.querySelector('.js-switch7');
   var init = new Switchery(elem, { color: '#3fcc35', size: 'small' });
   var elem = document.querySelector('.js-switch8');
   var init = new Switchery(elem, { color: '#1c9dea', size: 'small' });
   var elem = document.querySelector('.js-switch9');
   var init = new Switchery(elem, { color: '#1c9dea', size: 'small' });
   var elem = document.querySelector('.js-switch10');
   var init = new Switchery(elem, { color: '#1c9dea', size: 'small' });
   var elem = document.querySelector('.js-switch11');
   var init = new Switchery(elem, { color: '#1c9dea', size: 'small' });
   var elem = document.querySelector('.js-switch12');
   var init = new Switchery(elem, { color: '#1c9dea', size: 'small' });
   var elem = document.querySelector('.js-switch13');
   var init = new Switchery(elem, { color: '#1c9dea', size: 'small' });
   var elem = document.querySelector('.js-switch14');
   var init = new Switchery(elem, { color: '#1c9dea', size: 'small' });
   var elem = document.querySelector('.js-switch16');
   var init = new Switchery(elem, { color: '#1c9dea', size: 'small' });
   var elem = document.querySelector('.js-switch17');
   var init = new Switchery(elem, { color: '#1c9dea', size: 'small' });

 /*=====================
 02 . calling timer js
 ==========================*/
 var timer = new Timer();
 timer.start();
 timer.addEventListener('secondsUpdated', function(e) {
  $('#basicUsage').html(timer.getTimeValues().toString());
});
 timer.addEventListener('secondsUpdated', function(e) {
  $('#basicUsage3').html(timer.getTimeValues().toString());
});
 timer.addEventListener('secondsUpdated', function(e) {
  $('#basicUsage2').html(timer.getTimeValues().toString());
});

 /*=====================
 03 .Add class to body for identify this is application page
 ==========================*/
 var body = document.body;
 $(body).addClass("main-page");

 /*=====================
 04. Mobile responsive screens
 ==========================*/
 if($( window ).width() <= 992 ) {
  $(".main-nav").removeClass("on");
  $('body').removeClass("sidebar-active");
  $('.app-sidebar').removeClass("active");
  $('.chitchat-main').removeClass("small-sidebar");
};
if($( window ).width() <= 800 ) {
  $("ul.chat-main  li").on('click', function () {
   $('.main-nav').removeClass("on");
 });  
}


})(jQuery);
function toggleFullScreen() {    
  $('#videocall').toggleClass("active");
}

function removedefault(){
       $('body').removeClass("sidebar-active");
       $('.app-sidebar').removeClass("active");
}




