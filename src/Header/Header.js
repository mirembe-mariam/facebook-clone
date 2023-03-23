import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "../StateProvider/StateProvider";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Header() {
  const [{user},dispatch] =  useStateValue();//we are pulling the user frm the data layer since we have an avatar
  //in the header
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png"
          alt="Facebook Logo"
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="search facebook" type="text" />
        </div>
      </div>
      <div className="header__middle">
        <div
          className="header__option
        header__option--active"
        >
          {" "}
          {/*we add this other class name on homeicon coz we want it to have a blue line below*/}
          <HomeIcon fontsize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontsize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontsize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontsize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleOutlinedIcon fontsize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} /> {/*this src is for the google account pic*/}
          {/*<h4>mirembe</h4>*/}
          <h4>{user.displayName}</h4> {/*this returns the google display name*/}
        </div>
        <IconButton>
          {" "}
          {/*we create icon button component to wrap the addicon */}
          <AddIcon />
        </IconButton>

        <IconButton>
          {" "}
          {/*we create icon button component to wrap the addicon */}
          <ForumIcon />
        </IconButton>

        <IconButton>
          {" "}
          {/*we create icon button component to wrap the addicon */}
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          {" "}
          {/*we create icon button component to wrap the addicon */}
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
