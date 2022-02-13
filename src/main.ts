import path from 'path';
import { BrowserWindow, app, session, nativeTheme } from 'electron';
import { searchDevtools } from 'electron-search-devtools';

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  const execPath =
    process.platform === 'win32'
      ? '../node_modules/electron/dist/electron.exe'
      : '../node_modules/.bin/electron';

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('electron-reload')(__dirname, {
    electron: path.resolve(__dirname, execPath),
  });
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    show: false,
    backgroundColor: nativeTheme.shouldUseDarkColors ? '#1e1e1e' : '#f6f6f6',
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
    const devtool = await searchDevtools('REACT', { browser: 'google-chrome' });
    if (devtool) {
      await session.defaultSession.loadExtension(devtool, {
        allowFileAccess: true,
      });
    }
  }

  createWindow();
});

app.setAboutPanelOptions({
  applicationName: app.name,
  applicationVersion:
    process.platform === 'darwin'
      ? app.getVersion()
      : `v${app.getVersion()} (${process.versions['electron']})`,
  version: process.versions['electron'],
});

app.once('window-all-closed', () => app.quit());
