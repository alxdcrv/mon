$(function() {

	$('.copy--wrapper').on("click", function() {
		var text = $('#myBlock').attr('title');
		$('<textarea>').val(text).appendTo('body').select();
		$('<textarea>').css({'position' : 'absolute', 'top' : '-100%'});
		document.execCommand('copy');
		$('textarea').remove();
		$('#successMessage').fadeIn(300).delay(3000).fadeOut(300);
  });
	if(window.innerWidth > 786 && window.innerWidth <= 900){
		$(document).ready(function(){
			var myBlock = $('#myBlock');
			var text = myBlock.text();
			var maxLength = 30;
			if (text.length > maxLength) {
				var truncatedText = text.substr(0, maxLength/2) + "..." + text.substr(text.length - maxLength/2);
				myBlock.text(truncatedText);
			}
		});
	} else if (window.innerWidth <= 768) {
		$(document).ready(function(){
			var myBlock = $('#myBlock');
			var text = myBlock.text();
			var maxLength = 25;
			if (text.length > maxLength) {
				var truncatedText = text.substr(0, maxLength/2) + "..." + text.substr(text.length - maxLength/2);
				myBlock.text(truncatedText);
			}
		});
	}
	
	$('.dropdown--title').click(function(event){
		event.stopPropagation();
		$(this).parent().find('.list--dropdown').toggleClass('active');
		$(this).find('.arrow').toggleClass('rotate');
		$(this).toggleClass('white');
	});
	$(document).on("click", function(event) {
		if(!$(event.target).closest(".list--dropdown").length && 
			!$(event.target).is(".list--dropdown") &&
			$(".list--dropdown").hasClass("active")) {
			$(".list--dropdown").removeClass("active");
			$('.dropdown--title').removeClass("white");
			$('.dropdown--title').find('.arrow').removeClass('rotate');
		}
	});

	$(".main--dive__wrapper .image").click(function() {
		var index = $(this).index() + 1;
		$(".text p").hide();
		$(".text p.text-" + index).fadeIn();
	});

	$('.left--item .title').click(function(){
		let $a = $(this).parent().find(".left--item__text");
		$(".left--item__text").not($a).slideUp();
		if ($(this).parent().hasClass('active')) {
			$(this).parent().removeClass('active');
			$('.left--item').not($a).removeClass('active');
		} else {
			$('.left--item').removeClass('active');
			$(this).parent().addClass('active');
		}
		$a.slideToggle();
	});

	if (window.innerWidth > 786) {
		// выбираем все блоки stage
		const stages = $('.stage');
		// обходим все блоки и добавляем события
		stages.each(function(index) {
			const targetStage = $(this);
			const stageNumber = targetStage.find('.stage--number');
			const stageNumberspan = targetStage.find('.stage--number span');
			const stageNumberAfter = targetStage.find('.stage--number\\:\\:after');
	
			// обходим все предыдущие блоки и добавляем им события
			for (let i = 0; i < index; i++) {
				const prevStage = $(stages[i]);
	
				prevStage.on('mouseenter', () => {
					stageNumber.addClass('active');
					stageNumberAfter.addClass('active');
					stageNumberspan.addClass('active');
				});
				prevStage.on('mouseleave', () => {
					stageNumber.removeClass('active');
					stageNumberAfter.removeClass('active');
					stageNumberspan.removeClass('active');
				});
			}
	
			// добавляем класс "previous" при наведении на текущий блок
			targetStage.on('mouseenter', () => {
				stages.slice(0, index).addClass('previous');
				stageNumber.addClass('active');
				stageNumberAfter.addClass('active');
				stageNumberspan.addClass('active');
			});
			targetStage.on('mouseleave', () => {
				stages.slice(0, index).removeClass('previous');
				stageNumber.removeClass('active');
				stageNumberAfter.removeClass('active');
				stageNumberspan.removeClass('active');
			});
		});
	}

	$(".search").click(function(e) {
		e.stopPropagation();
		$(".search--wrapper").addClass('active');
	});
	$(document).on("click", function(e) {
		if(!$(e.target).closest(".search--wrapper").length && 
				!$(e.target).is(".search--wrapper") &&
				$(".search--wrapper").hasClass("active")) {
				$(".search--wrapper").removeClass("active");
		}
	});

	$(".burger").click(function(e) {
		e.stopPropagation();
		$(".header--wrapper__top .menu").toggleClass('active');
	});
	$(document).on("click", function(e) {
		if(!$(e.target).closest(".header--wrapper__top .menu").length && 
				!$(e.target).is(".header--wrapper__top .menu") &&
				$(".header--wrapper__top .menu").hasClass("active")) {
				$(".header--wrapper__top .menu").removeClass("active");
		}
	});

});
