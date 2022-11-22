import { useEffect, useState } from "react";
import { apiKey } from "./api";
import "../sass/TodayPanel.scss";
import sunSwitch from "../weather-icons/thunderstorm.svg";
import windIcon from "../weather-icons/wind.svg";
import TodayInfo from "./TodayInfo";

export type weatherLook = {
  city: string;
  temp: number;
  humidity: number;
  clouds: number;
  sunrise: Date;
  sunset: Date;
  wind: number;
};

const TodayPanel = (props: any) => {
  const [weather, setWeather] = useState<weatherLook>();
  const API = `https://api.openweathermap.org/data/2.5/weather?q=Warszawa&units=metric&appid=${apiKey}`;
  const { theme, handleTheme } = props;
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) =>
        setWeather({
          city: data.name,
          temp: Math.round(data.main.temp),
          humidity: data.main.humidity,
          clouds: data.clouds.all,
          sunrise: new Date(data.sys.sunrise * 1000),
          sunset: new Date(data.sys.sunset * 1000),
          wind: Math.round(data.wind.speed),
        })
      );
  }, []);

  return (
    <div id="today">
      <div id="today_short" className={theme ? "--dark" : "--light"}>
        <div id="today_short_icon">
          <img src={sunSwitch} alt="sun" />
        </div>
        <div id="today_short_temp">
          <p>
            {weather?.temp}
            <span>o</span>
          </p>
        </div>
        <div id="today_short_name">
          <p>{weather?.city}</p>
          <p>
            Today, {weather?.sunrise.getDate()}/{weather?.sunrise.getMonth()}
          </p>
        </div>
        <div id="today_short_wind">
          <img src={windIcon} alt="wind" />
        </div>
      </div>
      {weather && <TodayInfo theme={theme} weather={weather} />}
    </div>
  );
};

export default TodayPanel;
