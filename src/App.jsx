import React from "react";
import { Tabs,Tab } from 'react-bootstrap';
import './bootstrap.min.css';
import Add from "./components/Workers/Add/Add";
import Multiply from "./components/Workers/Multiply/Multiply";
import Devide from "./components/Workers/Devide/Devide";

function App() {

  return (
<Tabs defaultActiveKey="add" id="uncontrolled-tab-example">
  <Tab eventKey="add" title="Add" mountOnEnter unmountOnExit>
    <Add />
  </Tab>
  <Tab eventKey="multy" title="Multiply" mountOnEnter unmountOnExit>
    <Multiply />
  </Tab>
  <Tab eventKey="devide" title="Devide" mountOnEnter unmountOnExit>
    <Devide/>
  </Tab>
</Tabs>


  );

}

export default App;
