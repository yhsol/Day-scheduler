const form = document.querySelector('.js-greetingForm'),
	greetingTitle = form.querySelector('.js-greetingTitle'),
	greeting = document.querySelector('.js-greeting');

const USER_LS = 'currentName',
	SHOWING_CN = 'showing';

function saveName(text) {
	localStorage.setItem(USER_LS, text);
}

function submitHandler(event) {
	event.preventDefault();
	const currentValue = greetingTitle.value;
	paintName(currentValue);
	saveName(currentValue);
}

function askForName() {
	form.classList.add(SHOWING_CN);
	form.addEventListener('submit', submitHandler);
}

function paintName(text) {
	form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hello ${text}`;
}

function loadName() {
	const currentName = localStorage.getItem(USER_LS);
	if (currentName === null) {
		askForName();
	} else {
		paintName(currentName);
	}
}

function init() {
	loadName();
}

init();
