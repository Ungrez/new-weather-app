import menuIcon from "../interface-icon/nav-icon.svg";
import sunSwitch from "../interface-icon/sun-switch.svg";
import moonSwitch from "../interface-icon/moon-switch.svg";
import "../sass/NavBar.scss";

const NavBar = (props: any) => {
  const { theme, handleTheme } = props;
  return (
    <div id="nav">
      <div id="nav_menu">
        <img src={menuIcon} alt="menu" />
      </div>
      <div id="nav_theme">
        <input
          type="checkbox"
          id="nav_theme_toggle"
          onClick={() => handleTheme(!theme)}
        />
        <label
          htmlFor="nav_theme_toggle"
          className={theme ? "--dark" : "--light"}
        >
          <img src={sunSwitch} alt="light_theme" className="sun" />
          <img src={moonSwitch} alt="dark_theme" className="moon" />
        </label>
      </div>
    </div>
  );
};

export default NavBar;
