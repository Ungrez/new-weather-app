import { useState } from "react";
import NavBar from "./NavBar";
import TodayPanel from "./TodayPanel";
import Forecast from "./Forecast";
import "../sass/App.scss";

const App = () => {
  const [dark, setDark] = useState<boolean>(false);
  return (
    <>
      <div id="app" className={dark ? "--dark" : "--light"}>
        <NavBar theme={dark} handleTheme={setDark} />
        <TodayPanel theme={dark} handleTheme={setDark} />
        <Forecast />
      </div>
      <div id="app_background" className={dark ? "--dark" : "--light"}></div>
    </>
  );
};

export default App;
