var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
x = w.innerWidth || e.clientWidth || g.clientWidth,
y = w.innerHeight|| e.clientHeight|| g.clientHeight;

var video = document.querySelector('#landing-teaser');
if(video) {
	// video.width = x;
	video.playbackRate = 0.75;
}

$('.waypoint').each(function() {
  var waypoint = new Waypoint.Inview({
  	element: $(this),
  	enter: function() {
  		$(this.element).addClass('enter');
  	},
  	entered: function() {
  		$(this.element).addClass('entered');
  		this.destroy();
  	},
  });
});

