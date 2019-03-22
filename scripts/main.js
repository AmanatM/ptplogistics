		//PARALLAX

window.addEventListener('scroll', function(){
	let d = document;
	const scrollPosition = window.pageYOffset;
	const bgParallax = d.getElementsByTagName('header')[0];
	const limit = bgParallax.offsetTop + bgParallax.offsetHeight;  

	if (scrollPosition > bgParallax.offsetTop && scrollPosition <= limit)
		bgParallax.style.backgroundPositionY = (55 - 25*scrollPosition/limit) + '%';   
	else
		bgParallax.style.backgroundPositionY = '55%';    
});





		//TOOGLE BTN
{

	let active = false;

	toogle_btn.addEventListener('click', function() {
		if(active == false) {
			this.classList.add('active');
			header_menu.classList.add('mobile-active');
			active = true;
		}else {
			this.classList.remove('active');
			header_menu.classList.remove('mobile-active');
			active = false;
		}
	});
}





























