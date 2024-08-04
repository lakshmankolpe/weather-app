import "./Home.css"
import WeatherCard from "../../Components/WeatherCard/WeatherCard"


const weatherData = [
  {
    temperature: 18,
    weather: "cloudy",
    city: "Nashik, India",
  },
  {
    temperature: 15,
    weather: "sunny",
    city: "kolapur, India",
  },
  {
    temperature: 6,
    weather: "snowy",
    city: "pune, India",
  },
  {
    temperature: 10,
    weather: "rainy",
    city: "Kashmir, India",
  },
  {
    temperature: 25,
    weather: "sunny",
    city: "Jaypur, India",
  },
  {
    temperature: 24,
    weather: "snowy",
    city: "Ahmednagar, India",
  },
  {
    temperature: 12,
    weather: "sunny",
    city: "Kolapur, India",
  },
  {
    temperature: 6,
    weather: "cloudy",
    city: "Jalgoan, India",
  },
  {
    temperature: 10,
    weather: "sunny",
    city: "Kashmir, India",
  },
  {
    temperature: 25,
    weather: "rainy",
    city: "Jaypur, India",
  },
]

function Home() {
  return (
    <>
      <h1>Weathers Cards</h1>
      <div className="weather-card-container">

        {
          weatherData.map((weatherObj, i) => {
            const { temperature, weather, city } = weatherObj
            return (
              <WeatherCard
                city={city}
                temperature={temperature}
                weather={weather}
                key={i}
              />
            );
          })
        }


      </div>
    </>
  );
}

export default Home