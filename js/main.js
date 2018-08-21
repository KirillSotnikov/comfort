$('.gallery .click_more').click(function() {
    $('#second_gallery').toggleClass('hidden');
    $('.click_more .btn').toggleClass('active');
    $('.click_more img').toggleClass('active');
});

$('[data-tap1]').click(function() {
    $('.about_container_card [data-tap1] img').toggleClass('active');
    $('.about_container_card.first').toggleClass('active');
    $('#card1').toggleClass('hidden');
});

$('[data-tap2]').click(function() {
    $('.about_container_card [data-tap2] img').toggleClass('active');
    $('.about_container_card.second').toggleClass('active');
    $('.about_container_card_image').toggleClass('active');
});

$('[data-tap3]').click(function() {
    $('.about_container_card [data-tap3] img').toggleClass('active');
    $('.about_container_card.third').toggleClass('active');
    $('.about_container_card_grid.third').toggleClass('active');
});

$('.header .menu').click(function() {
    $('.mobile-menu').addClass('active');
    $('section.first').addClass('transform');
    $('.header .menu').addClass('active');
    $('.header .close').addClass('active');
});
$('.header .close').click(function() {
    $('.mobile-menu').removeClass('active');
    $('section.first').removeClass('transform');
    $('.header .menu').removeClass('active');
    $('.header .close').removeClass('active');
});

$('.btn').click(function() {
    $('.modal_container').addClass('active');
});
$('.callback').click(function() {
    $('.modal_container').addClass('active');
    $(this).addClass('hidden');
});
$('.form-more_box span').click(function() {
    $('.modal_container').addClass('active');
    $('.name_modal').val($('.form-more_input').val());
});
$('.click_more .btn').click(function() {
    $('.modal_container').removeClass('active');
});
$('.modal_container .arrow_up').click(function() {
    $('.modal_container').removeClass('active');
    $('.callback').removeClass('hidden');
});
$('.btn_all').click(function() {
    $('.modal_gallery').addClass('active');
});
$('.close_modal').click(function() {
    $('.modal_gallery').removeClass('active');
});

$('[data-slide]').click(function() {
    var target = $(this).attr('data-slide');

    $('.plan-modal').addClass('active');
    $('.plan-modal_image').removeClass('active');
    $('.plan-modal_image' + target).addClass('active');
});

$('.plan-modal .close').click(function() {
    $('.plan-modal').removeClass('active');
});

function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
        scrollTop: $(id).offset ().top - offset
    }, 800);
    return false;
};

$('.modal_gallery_container').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="arrow left"><img src="img/icons/left-arrow.svg"></div>',
    nextArrow: '<div class="arrow right"><img src="img/icons/right-arrow.svg"></div>',
});