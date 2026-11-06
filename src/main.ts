import path from "node:path";
import { app, BrowserWindow, ipcMain } from "electron";

import {
  installExtension,
  REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer";

const isDev = process.env.NODE_ENV === "development";

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

  if (isDev) {
    installExtension(REACT_DEVELOPER_TOOLS, {
      loadExtensionOptions: { allowFileAccess: true },
    });
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }
});

app.once("window-all-closed", () => app.quit());
