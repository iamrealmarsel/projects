/*!
 * Vallenato 1.0
 * A Simple JQuery Accordion
 *
 * Designed by Switchroyale
 * 
 * Use Vallenato for whatever you want, enjoy!
 */

$(document).ready(function()
{
	//Add Inactive Class To All Accordion Headers
	$('.faq .accordion-header').toggleClass('inactive-header');
	
	//Set The Accordion Content Width
	var contentwidth = $('.faq .accordion-header').width();
	$('.faq .accordion-content').css({'width' : "100%" });
	
	//Open The First Accordion Section When Page Loads
	$('.faq .accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
	$('.faq .accordion-content').first().slideDown().toggleClass('open-content');
	
	// The Accordion Effect
	$('.faq .accordion-header').click(function () {
		if($(this).is('.inactive-header')) {
			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		
		else {
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
	});
	
	return false;
});


$(document).ready(function()
{
	//Add Inactive Class To All Accordion Headers
	$('.schemeWrap .accordion-header').toggleClass('inactive-header');
	
	//Set The Accordion Content Width
	var contentwidth = $('.schemeWrap .accordion-header').width();
	$('.schemeWrap .accordion-content').css({'width' : "100%" });
	
	//Open The First Accordion Section When Page Loads
	// $('.schemeWrap .accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
	// $('.schemeWrap .accordion-content').first().slideDown().toggleClass('open-content');
	
	// The Accordion Effect
	$('.schemeWrap .accordion-header').click(function () {
		if($(this).is('.inactive-header')) {
			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		
		else {
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
	});
	
	return false;
});



