$(".js-range-slider").ionRangeSlider({
    type: "single",
    min: 1200,
    max: 6000,
    step: 50,
    grid: true,
    keyboard: true,
    grid_num: 12,
	grid_margin: true,
    skin: "round",
    skin_color: "#E2001A",
    postfix: " мм",
});

$(".js_range_slider").ionRangeSlider({
    type: "single",
    min: 1000,
    max: 3000,
    step: 50,
    grid: true,
    keyboard: true,
    grid_num: 10,
    skin: "round",
	grid_margin: true,
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
			scrollTop: $("#result").offset().top
	  }, 1500);

    });
  });



// calculator

$('#setup-auto,#auto,#fundamnt-var,#setup_var,#obshifka, #paint-kark, #weight, #height, #Kalitka_v_var').on('change', function() {
	sumcalc();
});


function sumcalc() {
	var height = $('#height').val();
	var weight = $('#weight').val();


	var heightInt = Number.parseInt(height);
	var weightInt = Number.parseInt(weight);
	//-------------------------------
	var paint = $('#paint-kark').val();
	var obshifka = $('#obshifka').val();
	var Kalitka_v_var = $('#Kalitka_v_var').val();
	var setup_var = $('#setup_var').val();

	var fundamnt = $('#fundamnt-var').val();
	var auto = $('#auto').val();
	var setup = $('#setup-auto').val();

	//------------------------------------
	var paintInt = Number.parseInt(paint);
	var obshifkaInt = Number.parseInt(obshifka);
	var Kalitka_v_varInt = Number.parseInt(Kalitka_v_var);
	var setup_varInt = Number.parseInt(setup_var);

	var fundamntInt = Number.parseInt(fundamnt);
	var autoInt = Number.parseInt(auto);
	var setupInt = Number.parseInt(setup);


	
	//formuls---------------


	
	

	var result_kub;

	if (weightInt <= 4250 & heightInt <= 1500) {
		result_kub = 48000;
	}
	 
	if (weightInt <= 4250 & heightInt > 1500 & heightInt <= 1800) {
		result_kub = 49200;
	}

	if (weightInt <= 4250 & heightInt > 1800 & heightInt <= 2000) {
		result_kub = 50400;
	}

	if (weightInt <= 4250 & heightInt > 2000 & heightInt <= 2200) {
		result_kub = 51600;
	}

	if (weightInt <= 4250 & heightInt > 2200 & heightInt <= 2400) {
		result_kub = 52800;
	}
	
	if (weightInt > 4250 & weightInt <= 6000 & heightInt <= 1500) {
		result_kub = 64000;
	}

	if (weightInt > 4250 & weightInt <= 6000 & heightInt > 1500 & heightInt <= 1800) {
		result_kub = 66500;
	}

	if (weightInt > 4250 & weightInt <= 6000 & heightInt > 1800 & heightInt <= 2000) {
		result_kub = 69000;
	}

	if (weightInt > 4250 & weightInt <= 6000 & heightInt > 2000 & heightInt <= 2200) {
		result_kub = 71500;
	}

	if (weightInt > 4250 & weightInt <= 6000 & heightInt > 2200 & heightInt <= 2400) {
		result_kub = 75000;
	}

	if (weightInt == 0 & heightInt == 0) {
		result_kub = 0;
	}

	if (obshifkaInt >= 1) {
		var dmetr = 1000; //rub
		var metr_cc = (weightInt * heightInt) / 1000000; // kvadrat metr
		obshifkaInt = (metr_cc * dmetr)
	}
	

	var karkas =  result_kub + paintInt + Kalitka_v_varInt + obshifkaInt;
	var result = karkas + fundamntInt + autoInt + setup_varInt + setupInt;


	// animation
	$({countNum: $('#cost_one').text()}).animate ({
		countNum: karkas
	},
	{
		duration: 500,
		easing: 'swing',
		step: function() {
			$('#cost_one').text(Math.floor(this.countNum));
		},
		complete: function() {
			$('#cost_one').text(this.countNum);
		}
	}
	);



	$({countNum: $('#cost_two').text()}).animate ({
		countNum: fundamntInt
	},
	{
		duration: 500,
		easing: 'swing',
		step: function() {
			$('#cost_two').text(Math.floor(this.countNum));
		},
		complete: function() {
			$('#cost_two').text(this.countNum);
		}
	}
	);

	$({countNum: $('#cost_three').text()}).animate ({
		countNum: autoInt
	},
	{
		duration: 500,
		easing: 'swing',
		step: function() {
			$('#cost_three').text(Math.floor(this.countNum));
		},
		complete: function() {
			$('#cost_three').text(this.countNum);
		}
	}
	);

	$({countNum: $('#cost_four').text()}).animate ({
		countNum: setup_varInt
	},
	{
		duration: 500,
		easing: 'swing',
		step: function() {
			$('#cost_four').text(Math.floor(this.countNum));
		},
		complete: function() {
			$('#cost_four').text(this.countNum);
		}
	}
	);

	$({countNum: $('#cost_five').text()}).animate ({
		countNum: setupInt
	},
	{
		duration: 500,
		easing: 'swing',
		step: function() {
			$('#cost_five').text(Math.floor(this.countNum));
		},
		complete: function() {
			$('#cost_five').text(this.countNum);
		}
	}
	);

	$({countNum: $('#sum_end').text()}).animate ({
		countNum: result
	},
	{
		duration: 500,
		easing: 'swing',
		step: function() {
			$('#sum_end').text(Math.floor(this.countNum));
		},
		complete: function() {
			$('#sum_end').text(this.countNum);
		}
	}
	);

	

	//$('#cost_one').text(karkas);
	$('#cost_two').text(fundamntInt);
	$('#cost_three').text(autoInt);
	$('#cost_four').text(setup_varInt);
	$('#cost_five').text(setupInt);
	$('#cost_six').text(setup-autoInt);
	//$('#sum_end').text(result);
}


 
    /* функция добавления ведущих нулей */
    /* (если число меньше десяти, перед числом добавляем ноль) */
    function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    /* функция получения текущей даты и времени */
    function date_time()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        return day+"/"+month+"/"+year;
    }

    /* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
    document.getElementById('data-calc').innerHTML = date_time();
	document.getElementById('data-calc-2').innerHTML = date_time();
	document.getElementById('data-calc-3').innerHTML = date_time();
	document.getElementById('data-calc-4').innerHTML = date_time();
	document.getElementById('data-calc-5').innerHTML = date_time();