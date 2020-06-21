$(function() {
	$(window).on("load scroll",function() {
		if ($(this).scrollTop() > 750) {
			$('#nav').addClass('is-show')
		} else {
			$('#nav').removeClass('is-show')
		}
	});
});
//$(function() {
//	$(window).on("load scroll",function() {
//		if($(this).scrollTop() > 3800) {
//			$('#content').addClass('is-show')
//		}
//	})
//})

//$('.fake').css('visibility','hidden');
  //$(window).on('load scroll', function() {
    //var windowHeight = $(window).height(),
      //topWindow = $(window).scrollTop();
    //$('.fake').each(function(){
      //var targetPosition = $(this).offset().top;
      //if(topWindow > targetPosition - windowHeight + 100){
        //$(this).addClass("fakeInDown");
      //}
    //});
  //});

$(window).on('load scroll', function() {
  var windowHeight = $(window).height(),
    windowTop = $(window).scrollTop();
    $('.fake').each(function() {
      var targetPosition = $(this).offset().top;
      if(windowHeight + windowTop > targetPosition + 100) {
        $(this).removeClass("fake");
      }
    })
})

$('sp-header__hum').on('click', function() {
  $('sp-header__hidden').addClass('')
})