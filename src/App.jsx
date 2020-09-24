import React from "react";
import { Switch, Route } from "react-router-dom";

import classes from "./App.module.css";
import Calender from "./components/Workers/Calender/Calender";
import Tasks from "./components/Workers/Tasks/Tasks";
import Archived from "./components/Workers/Archived/Archived";
import Tabs from './components/UI-components/Tab/Tabs'

function App() {

  return (
 
    <div className={classes.App}>
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
