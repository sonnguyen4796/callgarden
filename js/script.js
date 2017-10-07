jQuery(document).ready(function($){
	var slide = $(".slider .bxslider li");
	$('.bxslider').bxSlider({
		auto: true,
		mode: 'fade',
		speed: 1000,
		pause: 5000,
		captions: false,
		pager: true,
		controls: false,
		// onSliderLoad: function (currentIndex) {
		//     var title = "";
		//     title = $(slide[currentIndex]).data("title");
		//     $(".home-gallery").append("<div class='slide-content animatedParent '>" + title + "</div>");
		//     $(".home-gallery .slide-content .doanimation").addClass("animated");
		// },
		onSlideBefore: function ($slideElement, oldIndex, newIndex) {
			$("section.slider .animation").removeClass("go");
		},
		onSlideAfter: function ($slideElement, oldIndex, newIndex) {
			$("section.slider .animation").addClass("go");
		}
	});

	$(".navbar-toggle-mobile").click(function(){
		if($("body").toggleClass("open-menu-mobile").hasClass('open-menu-mobile')){
			$("body").css({"padding-right": getScrollBarWidth () });
		} else { $("body").css({"padding-right": 0 }); }
	})

	function getScrollBarWidth () {
		var inner = document.createElement('p');
		inner.style.width = "100%";
		inner.style.height = "200px";

		var outer = document.createElement('div');
		outer.style.position = "absolute";
		outer.style.top = "0px";
		outer.style.left = "0px";
		outer.style.visibility = "hidden";
		outer.style.width = "200px";
		outer.style.height = "150px";
		outer.style.overflow = "hidden";
		outer.appendChild (inner);

		document.body.appendChild (outer);
		var w1 = inner.offsetWidth;
		outer.style.overflow = 'scroll';
		var w2 = inner.offsetWidth;
		if (w1 == w2) w2 = outer.clientWidth;

		document.body.removeChild (outer);

		return (w1 - w2);
	};

});