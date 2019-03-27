let d = document;
const toggle_btn = d.getElementById('toggle-btn'),
	  menu = d.querySelector('.nav-items');



var menu_active = false

toggle_btn.addEventListener('click', toggle_menu);


function toggle_menu() {
	if(menu_active) {
		menu.classList.remove('active');
		this.classList.remove('active');
		menu_active = false
	} else {
		menu.classList.add('active');
		this.classList.add('active');
		menu_active = true
	}
}

























