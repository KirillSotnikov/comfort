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
$('.click_more .btn').click(function() {
    $('.modal_container').removeClass('active');
});
$('.modal_container .arrow_up').click(function() {
    $('.modal_container').removeClass('active');
});