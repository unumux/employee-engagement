// Main JS should go here!
// Include scripts using Browserify by doing:
var $ = require("jquery");

// FAQs
$(".faqs__faq").attr("data-collapsed", "true").find(".faqs__answer").hide();

$(".faqs").on("click", "[data-collapsed='true'] .faqs__question", function () {
    $(this).parent().attr("data-collapsed", "false").find(".faqs__answer").slideDown();
});

$(".faqs").on("click", "[data-collapsed='false'] .faqs__question", function () {
    $(this).parent().attr("data-collapsed", "true").find(".faqs__answer").slideUp();
});


// Carousel
var currentIndex = 0,
  items = $('.page-header__container div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.page-header__container div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 10000);

// $('.next').click(function() {
//   clearInterval(autoSlide);
//   currentIndex += 1;
//   if (currentIndex > itemAmt - 1) {
//     currentIndex = 0;
//   }
//   cycleItems();
// });

// $('.prev').click(function() {
//   clearInterval(autoSlide);
//   currentIndex -= 1;
//   if (currentIndex < 0) {
//     currentIndex = itemAmt - 1;
//   }
//   cycleItems();
// });
