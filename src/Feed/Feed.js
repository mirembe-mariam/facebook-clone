import React from "react";
import "./Feed.css";
import Storyreel from "../Storyreel/Storyreel.js";
import MessageSender from "../MessageSender/MessageSender.js"
import Post from "../Post/Post.js";

function Feed() {
  return (
    <div className="Feed">
      <Storyreel />
      <MessageSender />
      <Post 
      profilePic="https://i.pinimg.com/originals/75/84/54/758454872f93bf70408ce9c8bc4d77a2.jpg"
      message="WOW THIS IS AMAZING"
      timestamp="this is a timestamp" 
      username="mariam"
     image="https://i.pinimg.com/736x/5d/f9/79/5df979ad04ec70bd4a63236c06c81887.jpg"
      />
     {/* <Post/>*/}
    </div>
  );
}

export default Feed;
