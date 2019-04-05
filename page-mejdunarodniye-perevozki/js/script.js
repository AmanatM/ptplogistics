let d = document;
const toggle_btn = d.querySelector('.hamburger'),
	  menu = d.querySelector('.tape_bar'),
	  header = d.querySelector('.header');


var menu_active = false
toggle_btn.addEventListener('click', toggle_menu);


function toggle_menu() {
	if(menu_active) {
		menu.classList.remove('activeb');
		this.classList.remove('active');
		menu_active = false
	} else {
		menu.classList.add('activeb');
		this.classList.add('active');
		menu_active = true

	}
}

window.addEventListener('scroll', function() {
	toggle_btn.style.position = window.pageYOffset > (header.offsetHeight) ? 'fixed' : ''; 
	toggle_btn.style.background = window.pageYOffset > (header.offsetHeight) ? '#3C3C42' : '';  
});	
