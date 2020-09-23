import React from "react";
import { Switch, Route } from "react-router-dom";

import classes from "./App.module.css";
import Calender from "./components/Workers/Calender/Calender";
import Tasks from "./components/Workers/Tasks/Tasks";
import Archived from "./components/Workers/Archived/Archived";
import Tabs from './components/UI-components/Tab/Tabs'
import Topbar from "./components/UI-components/Topbar/Topbar";


// const electron = window.require("electron");
// const ipcRenderer = electron.ipcRenderer;
// const os = window.require('os');

function App() {
  // const pressed = () => {
  //   ipcRenderer.send("off");
  // };
  // const minimize = () => {
  //   ipcRenderer.send('minimize')

  // // dialog.showOpenDialog({
  // //     properties: ["openDirectory"],
  // //   },).then(res=>alert(res.filePaths))
  // //   .catch(err=>alert("something went wrong"));

  // //   ;
  // };

  return (
 
    <div className={classes.App}>
    <Topbar />
    <Switch>
      <Route path="/" exact>
       <Tasks />
      </Route>
      <Route path="/calender">
        <Calender />
      </Route>
      <Route path="/archived">
        <Archived />
      </Route>
    </Switch>
    <Tabs />
    </div>
    

  );
    
}

export default App;
