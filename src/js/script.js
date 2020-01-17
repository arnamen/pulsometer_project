/* $(document).ready(function(){
    $('.carousel__inner').slick({
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="/src/img/carousel/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/src/img/carousel/chevron-right-solid.png"></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
}); */

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false
});

document.querySelector('.next').onclick = function () {
  slider.goTo('next');
};


document.querySelector('.prev').onclick = function () {
  slider.goTo('prev');
};

(function($) {
  $(function() {
   
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
   
  });
  })(jQuery);

/*   $('.catalog-item__link').each(function(i){
    $(this).on('click', function(e){
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  })

$('.catalog-item__back').each(function(i){
  $(this).on('click', function(e){
    e.preventDefault();
    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  })
}) */

function toggleSlide(item){
  $(item).each(function(i){
    $(this).on('click', function(e){
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    });
  });
}

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back')