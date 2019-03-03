const weatherForm = document.querySelector('.weatherForm');

const WEAHTER_LS = 'weather',
	WEATHER_KEY = '397d2fb18df2c76978b64d841601a88e';

function saveCoords(coordsObj) {
	localStorage.setItem(WEAHTER_LS, JSON.stringify(coordsObj));
}

function SuccessGetGeo(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const coordsObj = {
		lat,
		lon
	};
	saveCoords(coordsObj);
	getWeather(coordsObj);
}

function errorGeo() {
	console.log("Can't access geolocation");
}

function askForWeather() {
	navigator.geolocation.getCurrentPosition(SuccessGetGeo, errorGeo);
}

function getWeather(coordsObj) {
	fetch(
		`${'https://api.openweathermap.org/data/2.5/weather?'}lat=${coordsObj.lat}&lon=${coordsObj.lon}&appid=${WEATHER_KEY}&units=metric`
	)
		.then((response) => response.json())
		.then((json) => {
			const name = json.name;
			const temperature = json.main.temp;
			weatherForm.innerHTML = `${Math.floor(temperature)}˚@${name}`;
		});
}

function loadWeather() {
	const currentWeahter = localStorage.getItem('WEAHTER_LS');
	if (currentWeahter !== null) {
		const savedWeather = JSON.parse(currentWeahter);
		getWeather(savedWeather);
		console.log(getWeather(savedWeather));
	} else {
		askForWeather();
	}
}

function init() {
	loadWeather();
}

init();
