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
  document.location.replace("/result.html")
})

$('.menu-mobile').click(function() {
  $('.navigation-mobile').css('visibility', 'visible');
  $('.navigation-mobile').css('opacity', '100%');
})
$('.menu-close').click(function() {
  $('.navigation-mobile').css('visibility', 'hidden');
  $('.navigation-mobile').css('opacity', '0');
})
