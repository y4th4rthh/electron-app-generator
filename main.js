const { app, BrowserWindow } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,     
    icon: path.join(__dirname, 'neura.ai.ico'),
    webPreferences: {
      contextIsolation: true,
    },
  });

  win.setMenuBarVisibility(false);

  // Load your built React app
  win.loadFile(path.join(__dirname, 'build', 'index.html'));

  autoUpdater.checkForUpdatesAndNotify();

}

app.whenReady().then(createWindow);
