$(document).ready(function() {
    var numberSlide;
    $('.fourth-slider').slick({
      infinite: false,
      dots: false,
      asNavFor: '.number-slider'
    });
    $('.mob-slider').slick({
      infinite: false,
      dots: true,
      adaptiveHeight: true
    });
    $('.number-slider').slick({
      vertical: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      infinite: false,
      dots: false,
      arrows: false,
      asNavFor: '.fourth-slider'
    });
    $('.popup-form-slider').slick({
      vertical: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      infinite: false,
      dots: false,
      arrows: false,
      // asNavFor: '.fourth-slider'
    });
    var index = 0;
    $('.popup-form-btn').click(function(){
      $('.popup-form-slider').slick('slickNext');

      index = index + 1;
      $('.popup-left-step').eq(index).addClass('active').siblings().removeClass('active');
      $('.animation-hide-text').removeClass('active');
      // $('.animation-hide-text').removeClass('active2');
      $('.animation-hide-text').addClass('active2');
      let height = $('.popup-left-step.active').height();
      $('.popup-left-block').height(height);
      let height2 = $('.second-step.active').height();
      $('.sixth-main').height(height2 + 50);
      if(index == 1) {
        $('.popup-form-left').find('.animation-hide-text').text('Какова ваша цель');
      }
      if(index == 2) {
        $('.popup-form-left').find('.animation-hide-text').text('Вы');
      }
      if(index == 3) {
        $('.popup-form-left').find('.animation-hide-text').text('Внесите контактные данные для резервирования скидки');
        $('.popup-form-left').find('.animation-hide-text').addClass('small');
      }
    });
  $('.fourth-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    numberSlide = 1;
    numberSlide = numberSlide + nextSlide;
    let textNumber = '0' + numberSlide;
    setTimeout(function() {
      $('.fourth-value').text(textNumber);
    },1000)

    wowSlide.init();
    setTimeout(function(){

      let top = $(window).scrollTop();
      $('body,html').animate({scrollTop: top + 1});
    }, 200)
  });
  $('.seventh-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    wowSlide.init();
    setTimeout(function(){
      let top = $(window).scrollTop();
      $('body,html').animate({scrollTop: top + 1});
    }, 200);
  });
  $('.seventh-slider').slick({
    infinite: true,
    dots: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false
        }
      }
    ]
  });
  $('.header-menu').click(function() {
    $('.menu').addClass('active');
    setTimeout(function(){
      $('.menu-list').addClass('active');
      $('.menu-img').addClass('active');
    }, 500)
  });
  $('.menu-close').click(function() {
    setTimeout(function(){
      $('.menu').removeClass('active');
    }, 500)
    $('.menu-list').removeClass('active');
    $('.menu-img').removeClass('active');
  });
  $('.third-close').click(function() {
    $('.popup').removeClass('active');
    $('.third-popup-content').removeClass('active');
    $('.third-popup-content').addClass('close');
  });
  $('.third-item').click(function() {
    let number = $(this).data('number');
    $('.third-popup').eq(number).addClass('active');
    $('.third-popup').eq(number).find('.third-popup-content').removeClass('close');
    $('.third-popup').eq(number).find('.third-popup-content').addClass('active');
  });
  $('.seventh-btn').click(function() {
    $('.seventh-popup').addClass('active');
    $('.third-popup-content').removeClass('close');
    $('.third-popup-content').addClass('active');
  });
  $('.header-btn').click(function() {
    $('.contact-popup').addClass('active');
    $('.third-popup-content').removeClass('close');
    $('.third-popup-content').addClass('active');
  });
  var wow = new WOW(
    {
      boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
      animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
      offset:       200,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
      mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
      live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
      callback:     function(box) {
        // функция срабатывает каждый раз при старте анимации
        // аргумент box — элемент, для которого была запущена анимация
      },
      scrollContainer: null, // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
      resetAnimation: true
    }
  );
  wow.init();
  var wowSlide = new WOW(
    {
      boxClass:     'wowSlide',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
      animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
      offset:       200,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
      mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
      live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
      callback:     function(box) {
        // функция срабатывает каждый раз при старте анимации
        // аргумент box — элемент, для которого была запущена анимация
      },
      scrollContainer: ('slider-row-block') // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
    }
  );
  wowSlide.init();
  // var el = document.querySelector('.my-text');
  // var options = {
  //   size: 1350,         // Font size, defined by the height of the letters (pixels)
  //   weight: 10,         // Font weight (pixels)
  //   rounded: false,    // Rounded letter endings
  //   color: '#5F6062',  // Font color
  //   duration: 1,       // Duration of the animation of each letter (seconds)
  //   delay: [0, 0.05],  // Delay animation among letters (seconds)
  //   fade: 0.5,         // Fade effect duration (seconds)
  //   easing: d3_ease.easeCubicInOut.ease,   // Easing function
  //   individualDelays: false,               // If false (default), every letter delay increase gradually, showing letters from left to right always. If you want to show letters in a disorderly way, set it to true, and define different delays for the desired letters.
  // };
  // var myText = new Letters(el, options);
  // myText.show();
    $(".bgvideo").click(function() {
      var dataYoutube = $(this).parents('.video').attr('data-youtube');
      $(this).parents('.video').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    });
    $('[data-fancybox="gallery"]').fancybox({
    infobar: false,
    buttons: [
      "close"
    ]
  });
    $('.popup-left-text').click(function(){
      $(this).toggleClass('active');
      if($(this).hasClass('radio')) {

        $(this).closest('.popup-left-label').siblings().find('.popup-left-text').removeClass('active');
        $(this).closest('.popup-left-label').find('.popup-left-text').addClass('active');
      }
    });
    $('.sixth-btn').click(function(){
      $('.first-step').removeClass('active');
      $('.second-step').addClass('active');
      $('.animation-hide-text').addClass('active');
      let height = $('.popup-left-step.active').height();
      $('.popup-left-block').height(height);
      let height2 = $('.second-step.active').height();
      $('.sixth-main').height(height2 + 20);
    });
});
