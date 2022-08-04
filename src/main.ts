import path from 'path';
import { searchDevtools } from 'electron-search-devtools';
import { BrowserWindow, app, ipcMain, session } from 'electron';

const isDev = process.env.NODE_ENV === 'development';

// In development mode, use electron-reload to hot reload.
if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.resolve(
      __dirname,
      process.platform === 'win32'
        ? '../node_modules/electron/dist/electron.exe'
        : '../node_modules/.bin/electron'
    ),
  });
}

// Create an instance of BrowserWindow in the application startup event.
app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  ipcMain.on('update-title', (_e, arg) => {
    mainWindow.setTitle(`Electron App: ${arg}`);
  });

  // Load the React Devtools extension and open devtools in a new window.
  if (isDev) {
    searchDevtools('REACT').then((devtools) => {
      session.defaultSession.loadExtension(devtools, { allowFileAccess: true });
    });
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  // Load the renderer process.
  mainWindow.loadFile('dist/index.html');
});

// Exit the application when all windows are closed.
app.once('window-all-closed', () => app.quit());
