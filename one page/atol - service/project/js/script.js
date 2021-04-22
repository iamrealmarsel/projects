(function() {

  $('.slider').slick({
  // mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="/img/slider-arrLeft.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="/img/slider-arrRight.png" alt=""></button>',
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 651,
        settings: {
          dots: false,
          swipe: false
        }
    }]
  });

  var getBodyScrollTop, scrollTo;

        // Cache selectors
        var lastId,
            topMenu = $(".desktop_menu"),
            topMenuHeight = topMenu.outerHeight()+47,
            menuItems = topMenu.find("a"),
            scrollItems = menuItems.map(function(){
              var item = $($(this).attr("href"));
              if (item.length) { return item; }
            });


        // Bind click handler to menu items
        // so we can get a fancy scroll animation
        menuItems.click(function(e){
          var href = $(this).attr("href"),
              offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
          $('html, body').stop().animate({
              scrollTop: offsetTop
          }, 300);
          e.preventDefault();
        });

        // Bind to scroll
        $(window).scroll(function(){
           // Get container scroll position
           var fromTop = $(this).scrollTop()+topMenuHeight;

           // Get id of current scroll item
           var cur = scrollItems.map(function(){
             if ($(this).offset().top < fromTop)
               return this;
           });
           // Get the id of the current element
           cur = cur[cur.length-1];
           var id = cur && cur.length ? cur[0].id : "";

           if (lastId !== id) {
               lastId = id;
               // Set/remove active class
               menuItems
                 .parent().removeClass("active")
                 .end().filter("[href=#"+id+"]").parent().addClass("active");
           }
        });






 getBodyScrollTop = function() {
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
  };


}).call(this);



