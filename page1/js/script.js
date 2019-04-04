let d = document;
const toggle_btn = d.querySelector('.hamburger'),
	  menu = d.querySelector('.tape_bar'),
	  header_nav = d.querySelector('.tape_menu');



var menu_active = false
toggle_btn.addEventListener('click', toggle_menu);


function toggle_menu() {
	if(menu_active) {
		menu.classList.remove('active');
		this.classList.remove('active');
		menu_active = false
		header_nav.classList.remove('active');
	} else {
		menu.classList.add('active');
		this.classList.add('active');
		menu_active = true
		header_nav.classList.add('active');

	}
}

