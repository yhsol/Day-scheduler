const body = document.querySelector('body');

const IMG_NUMBER = 3;

function paintNumber(imgNumber) {
	const image = new Image();
	image.src = `Images/${imgNumber + 1}.jpg`;
	image.classList.add('bgImages');
	body.prepend(image);
}

function genNumber() {
	const number = Math.floor(Math.random() * IMG_NUMBER);
	return number;
}

function init() {
	const randomNumber = genNumber();
	paintNumber(randomNumber);
}

init();
