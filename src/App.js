/*This line of code is importing the Header component from the file located at "./Header/Header".
The syntax for importing a component in React is import ComponentName from "file/path". Here, 
ComponentName is the name that you will use to refer to the imported component within your code, 
and "file/path" is the relative path to the file where the component is defined.
In this case, the component is named Header, and it is being imported from a file located in 
a subdirectory called Header. The . at the beginning of the path indicates that the file is 
located in the same directory as the current file.Note that the file extension (e.g., .js) is usually
 omitted when importing components in React, as the file type is assumed to be a JavaScript module.*/
import React from "react";
import "./App.css";
import Header from "./Header/Header.js";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed.js";
import Login from "./Login/Login.js";
import { useStateValue } from "./StateProvider/StateProvider";
//import Wiggets from "./Wiggets/Wiggets.js";
function App() {
  const [{ user}, dispatch] = useStateValue();/*if i set const user="null" its considered a truthy statement in js therefore it displays the fb build but if i set it to const user=null without the ""
   it displays "login"*/
  /*const user = null;In this case,the user variable is being used to store the user object or data,and it is initially set to null.The purpose of this variable is to 
  determine whether the user is logged in or not, which in turn will determine what content is displayed on the page.The const keyword is used to declare a variable that
  is immutable or cannot be reassigned. Since user is not being reassigned in this component, using const is appropriate.*/
  return (
    <div className="app">
     {/*The expression inside the ternary operator checks whether user is falsy (in this case, whether it is null).If user is falsy, the component will render an 
      h1 element with the text "Login". This is done using the logical NOT operator (!) to invert the truthiness of the user variable. If user is truthy, the component will
  render several other components, including a Header, a Sidebar, and a Feed*/}
      {!user ? (
        <Login/>
      ) : (
        <>
          {/*WE CALL OUR HEADER COMPONENT*/}
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            {/*<Wiggets />*/}
          </div>
        </>
      )}
    </div>
  );
}
export default App;
