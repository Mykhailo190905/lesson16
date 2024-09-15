$(function () {
  
  $("#tabs").tabs();

  $('.slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    LazyLoad: 'ondemand',
    swipeToSlide: true,
    modileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      } ,
      {
      breakpoint: 560,
      settings: {
        dots: false
      }
    }
   
    ]

  });
});
