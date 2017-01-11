// Main JS should go here!


// FAQs
$(".faqs__faq").attr("data-collapsed", "true").find(".faqs__answer").hide();

$(".faqs").on("click", "[data-collapsed='true'] .faqs__question", function () {
    $(this).parent().attr("data-collapsed", "false").find(".faqs__answer").slideDown();
});

$(".faqs").on("click", "[data-collapsed='false'] .faqs__question", function () {
    $(this).parent().attr("data-collapsed", "true").find(".faqs__answer").slideUp();
});

$('.carousel').slick({
    dots: true
});

// Carousel
var currentIndex = 0,
  items = $('.page-header__container li'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.page-header__container li').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

//My shot at trying to make the dots on the header clickable
// $(document).ready(function () {
//     $('ol li').bind('click', function(){
//         var index = $(this).index() + 1;

//         $(".active").fadeOut(300);

//         $(".slider_" + index).fadeIn(300);        
//         $("li .slide__image").removeClass("active");
//         $(".slider_" + index).addClass("active");
//     });
// })