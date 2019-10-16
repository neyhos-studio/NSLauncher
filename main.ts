// Modules to control application life and create native browser window
import { BrowserWindow } from 'electron';
import { ipcMain as ipc} from 'electron';
import { remote } from 'electron';

import FramesPath from './App/Core/Constantes/FramesPath/FramesPath';

const path = require('path')

export default class Main {
  
  // Electron
  static application: Electron.App;
  static BrowserWindow;

  // NS Windows
  static devWindow: Electron.BrowserWindow;
  static updaterWindows: Electron.BrowserWindow;
  static authenticationWindow: Electron.BrowserWindow;
  static verificationCodeWindow: Electron.BrowserWindow;
  static mainFrameWindow: Electron.BrowserWindow;




  // All windows createFunction
  private static createDevWindow () {    
    // Create the browser window.
    Main.devWindow = new BrowserWindow({
      width: 350,
      height: 300,
      frame: false,
      resizable: false,
      fullscreen: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true
      },
    })

    // and load the index.html of the app.
    Main.devWindow.loadFile('index.html')

    // Open the DevTools.
    Main.devWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    Main.devWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      Main.devWindow = null
    })
  }  
  private static createUpdaterWindows () {
    // Create the browser window.
    Main.updaterWindows = new BrowserWindow({
      width: 350,
      height: 180,
      frame: false,
      resizable: false,
      fullscreen: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true
      },
    })

    // and load the index.html of the app.
    Main.updaterWindows.loadFile(FramesPath.Updater)

    // Open the DevTools.
    Main.updaterWindows.webContents.openDevTools()

    // Emitted when the window is closed.
    Main.updaterWindows.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      Main.updaterWindows = null
    })
  }
  private static createAuthenticationWindow () {
    // Create the browser window.
    Main.authenticationWindow = new BrowserWindow({
      width: 350,
      height: 300,
      frame: false,
      resizable: false,
      fullscreen: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true
      },
    })
  
    // and load the index.html of the app.
    Main.authenticationWindow.loadFile(FramesPath.Authentication)
  
    // Open the DevTools.
    Main.authenticationWindow.webContents.openDevTools()
  
    // Emitted when the window is closed.
    Main.authenticationWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      Main.authenticationWindow = null
    })
  }
  private static createVerificationCodeWindow () {
    // Create the browser window.
    Main.verificationCodeWindow = new BrowserWindow({
      width: 350,
      height: 240,
      frame: false,
      resizable: false,
      fullscreen: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true
      },
    })
  
    // and load the index.html of the app.
    Main.verificationCodeWindow.loadFile(FramesPath.VerificationCode)
  
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
  
    // Emitted when the window is closed.
    Main.verificationCodeWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      Main.verificationCodeWindow = null
    })
  }
  private static createMainFrameWindow () {
    // Create the browser window.
    Main.mainFrameWindow = new BrowserWindow({
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
  
    // and load the index.html of the app.
    Main.mainFrameWindow.loadFile(FramesPath.MainFrame)
  
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
  
    // Emitted when the window is closed.
    Main.mainFrameWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      Main.mainFrameWindow = null
    })
  }



  static main(app: Electron.App, browserWindow: typeof BrowserWindow){

    Main.BrowserWindow = browserWindow;

    Main.application = app;

    Main.application.on('ready', () => {Main.createDevWindow()} );

    Main.application.on('window-all-closed', function () {
      // On macOS it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform !== 'darwin') Main.application.quit()
    });

    Main.application.on('activate', function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (Main.devWindow === null) Main.createDevWindow();
      if (Main.updaterWindows === null) Main.createUpdaterWindows();
      if (Main.authenticationWindow === null) Main.createAuthenticationWindow();
      if (Main.verificationCodeWindow === null) Main.createVerificationCodeWindow();
      if (Main.mainFrameWindow === null) Main.createMainFrameWindow();
    });

    // Callable from outside the main
    ipc.on('load-page-launcher-updater',    () => {Main.createUpdaterWindows()});
    ipc.on('load-page-authentication',      () => {Main.createAuthenticationWindow()});
    ipc.on('load-page-verification-code',   () => {Main.createVerificationCodeWindow()});
    ipc.on('load-page-main-frame',          () => {Main.createMainFrameWindow()});

  };

};