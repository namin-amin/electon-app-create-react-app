const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680, show:false, webPreferences: {
    nodeIntegration: true,
    enableRemoteModule: true
}});

  splashWin = new BrowserWindow({width:600,height:250,hasShadow:true,alwaysOnTop:true,show:false,frame:false})
  splashWin.loadFile(__dirname+'/static/splash.html')
  splashWin.on('ready-to-show',()=>splashWin.show())

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.removeMenu();

  setTimeout(()=>{
    splashWin.destroy()
    mainWindow.show()
  },6000)
  mainWindow.on('closed', () => mainWindow = null);
  }
          
  
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
