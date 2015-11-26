$(document).ready(function(){
    $('#lightgallery').lightGallery();

  // sticky header

  $(window).scroll(function(){
  	if ($(this).scrollTop() > 200) { 
  		$('header').addClass("sticky");
  	}
  	else { $('header').removeClass("sticky");
  }
  });

  // modifico la encuesta de survey monkey
  $('article.survey-page header').addClass('ocultar');

  // SMOOTH SCROOL 
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
 });