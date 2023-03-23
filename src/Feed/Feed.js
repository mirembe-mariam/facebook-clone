import React, {useState,useEffect} from "react";
//import React, {useState} from "react";
import "./Feed.css";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import Storyreel from "../Storyreel/Storyreel.js";
import MessageSender from "../MessageSender/MessageSender.js";
import Post from "../Post/Post.js";
import db from "../Firebase.js";
//import { onSnapshot } from "firebase/firestore";
function Feed() {
  const [posts, setPosts] = useState([]);
 useEffect(() => {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });

    return unsubscribe;
  }, []);

  return (
    <div className="Feed">
      <Storyreel />
     <MessageSender />
      {/*posts.map(({ id, data }) => (*/}
      {posts.map((post) => (
        <Post
          key={post.id}
          ///id={id}
          profilePic={post.data.profilePic}
          username={post.data.username}
          //description={post.data.description}
          message={post.data.message}
          image={post.data.image}
          timestamp={post.data.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;


//function Feed() {
  //const [posts, setPosts] = useState([]);
  //<div className="Feed">
     

      //{posts.map((post) => (
        //<Post
         // key={post.id}
          //profilePic={post.data.profilePic}
          //message={post.data.message}
          //timestamp={post.data.timestamp}
          //username={post.data.username}
          //image={post.data.image}
        ///>
      //))}
    //</div>
  //);
//}

//export default Feed;



//function Feed() {
  //const [posts, setPosts] =  useState([]);
  //useEffect(() => {
  //db.collection("posts").onSnapshot((snapshot) => 
    //setPosts(snapshot.docs.map((doc) => ({ id: doc.id,data:doc.data() })))
 // ) //realtime conn to the db therefore it automatically pulls the recent activity
 // }, []);
//return (
    //<Post 
      //profilePic="https://i.pinimg.com/originals/75/84/54/758454872f93bf70408ce9c8bc4d77a2.jpg"
      //message="WOW THIS IS AMAZING"
      //timestamp="this is a timestamp" 
      //username="mariam"
     //image="https://i.pinimg.com/736x/5d/f9/79/5df979ad04ec70bd4a63236c06c81887.jpg"
      ///>
     //<Post/>
   
  