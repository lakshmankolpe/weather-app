import "./WeatherCard.css";
import Imgsunny from "../../img/sunny.png";
import Imgrainy from "../../img/rainy.png";
import Imgsnowy from "../../img/snowy.png";
import Imgcloudy from "../../img/cloudy.png";



function WeatherCard({temperature,weather,city}) {



const WEATHER_ICON = {
    "sunny": Imgsunny,
    "rainy":Imgrainy,
    "cloudy":Imgcloudy,
    "snowy" :Imgsnowy
}

const WEATHER_BG_CLASSES ={
  "cloudy": "bg-cloudy",
  "rainy": "bg-rainy",
  "sunny":"bg-sunny",
  "snowy":"bg-snowy"
}


  return (
    <div className={`weather-card ${WEATHER_BG_CLASSES[weather]}`}>
      
        <input type="text" placeholder="Search" className="input-box"/>
        <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl1OXPLr6KwFJR3zwGBDgvi5n6A4dUUa3Thw&s"className="seach-icon" alt="" /></span>
      <img src={WEATHER_ICON[weather]} className="weather-icon"/>
<p className="temperature">{temperature}°C</p>
<p className="weather">{weather} </p>
<p className="city">{city}</p>




    </div>
  )
}

export default WeatherCard