import path from 'path';
import { searchDevtools } from 'electron-search-devtools';
import { BrowserWindow, app, ipcMain, session } from 'electron';

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  const execPath =
    process.platform === 'win32'
      ? '../node_modules/electron/dist/electron.exe'
      : '../node_modules/.bin/electron';

  require('electron-reload')(__dirname, {
    electron: path.resolve(__dirname, execPath),
  });
}

const createWindow = async () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  ipcMain.on('update-title', (_e, arg) => {
    mainWindow.setTitle(`Electron React TypeScript: ${arg}`);
  });

  if (isDev) {
    const devtools = await searchDevtools('REACT');
    devtools &&
      (await session.defaultSession.loadExtension(devtools, {
        allowFileAccess: true,
      }));
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  mainWindow.loadFile('dist/index.html');
};

app.whenReady().then(createWindow);
app.once('window-all-closed', () => app.quit());
