import path from 'node:path';
import { BrowserWindow, app } from 'electron';

import { reloader } from './reloader';

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  reloader({
    mainPaths: ['dist/main.js', 'dist/preload.js'],
    rendererPaths: ['dist/index.html', 'dist/app.js', 'dist/app.css'],
  });
}

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    show: false,
    webPreferences: { preload: path.resolve(__dirname, 'preload.js') },
  });

  mainWindow.loadFile('dist/index.html');
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    // if (isDev) mainWindow.webContents.openDevTools({ mode: 'detach' });
  });
});

app.once('window-all-closed', () => app.quit());
