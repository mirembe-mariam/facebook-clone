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
function App() {
  return (
    <div className="app">
      {/*WE CALL OUR HEADER COMPONENT*/}
      <Header />

      <div className="app_body">
        <Sidebar />

        {/*<Sidebar />*/}
        {/*app body*/}
        {/*side bar*/}
        {/*feed*/}
        {/*widgets*/}
      </div>
    </div>
  );
}

export default App;
