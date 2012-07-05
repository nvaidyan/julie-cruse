/* Author: Nicholas Vaidyanathan

*/

var SliderImage =  function(pic, text){
	this.pic = pic;
	this.text = text;
}

var imageIndex = {
	"arts" : [ new SliderImage("bee.jpg", "it's a cute little bee") ],
	"education" : [ ],
	"design" : [ ],
	"media" :[ ]
}

var handler = function(){ 
	dispatcher = jQuery(this).attr('id');
	fileList = imageIndex[dispatcher];
	if(fileList !== undefined){
		new CategorySliderManager(dispatcher, fileList);
	}
}

jQuery(document).ready(function(){
	jQuery("#mainNav li").click(handler);
});




