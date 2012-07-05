var CategorySliderManager = function(dispatcher, files){
	var applyTemplate = function(index, value){
			var templateParams = {
				path: "img/"+ dispatcher + "/"+ value.pic,
				text: value.text
			}
			return ich.category(templateParams);
	}

	var buildElements = function(dispatcher, files){
		var slider = jQuery("#categorySliderContent");
		slider.html("").fadeOut("slow");
		var addOne = function(index, value){
			newElement = applyTemplate(index, value);
			slider.append(newElement).fadeIn("slow");	
		}
		jQuery.each(files, addOne);
	}
	
	buildElements(dispatcher, files);
}