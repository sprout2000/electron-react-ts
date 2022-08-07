import path from 'path';
import { BrowserWindow, app, session } from 'electron';
import { searchDevtools } from 'electron-search-devtools';

const isDev = process.env.NODE_ENV === 'development';

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

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow();

  if (isDev) {
    searchDevtools('REACT').then((devtools) => {
      session.defaultSession.loadExtension(devtools, { allowFileAccess: true });
    });
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  mainWindow.loadFile('dist/index.html');
});

app.once('window-all-closed', () => app.quit());
