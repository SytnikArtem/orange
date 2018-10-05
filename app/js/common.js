$(document).ready(function() {
    var numberSlide;
    $('.fourth-slider').slick({
      infinite: false,
      dots: false
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
    }, 200)

  });
  $('.seventh-slider').slick({
    infinite: true,
    dots: false
  });
  $('.header-menu').click(function() {
    $('.menu').addClass('active');
    setTimeout(function(){
      $('.menu-list').addClass('active');
    }, 500)
  });
  $('.menu-close').click(function() {
    setTimeout(function(){
      $('.menu').removeClass('active');
    }, 500)
    $('.menu-list').removeClass('active');
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
      jQuery(this).parents('.video').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    });
});
