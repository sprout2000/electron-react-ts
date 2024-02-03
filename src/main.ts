import path from "node:path";
import { BrowserWindow, app } from "electron";

if (process.env.NODE_ENV === "development") {
  require("electron-reload")(__dirname, {
    electron: path.resolve(
      __dirname,
      process.platform === "win32"
        ? "../node_modules/electron/dist/electron.exe"
        : "../node_modules/.bin/electron",
    ),
    forceHardReset: true,
    hardResetMethod: "exit",
  });
}

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("dist/index.html");
  // mainWindow.webContents.openDevTools({ mode: "detach" });
});

app.once("window-all-closed", () => app.quit());
