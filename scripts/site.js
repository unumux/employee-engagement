// Main JS should go here!
// Include scripts using Browserify by doing:
var $ = require("jquery");


    $(document).on('click','.faqs__faq--closed', function(e) {
        $(this).removeClass("faqs__faq--closed");
        $(this).addClass("faqs__faq");
    });
    
    $(document).on('click', '.faqs__faq', function() {
        $(this).removeClass("faqs__faq");
        $(this).addClass("faqs__faq--closed");
    });


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



