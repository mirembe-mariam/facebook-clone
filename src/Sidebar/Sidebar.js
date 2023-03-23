import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import StorefrontIcon from "@material-ui/icons/Storefront";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import SideBarRow from "../SideBarRow/SideBarRow";
import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
//mport firebase from "../Firebase.js"
//import 'firebase/auth'
import { auth, provider } from "../Firebase";
import "./Sidebar.css";
function Sidebar() {
  //const user = firebase.auth().currentUser;
  const [{user},dispatch] = useStateValue();
  return (
    <div className="Sidebar">
      <SideBarRow src={user.photoURL}
       title={user.displayName} />
      <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SideBarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SideBarRow Icon={PeopleIcon} title="Friends" />
      <SideBarRow Icon={ChatIcon} title="Messenger" />
      <SideBarRow Icon={StorefrontIcon} title="Marketpalce" />
      <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
      <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
