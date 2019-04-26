const electron = require("electron");

const { app, BrowserWindow } = require("electron") ;

function createWindow() {

  let win = new BrowserWindow({ width: 1100, height: 900})

  win.loadFile("index.html");
  win.webContents.openDevTools();
}

app.on("ready", createWindow);
