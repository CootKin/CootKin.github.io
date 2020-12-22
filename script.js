function autoSlider(current_slide){ // Автоматизация слайдера
	let timer; 
	timer = setTimeout ( function (){
		var slide = document.getElementById("slide_"); 
		if (current_slide == 3){
			current_slide = 1;
			clearTimeout(timer);
		} else {
			current_slide += 1;
		}
		slide.setAttribute("src", "images/slides/slide_" + String(current_slide) + ".jpg"); 
		autoSlider(current_slide);
	}, 2000);
}

autoSlider(1);


