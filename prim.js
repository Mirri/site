$(window).ready(function()
{
	
	$('#accordion > div').each(function()
	{
		$(this).data('height', $(this).height());
		$(this).data('padding-top', $(this).css('padding-top'));
		$(this).data('padding-bottom', $(this).css('padding-bottom'));
	});
	
	
	$('#accordion > div:not(:first)').hide();
	
	$('#accordion h3:first, #accordion div:first').addClass('active');

	$('#accordion > h3').click(function()
	{
		
		$('#accordion > h3').removeClass('active');
		$('#accordion > div:visible').animate({height: 0, 'padding-top': 0, 'padding-bottom': 0}, 500, function() { $(this).hide() });
		
		
		$(this).addClass('active');
		box = $(this).next().addClass('active');
		$(box).animate(
		{
			height: $(box).data('height'), 
			'padding-top': $(box).data('padding-top'), 
			'padding-bottom': $(box).data('padding-bottom')
		}, 500);
	});
});
