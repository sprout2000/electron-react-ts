import path from 'path';
import { BrowserWindow, app } from 'electron';

if (process.env.NODE_ENV === 'development') {
  require('electron-nice-auto-reload')({
    rootPath: path.join(process.cwd(), 'dist'),
    rules: [{ action: 'app.relaunch' }],
  });
}

app.whenReady().then(() => {
  new BrowserWindow().loadFile('dist/index.html');
});

app.once('window-all-closed', () => app.quit());
