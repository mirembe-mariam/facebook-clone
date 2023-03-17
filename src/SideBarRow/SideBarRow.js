/*In React, props (short for properties) are a way to pass data from a parent component to its child
 component(s).In the example code you provided, props is passed as an argument to the SideBarRow function
component. This object contains any data that the parent component wishes to send to SideBarRow. In this 
case, props likely contains a title property that specifies the text to be displayed in the p element.Using
props allows for reusable and modular code in React, as it allows a component to be reused with different
data. This means that a single component can have multiple instances with different content, without having 
to create separate components for each instance.*/
import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBarRow.css";
/*function SideBarRow(props)or you can just pass in the '{title}' and not props then in the 'p'tag just
write <p>{title}</p>*/
function SideBarRow(src, Icon, title) {
  /*'src' will be for the usrs image, then the 'icon' for the icons against the titles.*/
  return (
    <div className="SideBarRow">
      {src && <Avatar src={src} />}{" "}
      {/*if tehre is a source then we are gg toreturn an avatar with the
      source being used as the source of the prop*/}
      {Icon && <Icon />}
      {/*use capital letters for components even wen creating a fle component*/}
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarRow;
