import React from "react";
import "./Feed.css";
import Storyreel from "../Storyreel/Storyreel.js";
import MessageSender from "../MessageSender/MessageSender.js"

function Feed() {
  return (
    <div className="Feed">
      <Storyreel />
      <MessageSender />
    </div>
  );
}

export default Feed;
