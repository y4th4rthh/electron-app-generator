const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    icon: path.join(__dirname, 'neura.ico'),
     autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
    },
  });

  // Load your built React app
  win.loadFile(path.join(__dirname, 'build', 'index.html'));

  // win.webContents.openDevTools();

   win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  win.webContents.on('will-navigate', (event, url) => {
    const currentUrl = win.webContents.getURL();
    if (url !== currentUrl) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });
  
}

app.whenReady().then(createWindow);

 // Open Chrome DevTools

