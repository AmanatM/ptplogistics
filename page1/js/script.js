let btn = document.querySelector('.triangle'),
	menu = document.querySelector('.tape_menu'),
	tape = document.querySelector('.tape');

btn.addEventListener('click', function(){
	menu.classList.toggle('open');
	tape.classList.toggle('right')
});
