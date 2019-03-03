const weatherForm = document.querySelector('.weatherForm');

const WEAHTER_LS = 'weather',
	WEATHER_KEY = '397d2fb18df2c76978b64d841601a88e';

function saveCoords(coordsObj) {
	localStorage.setItem(WEAHTER_LS, JSON.stringify(coordsObj));
}

function SuccessGetGeo(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj);
	getWeather(latitude, longitude);
}

function errorGeo() {
	console.log("Can't access geolocation");
}

function askForWeather() {
	navigator.geolocation.getCurrentPosition(SuccessGetGeo, errorGeo);
}

function getWeather(lat, lon) {
	fetch('https://api.openweathermap.org/data/2.5/weather?lat=`${lat}`&lon=`${lon}`&appid=WEATHER_KEY')
		.then(function(Response) {
			return Response.blob();
		})
		.then(function() {
			console.log();
			weatherForm.innerHTML = '';
		});
}

function loadWeather() {
	const currentWeahter = localStorage.getItem('WEAHTER_LS');
	if (currentWeahter === null) {
		askForWeather();
	} else {
		const savedWeather = JSON.parse(currentWeahter);
		getWeather(savedWeather);
	}
}

function init() {
	loadWeather();
}

init();
