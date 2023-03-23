import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../StateProvider/StateProvider";
import db from "../Firebase.js";
import firebase from "../Firebase.js";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
//import Button from "@material-ui/icons/Button";
function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  //const [username, setUsername] = useState(""); // Add this line
  //const [profilePic, setProfilePic] = useState(""); // Add this line
  //const [timestamp, setTimestamp] = useState(""); // Add this line
  const [posts, setPosts] = useState([]); // Add this line

  const handlesubmit = (e) => {
    e.preventDefault(); /*prevents it from refreshing on the page*/
    db.collection("posts").add({
      //we are programaticcaly adding a post in the inpu filed of the messsagersender
      //instaed of doing it manually in the collections
      // Add post to Firestore
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.displayName,
      image: imageUrl,
    });
    // Listen for changes to posts collection in real-time
    db.collection("posts").onSnapshot((snapshot) => {
      // Create an array to hold the posts
      let posts = [];
      // Loop through each document in the snapshot
      snapshot.forEach((doc) => {
        // Get data from the document
        let data = doc.data();
        // Add the document ID to the data object
        data.id = doc.id;
        // Push the data object to the posts array
        posts.push(data);
      });
      // Set the state of the posts array
      setPosts(posts);
    });
    // Clear the input and image URL fields
    //setInput('');
    //setImageUrl('');
    setInput("");
    setimageUrl(
      ""
    ); /*wen i type enter after filling in it will retuen an empty input*/
  };
  return (
    <div className="Messagesender">
      <div className="messagesender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messagesender__input"
            //placeholder={'Whats on your mind, ${user.displayName}?'}
            placeholder={"Whats on your mind, mirembe mariam?"}
          />
          <input
            value={imageUrl}
            placeholder="image URL(optional)"
            onChange={(e) => setimageUrl(e.target.value)}
          />
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
