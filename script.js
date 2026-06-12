async function getWeather() {
    const city = document.getElementById("city").value;

    const response = await fetch(
        `http://localhost:3000/weather/${city}`
    );

    const data = await response.json();

    document.getElementById("result").innerHTML =
        `City: ${data.city}<br>
         Temperature: ${data.temperature}°C<br>
         Humidity: ${data.humidity}%<br>
         Weather: ${data.description}`;
}