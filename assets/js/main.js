var nelo = {
	init: function(){
		this.handleMenuClick();
	},

	handleMenuClick: function(){
		$('#nav-icon').on('click', function(){
			$nav = $('.site-nav');
			$('body, #nav-icon').toggleClass('modal-open');
			$nav.fadeToggle(300, function(){
				$nav.toggleClass('modal-open');
				if(!$nav.hasClass('modal-open')) {
					$nav.removeAttr('style');
				}
			});
		});
	},
};


$(document).on('ready', function(){
	nelo.init();
});
