$(function () {
// начала документа


var mixBlendModeSupport = Modernizr.testProp('mixBlendMode');

if (!mixBlendModeSupport) {
  $('html').addClass('no-backgroundblendmode'); 
}


// конец документа
});



