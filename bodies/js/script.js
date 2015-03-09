console.log("script.js");



window.onload = function() {


$('.burger').click(function(){
	$('.mobile-menu').toggleClass('menu-on');
});


// Initiates Slider
$('.flexslider').flexslider({
      animation: "fade",
      pauseOnAction: true,
      slideDirection: "Vertical",
      slideshowSpeed: 5000,
      directionNav: true,
      controlNav: false,
      animationDuration: 10
});



}
