$(document).ready(function() {
	const minTime = 3000;
	const maxTime = 4000;
	const fadeTime = 1000;
	const speedTime = 350;
	const speedFadeTime = 100;
	const speedFrequency = 0;
	const speedMinDuration = 5;
	const speedMaxDuration = 15;


	var template = $("#template");
	var rnd = (min, max) => {
	    min = Math.ceil(min);
	    max = Math.floor(max);
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	var getImage = () => {
		return index[rnd(0, index.length)];
	}

	var appendImage = (hide = true) => {
		var image = template.clone();
		var source = getImage();
//		image.prepend(source)
		document.title = 'slidify | ' + source.split("/")[1];
		image.children().attr("src", source);
		if (hide) {
			image.hide();
		} else {
			image.show();
		}
		$("#slidify").append(image);
	}

	var ticks = 0;
	var speedTicks = 0;

	var tick = () => {
	  	$('#slidify > div:first')
		    .fadeOut(speedTicks>0?speedFadeTime:fadeTime)
		    .next()
		    .fadeIn(speedTicks>0?speedFadeTime:fadeTime)
		    .end();
		appendImage();    
		$('#slidify > div:first').remove();
		if (speedTicks > 0) {
			speedTicks--;
		} else {
			ticks ++;
		}
		if (speedTicks === 0 && ticks % speedFrequency === 0) {
			speedTicks = rnd(speedMinDuration, speedMaxDuration);
			ticks++;
		}
		setTimeout(tick,  (speedTicks > 0?speedTime:rnd(minTime,maxTime)));
	}

	appendImage(false);
	appendImage();
	appendImage();
	appendImage();
	appendImage();
	appendImage();
	appendImage();
	appendImage();
	appendImage();
	appendImage();
	appendImage();
	appendImage();
	setTimeout(tick, rnd(minTime, maxTime));

});