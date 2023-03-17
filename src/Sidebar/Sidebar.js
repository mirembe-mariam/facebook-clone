import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import StorefrontIcon from "@material-ui/icons/Storefront";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import SideBarRow from "../SideBarRow/SideBarRow";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="Sidebar">
      <SideBarRow src="../Image1/WhatsApp Image 2023-03-18 at 00.55.48.jpeg" title="mirembe mariam" />
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
