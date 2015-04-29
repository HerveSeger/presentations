// Look for sections that have a fullscreen-img attribute and set this image as
// the body background image whenever this section is displayed.
// TODO insert image with reveal transition
var BGR;

function fullscreen(event) {
	var url = event.currentSlide.getAttribute("fullscreen-img");
	if(url) {
		if(typeof BGR == "undefined")
		{
			// Store background value
			BGR = document.body.style.background;
		}

		// Set image from fullscreen-img attribute as body background
		document.body.style.backgroundImage = "url('" + url + "')";
		var size = event.currentSlide.getAttribute("fullscreen-size");
		switch(size) {
			case 'length':
				var width = event.currentSlide.getAttribute("fullscreen-width");
				var height = event.currentSlide.getAttribute("fullscreen-height");
				document.body.style.backgroundSize = width + " " + height;
				break;
			case 'auto':
				document.body.style.backgroundSize = "auto";
				break;
			case 'cover':
				document.body.style.backgroundSize = "cover";
				break;
			default:
				document.body.style.backgroundSize = "contain";
		}
		document.body.style.backgroundColor = "#000000";
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.backgroundAttachment = "fixed";
		document.body.style.backgroundPosition = "center center";
	}
	else { 
		if(typeof BGR != "undefined") { 
			document.body.style.backgroundImage = "none";
			document.body.style.background      = BGR;
		} 
	}
}

Reveal.addEventListener('ready', function(event) {
	fullscreen(event);
}, false );

Reveal.addEventListener('slidechanged', function(event) {
	fullscreen(event);
}, false );

