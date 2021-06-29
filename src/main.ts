import path from 'path';
import { BrowserWindow, app, session } from 'electron';
import { searchDevtools } from './searchDevtools';

const isDev = process.env.NODE_ENV === 'development';

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (isDev) mainWindow.webContents.openDevTools({ mode: 'detach' });

  mainWindow.loadFile('dist/index.html');
  mainWindow.once('ready-to-show', () => mainWindow.show());
};

app.whenReady().then(async () => {
  if (isDev) {
    const devtools = await searchDevtools('REACT');
    if (devtools) {
      await session.defaultSession.loadExtension(devtools, {
        allowFileAccess: true,
      });
    }
  }

  createWindow();
});

app.once('window-all-closed', () => app.quit());
