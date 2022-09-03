function imgSlider(image){
	document.querySelector('.starbucks').src = image;
}

function changeCircleColor(color){
	const circle = document.querySelector('.circle');
	const social = document.querySelector('.social');
	circle.style.background = color;
	social.style.background = color;
}

function toggleMenu(){
	let menuToggle = document.querySelector('.toggle');
	let navigation = document.querySelector('.navigation');
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
}