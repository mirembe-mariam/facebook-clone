import EmojiFlagsIcon from "@material-ui/icons";
import ExpandMoreOutlinedIcon from "@material-ui/icons";
import VideoLibraryIcon from "material-ui/icons";
import StoreFrontIcon from "@material-ui/icons";
import LocalHospitalIcon from "@material-ui/icons";
import PeopleIcon from "@material-ui/icons";
import ChatIcon from "@material-ui/icons";
import React from "react";
import SideBarRow from "../SideBarRow/SideBarRow";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="Sidebar">
      <SideBarRow src="../Image1/clone.jpeg" title="mirembe mariam" />
      <SideBarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SideBarRow Icon={PeopleIcon} title="Friends" />
      <SideBarRow Icon={ChatIcon} title="Messenger" />
      <SideBarRow Icon={StoreFrontIcon} title="Marketpalce" />
      <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
      <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
