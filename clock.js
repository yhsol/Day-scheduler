const clockContainer = document.querySelector('.js-clock'),
	clockTitle = clockContainer.querySelector('.js-clockTitle');

function getTime() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const _time = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10
		? `0${seconds}`
		: seconds}`;
	clockTitle.innerText = _time;
}

function init() {
	getTime();
	setInterval(getTime, 1000);
}

init();
