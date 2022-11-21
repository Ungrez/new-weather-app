import { useEffect } from "react";
import { apiKey } from "./api";
import "../sass/TodayPanel.scss";
const TodayPanel = (props: any) => {
  const API = `https://api.openweathermap.org/data/2.5/weather?q=Warszawa&units=metric&appid=${apiKey}`;
  const { theme, handleTheme } = props;
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div id="today">
      <div id="today_short" className={theme ? "--dark" : "--light"}>
        <div id="today_short_icon"></div>
        <div id="today_short_temp">
          <p>27</p>
        </div>
        <div id="today_short_name">
          <p>Warszawa</p>
          <p>Today, 10/22</p>
        </div>
        <div id="today_short_wind"></div>
      </div>
      <div id="today_info" className={theme ? "--dark" : "--light"}></div>
    </div>
  );
};

export default TodayPanel;
