$(".js-range-slider").ionRangeSlider({
    type: "single",
    min: 0,
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
            .style.display = 0 == c || c == a ? "none" : "block"
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
	
		//scroll theme
	  $([document.documentElement, document.body]).animate({
			scrollTop: $("#btn_main").offset().top
	  }, 1500);

    });
  });



// calculator

$('#cost-one,#setup-auto,#auto,#fundamnt-var,#setup_var,#obshifka, #paint-kark, #weight, #height, #Kalitka_v_var').on('change', function() {
	sumcalc();

});

function sumcalc() {
	var height = $('#height').val();
	var weight = $('#weight').val();

	// var height_weight = height + weight - 5000;

	var paint = $('#paint-kark').val();
	var obshifka = $('#obshifka').val();
	var Kalitka_v_var = $('#Kalitka_v_var').val();
	var setup_var = $('#setup_var').val();


	var fundamnt = $('#fundamnt-var').val();
	var auto = $('#auto').val();
	var setup = $('#setup-auto').val();


//  paint + obshifka + Kalitka_v_var + setup_var + fundamnt + auto + setup;
	var sum = (height + weight) + paint;
	

	$('.sum-calc').text(sum)

}