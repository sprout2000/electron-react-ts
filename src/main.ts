import path from "node:path";
import { BrowserWindow, app, ipcMain } from "electron";

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
    },
  });

  ipcMain.handle("update-title", (_e, arg) => {
    mainWindow.setTitle(`Electron App: ${arg}`);
  });

  mainWindow.loadFile("dist/index.html");
  // if (DEBUG) mainWindow.webContents.openDevTools({ mode: "detach" });
});

app.once("window-all-closed", () => app.quit());
