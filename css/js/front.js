


$(document).ready(function() {
    $.timeliner({});
    $('#fullpage').fullpage({
      scrollOverflow: true,
      easing: 'easeInOutQuad',
      css3: false,
      menu: '#menu',
      fitToSection: false,
      anchors: ['firstPage', 'secondPage'],
      navigation: true,
      navigationTooltips: ['home','speakers','timeline','sponsors'],
      sectionsBg: ['css/images/star.jpg','css/images/speakers.jpg','css/images/bg-space.jpg'],
      sectionsColor: ['#000','#000','#000', '#4BBFC3', '#7BAABE']
    });

  var $map = $('.map')[0];

  var map = new google.maps.Map(
      $map, {
      zoom: 14,
      center: { lat: -37.813155, lng: 144.964078}
      });
});

modalFlag = false;

$(".booking").click(function(event){
  if (!modalFlag) {
    $("#slider").toggleClass("open");
    modalFlag = true;
    event.stopPropagation();
  }
});


$(document).click(function() {
  if(modalFlag) {
      $("#slider").toggleClass("open");
      modalFlag = false;
    } 
});

