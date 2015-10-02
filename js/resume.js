$(document).ready(function() {
  var mq = window.matchMedia( "(min-width: 768px)" );
  if (mq.matches){
    $('.start-button').click( function(){
      $(window).scrollTop(0);
      $('.white-bg').fadeOut(1000);
      $("body").css("overflow-y", "auto");
      $('.bg-notebook').addClass('slide-up');
      setTimeout(function() {
        title_animate()
        $('.section-body').addClass('fade-in')
        $('.section-heading').addClass('shrink')
        $('.section2-heading').addClass('shrink')
      }, 1500);
    })
  }
  else{
    setTimeout(function(){ title_animate() }, 300);
  }
});

function title_animate(){
  $('.row').removeClass('preload');
  $('*[class~="anim-hide"]').each(function(i, e) {
    setTimeout(function() {
      $(e).attr("class", "letter animate");
    }, (300*i));
  });
}