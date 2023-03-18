import React from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";

function MessageSender() {
  const handlesubmit = (e) => {
    e.preventDefault();/*prevents it from refreshing*/
  };
  return (
    <div className="Messagesender">
      <div className="messagesender__top">
        <Avatar />
        <form>
          <input
            className="messagesender__input"
            placeholder={"Whats on your mind"}
          />
          <input placeholder="image URL(optional)" />
          <button onClick={handlesubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messagesender__bottom"></div>
    </div>
  );
}

export default MessageSender;
