import React from 'react'
import classes from './Topbar.module.css';
const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;


function Topbar() {
 const pressed = () => {
    ipcRenderer.send("off");
  };
  const minimize = () => {
    ipcRenderer.send('minimize')
  }
    return (
        <div className={classes.container}>
            <button onClick={minimize} className={classes.minimize} title="minimize">-</button>
         <button onClick={pressed} className={classes.close} title="close">x</button>
            
        </div>
    )
}

export default Topbar
