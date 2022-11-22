import { useEffect, useState } from "react";
import { apiKey } from "./api";
import "../sass/TodayPanel.scss";
import sunSwitch from "../weather-icons/thunderstorm.svg";
import windIcon from "../weather-icons/wind.svg";
import TodayInfo from "./TodayInfo";

const TodayPanel = (props: any) => {
  const [weather, setWeather] = useState<object>();
  const API = `https://api.openweathermap.org/data/2.5/weather?q=Warszawa&units=metric&appid=${apiKey}`;
  const { theme, handleTheme } = props;
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div id="today">
      <div id="today_short" className={theme ? "--dark" : "--light"}>
        <div id="today_short_icon">
          <img src={sunSwitch} alt="sun" />
        </div>
        <div id="today_short_temp">
          <p>
            27<span>o</span>
          </p>
        </div>
        <div id="today_short_name">
          <p>Warszawa</p>
          <p>Today, 10/22</p>
        </div>
        <div id="today_short_wind">
          <img src={windIcon} alt="wind" />
        </div>
      </div>
      <TodayInfo theme={theme} />
    </div>
  );
};

export default TodayPanel;
