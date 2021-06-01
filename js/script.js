$(".js-range-slider").ionRangeSlider({
    type: "single",
    min: 1000,
    max: 6000,
    step: 50,
    grid: true,
    keyboard: true,
    grid_num: 5,
    skin: "round",
    skin_color: "#E2001A",
    postfix: " мм",
});

// automatika choose
document.getElementById("auto")
    .onchange = function () {
        var b = {
            yes: "invsee"
        }, c = this.value,
            a;
        for (a in b) document.getElementById(b[a])
            .style.display = 0 == c || c == a ? "block" : "none"
};



// btn 
$(document).ready(function() {
	
	$(".button-calc a span").click(function() {
		var btn = $(this).parent().parent();
		var loadSVG = btn.children("a").children(".load");
		var loadBar = btn.children("div").children("span");
		var checkSVG = btn.children("a").children(".check");
		
		btn.children("a").children("span").fadeOut(200, function() {
			btn.children("a").animate({
				width: 56	
			}, 100, function() {
				loadSVG.fadeIn(300);
				btn.animate({
					width: 320	
				}, 200, function() {
					btn.children("div").fadeIn(200, function() {
						loadBar.animate({
							width: "100%"	
						}, 2000, function() {
							loadSVG.fadeOut(200, function() {
								checkSVG.fadeIn(200, function() {
									setTimeout(function() {
										btn.children("div").fadeOut(200, function() {
											loadBar.width(0);
											checkSVG.fadeOut(200, function() {
												btn.children("a").animate({
													width: 150	
												});
												btn.animate({
													width: 150
												}, 300, function() {
													btn.children("a").children("span").fadeIn(200);
												});
											});
										});
									}, 2000);	
								});
							});
						});
					});
				});
			});
		});
		
	});
	
});

// btn-press 

$(function() {
    $("#btn_main").click(function(clickEvent) {
      clickEvent.preventDefault();
   
      $("#result").css("display", "block");

    });
  });



