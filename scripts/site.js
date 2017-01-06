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




