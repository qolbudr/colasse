$('.word-carousel').owlCarousel({
    nav: true,
    dots: false,
    navText: ["<a class=\"btn-circle\"><img src=\"img/icon/left.svg\" height=\"15\"></a>", "<a class=\"btn-circle\"><img src=\"img/icon/right.svg\" height=\"15\"></a>"],
    responsive:{
        0:{
            items:1
        },
    }
})

$(".jawaban").click(() => {
  document.location.replace("result.html")
})

$('.menu-mobile').click(function() {
  $('.navigation-mobile').css('visibility', 'visible');
  $('.navigation-mobile').css('opacity', '100%');
})
$('.menu-close').click(function() {
  $('.navigation-mobile').css('visibility', 'hidden');
  $('.navigation-mobile').css('opacity', '0');
})

$('.blog-carousel').owlCarousel({
    nav: true,
    dots: false,
    navText: ["<a class=\"btn-circle\"><img src=\"img/icon/left.svg\" height=\"15\"></a>", "<a class=\"btn-circle\"><img src=\"img/icon/right.svg\" height=\"15\"></a>"],
    responsive:{
        0:{
            items:1
        },
    }
})

$(".btn-slide").click(function() {
    $('html, body').animate({
        scrollTop: $("#summary").offset().top
    }, 1000);
});

var a = 0;
$(window).scroll(function() {

  var oTop = $('.info-covid').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.info-covid .font-medium').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
