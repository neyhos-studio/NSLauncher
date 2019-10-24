import { BrowserWindow } from 'electron';
import { ipcMain as ipc} from 'electron';
import { remote } from 'electron';

import FramesPath from './App/Core/Constantes/FramesPath/FramesPath';
import User from './App/Entities/User/User';

const path = require('path')

export default class Main {
  
  static application: Electron.App;
  static BrowserWindow;
  static NSWin: Electron.BrowserWindow;
  

  private static CreateNSWin () {

    Main.NSWin = new BrowserWindow({
      width: 1024,
      height: 640,
      frame: false,
      resizable: false,
      fullscreen: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true
      },
    })
  
    Main.NSWin.loadFile(FramesPath.Authentication)
  
    // mainWindow.webContents.openDevTools()
  
    Main.NSWin.on('closed', function () {
      Main.NSWin = null
    })
  }



  static main(app: Electron.App, browserWindow: typeof BrowserWindow){

    Main.BrowserWindow = browserWindow;
    Main.application = app;

    Main.application.on('ready', () => {
      Main.CreateNSWin();     
    });

    Main.application.on('window-all-closed', function () {
      if (process.platform !== 'darwin') Main.application.quit()
    });

    Main.application.on('activate', function () {
      if (Main.NSWin === null) Main.CreateNSWin();
    });   

  };

};