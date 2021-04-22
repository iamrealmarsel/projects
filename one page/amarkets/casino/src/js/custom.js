
$(window).on('load', function() {


  $('.onehand__img').on('click', function() {

    $('.onehand_handle').addClass('active');

    tlLeft.resume();
    tlCenter.resume();
    tlRight.resume();

  });


  var left = $('.onehand_left');
  var center = $('.onehand_center');
  var right = $('.onehand_right');

  var tlLeft = new TimelineMax();
  var tlCenter = new TimelineMax();
  var tlRight = new TimelineMax();

  tlLeft.staggerTo(left, 1, { 
      top: '100%',
      y: '-30%',
      bottom: 'auto',
      rotationX: '-85deg',
      ease:Power1.easeInOut
    }, 0.25);

  tlCenter.staggerTo(center, 1, { 
      top: '100%',
      y: '-30%',
      bottom: 'auto',
      rotationX: '-85deg',
      ease:Power1.easeInOut
    }, 0.25);

  tlRight.staggerTo(right, 1, { 
      top: '100%',
      y: '-30%',
      bottom: 'auto',
      rotationX: '-85deg',
      ease:Power1.easeInOut
    }, 0.25);


  tlLeft.pause(0.75).addPause(6, myClearL).timeScale(1.5);
  tlCenter.pause(0.75).addPause(6, myClearC);
  tlRight.pause(0.75).addPause(6, myClearR).timeScale(2);

  function myClearL() {
    tlLeft.clear();
  }
  function myClearC() {
    tlCenter.clear();
  }
  function myClearR() {
    tlRight.clear();
  }


});


