$(function(){
	$('.about__reviews').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		responsive: [
		{
			breakpoint: 973,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
				arrows: true,
			}
		},
		]
	});
	appendImg();
	$(window).resize(appendImg);

	function appendImg(){
		$(".slick-arrow").empty();
		addImgToBlock(".slick-next", "next-arrow.png");
		addImgToBlock(".slick-prev", "prev-arrow.png");
	}

	function addImgToBlock(parent, imgName){
		$(parent).append(`<img src='img/${imgName}'>`);
	}

	function exchanger(){
		let fromVal = $('#from-val').val();
		let toVal = $('#to-val').val();
		let currVal = $("#take-money").val();
		switch(fromVal){
			case 'RUB': 
			switch(toVal){
				case 'RUB':
				$("#get-money").val(currVal);
				break;
				case 'UAH': 
				$("#get-money").val(currVal*0.3623.toFixed(4));
				break;
				case 'EUR': 
				$("#get-money").val(currVal*0.012.toFixed(4));
				break;
				case 'USD': 
				$("#get-money").val(currVal*0.013.toFixed(4));
				break;
			}
			break;
			case 'UAH': 
			switch(toVal){
				case 'RUB':
				$("#get-money").val(currVal*2.75.toFixed(4));
				break;
				case 'UAH': 
				$("#get-money").val(currVal);
				break;
				case 'EUR': 
				$("#get-money").val(currVal*0.034.toFixed(4));
				break;
				case 'USD': 
				$("#get-money").val(currVal*0.037.toFixed(4));
				break;
			}
			break;
			case 'EUR': 
			switch(toVal){
				case 'RUB':
				$("#get-money").val(currVal*80.31.toFixed(4));
				break;
				case 'UAH': 
				$("#get-money").val(currVal*29.18.toFixed(4));
				break;
				case 'EUR': 
				$("#get-money").val(currVal);
				break;
				case 'USD': 
				$("#get-money").val(currVal*1.08.toFixed(4));
				break;
			}
			break;
			case 'USD': 
			switch(toVal){
				case 'RUB':
				$("#get-money").val(currVal*74.48.toFixed(4));
				break;
				case 'UAH': 
				$("#get-money").val(currVal*27.05.toFixed(4));
				break;
				case 'EUR': 
				$("#get-money").val(currVal*0.93.toFixed(4));
				break;
				case 'USD': 
				$("#get-money").val(currVal);
				break;
			}
			break;
		}
	}
	exchanger();
	$("#take-money").on('input', exchanger);
	$("#from-val").on('change', exchanger);
	$("#to-val").on('change', exchanger);
});



