const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;

  try {
    const response = await axios.get(
      `https://wttr.in/${city}?format=j1`
    );

    const weather = response.data.current_condition[0];

    res.json({
      city: city,
      temperature: weather.temp_C,
      humidity: weather.humidity,
      description: weather.weatherDesc[0].value
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});