var nelo = {
	init: function(){
		this.handleMenuClick();
	},

	$siteNav: $('.site-nav'),
	$navIcon: $('#nav-icon'),

	toggleNav: function(flag){
		$('body').toggleClass('modal-open', flag);
		this.$navIcon.toggleClass('modal-open', flag);
		this.$siteNav.fadeToggle(300, function(){
			this.$siteNav.toggleClass('modal-open', flag);
			if(!flag) {
				this.$siteNav.removeAttr('style');
			}
		}.bind(this));
	},

	handleMenuClick: function(){
		this.$navIcon.on('click', function(){
			this.toggleNav(!this.$navIcon.hasClass('modal-open'))
		}.bind(this));

		this.$siteNav.find('a').on('click', function(){
			this.toggleNav(false);
		}.bind(this));
	},
};


$(document).on('ready', function(){
	nelo.init();
});
