console.log('Hellow World');

// $(document).ready(function() { 
// 	$('.hidden-wrap__btn').click(function(e) {
// 		e.preventDefault();
// 		$(".info").toggle(600);
// 	});
// }); 

$('.hidden-wrap__btn').click(function(event) {
  event.preventDefault();
  $(document.body).toggleClass('alternate-color2');
  $('.info').toggle('slow', function(){
    if($(document.body).hasClass('alternate-color2')){
      $('.hidden-wrap__btn').text('Скрыть');
    }else{
      $(document.body).removeClass('alternate-color2');
      $('.hidden-wrap__btn').text('Показать ещё');
    }
  });
});

(function(window,undefined) {
		History.Adapter.bind(window,'statechange',function(){
			var State = History.getState();
		});
		$('.btn__back').on('click', function(event) {
			event.preventDefault();
			var from = document.referrer;
			fromTo = from.toString();
			console.log(from);
			console.log(fromTo);
			window.location.href = fromTo;
			//$('.btn__back [href="#"]').attr("href", "fromTo");
			// if(history.length > 1){
			// 		history.go(-2);
			// }else if(history.length < 1){
			// 		history.go(-1);
			// }else{
			// 	history.pushState({param: 'Value'}, '', 'https://www.ulmart.ru/Rassrochka?sort=5&viewType=0&rec=false');
			// };
		});
})(window);

var wrapper = $('.layout_center_wrapper-project');
var linkOnline = $('#tab-nav-2');
var linkOffline = $('#tab-nav-1');
var tabWrapper = $('.tabs__wrapper');

linkOnline.click(function(){
	console.log('click online');
	$('.tabs__wrapper__offline').css('display', 'none');
	$('.tabs__wrapper__online').css('display', 'block');
});
linkOffline.click(function(){
	console.log('click offline');
	$('.tabs__wrapper__online').css('display', 'none');
	$('.tabs__wrapper__offline').css('display', 'block');
});

// $('.tabs__item__text span').click(function(){
//   if($('.screen').css('display', 'none')){
// 		$('.screen').css('display', 'block');
// 		// $('.tabs__wrapper').css('background-color', 'rgba(0,0,0,.6)');
// 	}
// 	return false;
// });

$('.screen span').click(function(){
	$('.screen').css('display', 'none');
	$('.tabs__wrapper').css('background-color', '#ffffff');
})

// $('.tabs__wrapper').click(function(){
// 	if($('.screen').css('display', 'block')){
// 		$('.screen').css('display', 'none');
// 		// $('.tabs__wrapper').css('background-color', '#ffffff');
// 	}
// })

