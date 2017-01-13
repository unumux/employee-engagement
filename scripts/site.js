// Main JS should go here!


// FAQs
$(".faqs__faq").attr("data-collapsed", "true").find(".faqs__answer").hide();

$(".faqs").on("click", "[data-collapsed='true'] .faqs__question", function () {
    $(this).parent().attr("data-collapsed", "false").find(".faqs__answer").slideDown();
});

$(".faqs").on("click", "[data-collapsed='false'] .faqs__question", function () {
    $(this).parent().attr("data-collapsed", "true").find(".faqs__answer").slideUp();
});


//Carousel 
$('.carousel').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: true
});