$(document).ready(function(){


  var isFF = true;
    var addRule = (function (style) {
    var sheet = document.head.appendChild(style).sheet;
    return function (selector, css) {
        if (isFF) {
            if (sheet.cssRules.length > 0) {
              sheet.deleteRule( 0 );
            }
            try {
                sheet.insertRule(selector + "{" + css + "}", 0);
            } catch ( ex ) {
                isFF = false;
            }
        }
    };
    })(document.createElement("style"));

    function installDefaultGradientInput(selector, defaultValue) {
        var maxValue = $(selector).attr('max');
        var minValue = $(selector).attr('min');

        var defaultValue = defaultValue;

        var division = (defaultValue - minValue) * 100 / (maxValue - minValue);

        $(selector).css('background-image', 'linear-gradient(to right, #ff0000 ' + division + '%, #e8e8e8 ' + division + '%)');
        $(selector + "+ .border-slider").css('width', 'calc(' + division + '% + 8px)');
    }

    var defaultTransaction = 500000;
    $('.value-transaction').val(makeCorrectNumberFormat(defaultTransaction));
    var defaultPercent = 15;
    $('.value-percent').val(defaultPercent + "%");
    var defaultPeak = 3;
    $('.value-peak').val(defaultPeak);

    installDefaultGradientInput('input#transaction', defaultTransaction);
    installDefaultGradientInput('input#percent', defaultPercent);
    installDefaultGradientInput('input#peak', defaultPeak);

    $('.result').text(countOnline(defaultTransaction, defaultPercent, defaultPeak));

    var onlineCass = countOnline(defaultTransaction, defaultPercent, defaultPeak);

    $('.for-year').text(makeCorrectNumberFormat((countCostMonth(onlineCass, defaultTransaction) / 12).toFixed(0)) + "р.");

    $('.for-3years').text(makeCorrectNumberFormat(countCostMonth(onlineCass, defaultTransaction)) + "р.");

    $('.ranges input[type="range"]').on("propertychange input change", function() {

      setGradient($(this));

      var transaction = +$('input#transaction').val();
      $('.value-transaction').val(makeCorrectNumberFormat(transaction));
      var percent = +$('input#percent').val();
      $('.value-percent').val(percent + "%");
      var peak = +$('input#peak').val();
      $('.value-peak').val(peak);

      printResult(transaction, percent, peak);
    });

    function setGradient(inputSelector) {

        var transaction = +$('input#transaction').val();

        var percent = +$('input#percent').val();

        var peak = +$('input#peak').val();

        var inputValue = $(inputSelector).val();
        var maxValue = $(inputSelector).attr('max');
        var minValue = $(inputSelector).attr('min');
        var division = (inputValue - minValue) * 100 / (maxValue - minValue);

        $(inputSelector).css('background-image', 'linear-gradient(to right, #ff0000 ' + division + '%, #e8e8e8 ' + division + '%)');

        $(inputSelector).next(".border-slider").css('width', 'calc(' + division + '% - 8px)');
    }

    function printResult(transaction, percent, peak) {
      $('.result').text(countOnline(transaction, percent, peak));

      var onlineCass = countOnline(transaction, percent, peak);

      $('.for-year').text(makeCorrectNumberFormat((countCostMonth(onlineCass, transaction) / 12).toFixed(0)) + "р.");

      $('.for-3years').text(makeCorrectNumberFormat(countCostMonth(onlineCass, transaction)) + "р.");
    }

    $('.ranges input[type="text"]').on('click focusin', function() {
        this.value = '';
    });

    $('.ranges input[type="text"]').on("change keyup", function() {

        $(this).next('input[type="range"]').val(+$(this).val());

        var transaction = +$('input#transaction').val();

        var percent = +$('input#percent').val();

        var peak = +$('input#peak').val();

        printResult(transaction, percent, peak);

        setGradient($(this).next('input[type="range"]'));
    });

    $('.ranges input[type="text"]').on('blur', function () {
        var maxValue = +$(this).next('input[type="range"]').attr('max');
        var minValue = +$(this).next('input[type="range"]').attr('data-min');
        var currentValue = +$(this).val();
        var currentId = $(this).attr('id');
        var currentRange = $(this).next('input[type="range"]');

        if (currentValue > maxValue) {
          $(this).val(maxValue);
        } else if (currentValue === 0) {

          $(this).val(minValue);

        }

        currentRange.val($(this).val());

        $(this).val(makeCorrectNumberFormat($(this).val()));

        setGradient(currentRange);

        if (currentId === 'value-percent') {
          $(this).val($(this).val() + "%");
        }
    });

    function countOnline(transaction, percent, peak) {
      var kktp = Math.ceil(peak / 2);
      var kktv = Math.ceil((transaction / 12) / 23000);
      var result = Math.ceil(Math.max(kktv, kktp) * (1 + percent/100));

      return result;
    }

    function countCostYear(transaction, online) {
      var fn = 6100 * (transaction / 160000);
      var allkkt = 2000 * 12 * online;
      var result = fn + allkkt;

      return result;
    }

    function countCostMonth(kktq, transaction) {
      if (kktq === 1) {
        return 6100 + 3000 * 12;
      } else {
        return (2000 * 12) * kktq + (6100 * (transaction / 160000).toFixed(0));
      }
    }

    function makeCorrectNumberFormat(num) {
        num = "" + num;
        if (num.length < 5) {
            return num;
        }
        return num.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }


function heightDetect() {
  $(".block-height").css("height", $(window).height());
};
heightDetect();
$(window).resize(function() {
  heightDetect();//file:///C:/Users/Julia/Downloads/Telegram Desktop/modal.css
});


$(".ob1").click(function(){
  $("#fx2, #fx3").removeClass("open");
  $("#fx1").toggleClass("open");
});
file:///C:/Users/Julia/Downloads/Telegram Desktop/modal.css
$(".ob2").click(function(){
  $("#fx1, #fx3").removeClass("open");
  $("#fx2").toggleClass("open");
});

$(".ob3").click(function(){
  $("#fx1, #fx2").removeClass("open");
  $("#fx3").toggleClass("open");
});

$(".close").click(function(){description
  $(".fix-content").removeClass("open");
});

$(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".main-mnu").slideToggle();
    return false;
  });
});

$(document).ready(function(){

  var indexSubmit = 0;
  var indexSubmit2 = 0;

  $(".call-form-6").submit(function() {
    if (indexSubmit === 0) {
      indexSubmit = 1;
    $.ajax({
      type: "POST",
      url: "/mail",
      data: $(this).serialize(),
      success: function() {
        document.location.href = '/typ2.html';
      }
    });
    return false;
    }
    return false;
  });

  $(".call-form-3").submit(function() {
    if (indexSubmit2 === 0) {
      indexSubmit2 = 1;
    $.ajax({
      type: "POST",
      url: "/mail",
      data: $(this).serialize(),
      success: function() {
        document.location.href = '/typ2.html';
      }
    });
    return false;
    }
    return false;
  });


var ModalOpenIndex = 0;

function leavePage() {
  // console.log('я запустился')
  $("body").on('mouseleave', function () {
    if (!($('#callBackForm-8').hasClass('in')) && !($('#callBackForm-7').hasClass('in')) && !($('#callBackForm-6').hasClass('in'))) {
      if (ModalOpenIndex === 0) {
        $("#callBackForm-3").modal('show');
        ModalOpenIndex = 1;
      }
    }
  });
}

setTimeout(leavePage, 15000);


});


$(document).ready(function(){

$('.modal__signup').on('click', function() {
  $('.close').trigger('click');
});

$('.modal__signin').on('click', function() {
  $('.close').trigger('click');
});

$('.modal__forgetPassword').on('click', function() {
  $('.close').trigger('click');
});

$('.modal__rememberPassword').on('click', function() {
  $('.close').trigger('click');
});


});









