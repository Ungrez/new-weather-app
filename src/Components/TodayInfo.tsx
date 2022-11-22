import refreshIcon from "../interface-icon/refresh.svg";
import windInfo from "../interface-icon/wind-info.svg";
import clouds from "../interface-icon/clouds-info.svg";
import rainDrop from "../interface-icon/raindrops.svg";
import sunSet from "../interface-icon/sunset.svg";
import temp from "../interface-icon/temperature.svg";
import moonSet from "../interface-icon/moonset.svg";
import "../sass/TodayInfo.scss";

const TodayInfo = (props: any) => {
  const { theme } = props;
  return (
    <div id="today_info" className={theme ? "--dark" : "--light"}>
      <div id="today_info_label">
        <p>TODAY</p>
        <img src={refreshIcon} alt="refresh" />
      </div>
      <div id="today_info_container" className={theme ? "--dark" : "--light"}>
        <div id="today_info_container_box">
          <img src={windInfo} alt="wind" />
          <p>Haze</p>
          <p>9km/h</p>
        </div>
        <div id="today_info_container_box">
          <img src={rainDrop} alt="wind" />
          <p>Drop</p>
          <p>9km/h</p>
        </div>
        <div id="today_info_container_box">
          <img src={clouds} alt="wind" />
          <p>Cloud</p>
          <p>9km/h</p>
        </div>
        <div id="today_info_container_box">
          <img src={sunSet} alt="wind" />
          <p>Sun rise</p>
          <p>9km/h</p>
        </div>
        <div id="today_info_container_box">
          <img src={temp} alt="wind" />
          <p>temp</p>
          <p>9km/h</p>
        </div>
        <div id="today_info_container_box">
          <img src={moonSet} alt="wind" />
          <p>sun set</p>
          <p>9km/h</p>
        </div>
      </div>
    </div>
  );
};

export default TodayInfo;
