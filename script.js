const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.getElementById('weather-info');

searchBtn.addEventListener('click', () => {
  const location = searchBar.value;
  // Call the external script to fetch weather data (see next step)
  fetchWeatherData(location)
    .then(data => updateWeatherInfo(data))
    .catch(error => console.error(error));
});

// This function needs to be replaced with your logic to call the external script
// and process the weather data
function fetchWeatherData(location) {
  // Replace with your implementation to call the weather API using an external script
  // This example is for demonstration purposes only and won't work
  return new Promise((resolve, reject) => {
    const weather = {
      temp: 25,
      weatherType: 'Sunny',
      windSpeed: 5,
      // Add an image property based on weatherType
      image: 'url(sunny.png)',
    };
    resolve(weather); // Replace with actual weather data from the external script
  });
}

function updateWeatherInfo(data) {
  weatherInfo.innerHTML = `
    <h2>Ramduly, ${data.weatherType}</h2>
    <p>Temperature: ${data.temp}°C</p>
    <p>Wind Speed: ${data.windSpeed} m/s</p>
    <img src="${data.image}" alt="${data.weatherType} weather">
  `;
}
