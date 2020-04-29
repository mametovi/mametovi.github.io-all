
	$('.two-block').on('click', function(){
		$(this).toggleClass('opened');
		$('.bag-bl').slideToggle(450);
	});

	$('body').click(function(e){
		if(!$(e.target).is('.two-block, .two-block *, .bag-bl *')) {
			$('.bag-bl').slideUp(450);
			$('.two-block').removeClass('opened')
		}
	});

	$('.one-block').on('click', function(){
		$(this).toggleClass('opened');
		$('.pipes').slideToggle(450);
	});

	$('body').click(function(e){
		if(!$(e.target).is('.one-block, .one-block *, .pipes *')) {
			$('.pipes').slideUp(450);
			$('.one-block').removeClass('opened')
		}
	});

	$('.three-block').on('click', function(){
		$(this).toggleClass('opened');
		$('.language-wrap').slideToggle(450);
	})

	$('body').click(function(e){
		if(!$(e.target).is('.three-block, .three-block *, .language *')) {
			$('.language').slideUp(450);
			$('.three-block').removeClass('opened')
		}
	})



	$( "#menuToggle" ).click(function() {
		$( "nav.menu" ).toggleClass("open");
		$( ".bg-box" ).toggleClass("open");
		$( ".ToogleClass" ).toggleClass("open");
	});