$(document).foundation();

$(document).ready(function() {
	function getTargetTop(elem){    
		var id = elem.attr("href");
		var offset = $("#header").outerHeight();
		return $(id).offset().top - offset;
	}
  
	$('a[href^="#"]').click(function(event) {
		var target = getTargetTop($(this));
		$('html, body').animate({scrollTop:target}, 1000);
		event.preventDefault();
	});
  
	var sections = $('a[href^="#"]');
	function checkSectionSelected(scrolledTo){
		var threshold = 30;
		var i;
		for (i = 0; i < sections.length; i++) {
			var section = $(sections[i]);
			var target = getTargetTop(section);
			if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
				sections.removeClass("active");
				section.addClass("active");
			}
		};
	}
	checkSectionSelected($(window).scrollTop());
	$(window).scroll(function(e){
		checkSectionSelected($(window).scrollTop());
	});
});