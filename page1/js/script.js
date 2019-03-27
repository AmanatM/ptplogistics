let slide1 = document.querySelector(".s1"),
	slide2 = document.querySelector(".s2"),
	slide3 = document.querySelector(".s3"),
	right1 = document.querySelector(".r1"),
	right2 = document.querySelector(".r2"),
	right3 = document.querySelector(".r3"),
	btn1 = document.querySelector(".b1"),
	btn2 = document.querySelector(".b2"),
	btn3 = document.querySelector(".b3");
slide1.addEventListener('click', function() {
	right1.classList.remove('disnone');
	right2.classList.add('disnone');
	right3.classList.add('disnone');
	btn1.classList.add('colored');
	btn2.classList.remove('colored');
	btn3.classList.remove('colored');
});
slide2.addEventListener('click', function() {
	right1.classList.add('disnone');
	right2.classList.remove('disnone');
	right3.classList.add('disnone');
	btn1.classList.remove('colored');
	btn2.classList.add('colored');
	btn3.classList.remove('colored');
});
slide3.addEventListener('click', function() {
	right1.classList.add('disnone');
	right2.classList.add('disnone');
	right3.classList.remove('disnone');
	btn1.classList.remove('colored');
	btn2.classList.remove('colored');
	btn3.classList.add('colored');
});
