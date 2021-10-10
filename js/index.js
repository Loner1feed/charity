$(document).ready(function(){

    $('#event-slider').slick({
        // variableWidth: true
        slidesToShow: 3,
        infinite: false,
        dots: true,
        appendDots: $('#event-dots'),
        appendArrows: $('#event-arrows'),
        prevArrow: '<a href="javascript://" class="arrow arrow--prev eventSlider__arrow"><span class="icon-chevron-left"></span></a>',
        nextArrow: '<a href="javascript://" class="arrow arrow--next eventSlider__arrow"><span class="icon-chevron-right"></span></a>',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2.3
                }
            },

            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    arrows: false,
                }
            }
        ]
    })

    $('.header__toggler').click(function(){
        $(this).toggleClass('header__toggler--active');
        $('.header__mobile').toggleClass('header__mobile--active');
        $('.darkScreen').addClass('darkScreen--visible');
        $('.header__close').click(function(){
            $('#collapse-menu').removeClass('header__mobile--active');
            $('.header__toggler').removeClass('header__toggler--active');
            $('.header__mobile').removeClass('header__mobile--active');
            $('.darkScreen').removeClass('darkScreen--visible');
        })
    })

    $('.faq__heading').closest('.faq__item').find('.faq__body').slideToggle()
    $('.faq__heading').closest('.faq__item--toggled').find('.faq__body').slideToggle()

    $('.faq__heading').click(function() {
        $(this).closest('.faq__item').find('.faq__body').slideToggle()
        $(this).closest('.faq__item').toggleClass('faq__item--toggled')
    })

    $('#orgs-slider').slick({
        slidesToShow: 4,
        dots: true,
        infinite: false,
        appendDots: $('#orgs-dots'),
        appendArrows: $('#orgs-arrows'),
        prevArrow: '<a href="javascript://" class="arrow arrow--prev eventSlider__arrow"><span class="icon-chevron-left"></span></a>',
        nextArrow: '<a href="javascript://" class="arrow arrow--next eventSlider__arrow"><span class="icon-chevron-right"></span></a>',
        responsive: [
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },

            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    })

    $('#projects-tabs').tabs()

    $('.need-help-btn').click(function(){
        $('.popups').addClass('popups--show');
        $('#need-help').addClass('popup--show');
        $('.popup__close').click(function(){
            $('.popups').removeClass('popups--show');
            $('#need-help').removeClass('popup--show');
        })
    })

    $('.take-help-btn').click(function(){
        $('.popups').addClass('popups--show');
        $('#take-help').addClass('popup--show');
        $('.popup__close').click(function(){
            $('.popups').removeClass('popups--show');
            $('#take-help').removeClass('popup--show');
        })
    })
})