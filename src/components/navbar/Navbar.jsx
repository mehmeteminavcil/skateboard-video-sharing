import "./navbar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="searchContainer">
        <input type="text" placeholder="Search" />
        <SearchRoundedIcon />
      </div>
      <div className="profileContainer">
        <img
          src="https://avatars.githubusercontent.com/u/31599363?v=4"
          alt=""
        />
        <span className="profileName">Thomas</span>
        <KeyboardArrowDownRoundedIcon />
        <div className="notification">
          <NotificationsRoundedIcon className="icon" />
          <div className="counter"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
