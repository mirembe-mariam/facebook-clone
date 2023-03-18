import React, {useState} from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  
  const handlesubmit = (e) => {
    e.preventDefault(); /*prevents it from refreshing on the page*/
    setInput("")
    setimageUrl("")/*wen i type enter after filling in it will retuen an empty input*/
  };
  return (
    <div className="Messagesender">
      <div className="messagesender__top">
        <Avatar />
        <form>
          <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
            className="messagesender__input"
            placeholder={"Whats on your mind?"}
          />
          <input 
          value={imageUrl}placeholder="image URL(optional)"
          onChange={(e) => setimageUrl(e.target.value)} />
          <button onClick={handlesubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messagesender__bottom">
        <div className="messagesender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messagesender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo Video</h3>
        </div>
        <div className="messagesender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
