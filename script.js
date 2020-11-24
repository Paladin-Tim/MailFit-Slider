"use strict";

$(document).ready(function () {

    // Initialize Swiper 
    let swiper = new Swiper(".swiper-container", {
        slidesPerColumn: 2,
        spaceBetween: 30,
        observer: true,
        observeSlideChildren: true,
        roundLengths: true,
        watchOverflow: true,
        centerInsufficientSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
            slideNextTransitionStart: function() {
                let transNext = swiper.getTranslate() - 220;

                if (transNext !== -0) {
                swiper.setTranslate(transNext + (-(transNext % 220)));
                } else {
                    swiper.setTranslate(transNext); 
                }
                
            },
            slidePrevTransitionStart: function() {
                let transPrev = swiper.getTranslate() + 220;
                
                if (transPrev !== 0) {
                    swiper.setTranslate(transPrev - (transPrev % 220));
            } else {
                swiper.setTranslate(transPrev); 
            }
            },
           
        },
        breakpoints: {
            // when window width is >= 375px
            375: {
              slidesPerView: 2,
              slidesPerColumn: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              slidesPerColumn: 2,
            },
            // when window width is >= 1440px
            1440: {
              slidesPerView: 6,
              slidesPerColumn: 2,
            }
          }
      });

// --- FILTERS ----

$('.filter').click(function() {
    if ($(this).hasClass('all')) {
        $(this).addClass('filter-active');
        $('.filter').not('.all').each(function() {
            $(this).removeClass('filter-active');
        });
        $('.swiper-slide').each(function() {
            $(this).animate({opacity: '1'}, 500).css({'display': 'flex'});
        }); 
        swiper.update();
        return;
    } 
    if ($(this).hasClass('italy')) {
        $(this).addClass('filter-active');
        $('.filter').not('.italy').each(function() {
            $(this).removeClass('filter-active');
        });
        $('.italy').each(function() {
            $(this).animate({opacity: '1'}, 500).css({'display': 'flex'});
        });
        $('.swiper-slide').not('.italy').each(function() {
            $(this).animate({opacity: '0'}, 500).css({'display': 'none'});
        });
        swiper.update();
        return;
    }
    if ($(this).hasClass('germany')) {
        $(this).addClass('filter-active');
        $('.filter').not('.germany').each(function() {
            $(this).removeClass('filter-active');
        });
        $('.germany').each(function() {
            $(this).animate({opacity: '1'}, 500).css({'display': 'flex'});
        });
        $('.swiper-slide').not('.germany').each(function() {
            $(this).animate({opacity: '0'}, 500).css({'display': 'none'});
        });
        swiper.update();
        return;
    }
    if ($(this).hasClass('greece')) {
        $(this).addClass('filter-active');
        $('.filter').not('.greece').each(function() {
            $(this).removeClass('filter-active');
        });
        $('.greece').each(function() {
            $(this).animate({opacity: '1'}, 500).css({'display': 'flex'});
        });
        $('.swiper-slide').not('.greece').each(function() {
            $(this).animate({opacity: '0'}, 500).css({'display': 'none'});
        });
        swiper.update();
        return;
    }
    if ($(this).hasClass('turkey')) {
        $(this).addClass('filter-active');
        $('.filter').not('.turkey').each(function() {
            $(this).removeClass('filter-active');
        });
        $('.turkey').each(function() {
            $(this).animate({opacity: '1'}, 500).css({'display': 'flex'});
        });
        $('.swiper-slide').not('.turkey').each(function() {
            $(this).animate({opacity: '0'}, 500).css({'display': 'none'});
        });
        swiper.update();
        return;
    }
    if ($(this).hasClass('spain')) {
        $(this).addClass('filter-active');
        $('.filter').not('.spain').each(function() {
            $(this).removeClass('filter-active');
        });
        $('.spain').each(function() {
            $(this).animate({opacity: '1'}, 500).css({'display': 'flex'});
        });
        $('.swiper-slide').not('.spain').each(function() {
            $(this).animate({opacity: '0'}, 500).css({'display': 'none'});
        });
        swiper.update();
        return;
    }
    if ($(this).hasClass('portugal')) {
        $(this).addClass('filter-active');
        $('.filter').not('.portugal').each(function() {
            $(this).removeClass('filter-active');
        });
        $('.portugal').each(function() {
            $(this).animate({opacity: '1'}, 500).css({'display': 'flex'});
        });
        $('.swiper-slide').not('.portugal').each(function() {
            $(this).animate({opacity: '0'}, 500).css({'display': 'none'});
        });
        swiper.update();
        return;
    }
})

// ---- FILTERS MOBILE ----

$('.slct, .fa-times').click(function () {
    let dropBlock = $(this).parent().find(".drop");

    if (dropBlock.is(":hidden")) {
      dropBlock.slideDown();
      $(this).parent().find('.fa-angle-down').hide();
      $(this).parent().find('.fa-angle-up').show();

      $(this).addClass("active");

      $(".drop")
        .find("li")
        .click(function () {
          let selectResult = $(this).html();

          $(this).parent().parent().find("input").val(selectResult);
          $(this)
            .parent()
            .parent()
            .find(".slct")
            .removeClass("active")
            .html(selectResult);

          dropBlock.slideUp();
        });

    } else {
      $(this).removeClass("active");
      dropBlock.slideUp();
      $(this).parent().find('.fa-angle-up').hide();
      $(this).parent().find('.fa-angle-down').show();
    }

    return false;
  });

// --- CARD ANIMATION ---

      $('.swiper-slide').hover(
          function () {
          let hovered = $(this);

          if ($(document).width() >= 1440) {
          if (hovered.offset().left >= 1300) {
              $(hovered).find('.description').animate({opacity: '1'}, 800).css({'right': '180px', 'border-radius': '8px 0 0 8px', 'visibility': 'visible'});
          } else {
            $(hovered).css({'z-index': '1'});
            $(hovered).find('.description').animate({opacity: '1'}, 800).css({'left': '180px', 'border-radius': '0 8px 8px 0', 'visibility': 'visible'});
          }}
          },
          function() {
            if ($(document).width() >= 1440) {
            $(this).find('.description').animate({opacity: '0'}, 400).css({'visibility': 'hidden'});
          }
        }
          )

          function slideClick() {
        $('.swiper-slide').click(function () {
            let clicked = $(this);
            let startPosLeft = $(this).offset().left;

            if ($(document).width() <= 1439 && $(document).width() >= 767) {
                $(clicked).addClass('active').css({'z-index': '9999'});
           
            if (clicked.offset().left >= 500) {
                $(clicked).find('.description').animate({opacity: '1'}, 800).css({'right': '180px', 'border-radius': '8px 0 0 8px', 'width': '430px', 'visibility': 'visible'});
                $(clicked).find('.fas').css({'right': 'unset', 'left': '2%'});
                $(clicked).find('.description p').css({'padding-left': '30px'});
                $(clicked).find('.description button').css({'margin-left': '30px'});
            } else {
              $(clicked).find('.description').animate({opacity: '1'}, 800).css({'left': '180px', 'border-radius': '0 8px 8px 0', 'visibility': 'visible'});
            }
            
            } 
             if ($(document).width() <= 767) {
                    $(clicked).addClass('active').css({'z-index': '9999'});
                
                    if (clicked.offset().top >= 300 && clicked.offset().left >= 150) {
                        $(clicked).animate({left: '-220'});
                        $(clicked).find('.description').animate({opacity: '1'}, 400).css({'right': 'unset', 'top': '-300px', 'border-radius': '8px 8px 0 0', 'width': '390px', 'height': '290px', 'visibility': 'visible'});
                        $(clicked).find('.fas').css({'right': '8%', 'left': 'unset'});
                        $(clicked).find('.description p').css({'padding-left': '30px'});
                        $(clicked).find('.description button').css({'margin-left': '30px'});
                    } 
                    else if (clicked.offset().top >= 300 && clicked.offset().left <= 150) {
                        $(clicked).find('.description').animate({opacity: '1'}, 400).css({'right': 'unset', 'top': '-300px', 'border-radius': '8px 8px 0 0', 'width': '390px', 'height': '290px', 'visibility': 'visible'});
                        $(clicked).find('.fas').css({'right': '8%', 'left': 'unset'});
                        $(clicked).find('.description p').css({'padding-left': '30px'});
                        $(clicked).find('.description button').css({'margin-left': '30px'});

                    }
                    else if (clicked.offset().top <= 300 && clicked.offset().left >= 150) {
                        $(clicked).animate({left: '-220'});
                        $(clicked).find('.description').animate({opacity: '1'}, 400).css({'left': 'unset', 'top': '265px','border-radius': '0 0 8px 8px', 'height': '285px', 'visibility': 'visible'});
                        
                    }
                    else if (clicked.offset().top <= 300 && clicked.offset().left <= 150) {
                        $(clicked).find('.description').animate({opacity: '1'}, 400).css({'left': 'unset', 'top': '265px', 'height': '285px', 'border-radius': '0 0 8px 8px', 'visibility': 'visible'});
                      }
             }

            // Mouse up
             $(document).mouseup(function (e){ 
                let currentPosLeft = $(clicked).offset().left;
                if (!$(clicked).is(e.target) && $(clicked).has(e.target).length === 0) { 
                        $(clicked).find('.description').animate({opacity: '0'}, 400).css({'visibility': 'hidden'});
                        $(clicked).removeClass('active'); 
                        $(clicked).css({'z-index': '-1'});
                            if (currentPosLeft !== startPosLeft) {
                                $(clicked).animate({left: '0'});
                            }
                }
              });
        })
    }

// Close button
        $('.fa-times').click(function() {
          $(this).parents('.swiper-slide').off('click', slideClick);
            $(this).parent().animate({opacity: '0'}, 400).css({'visibility': 'hidden'});
            $(this).parents('.swiper-slide').removeClass('active');
            if ($(this).parents('.swiper-slide').not('active')) {
                $(this).parents('.swiper-slide').on('click', slideClick);
            }
        })

        $('.swiper-slide').click(slideClick());
});