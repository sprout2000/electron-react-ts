import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("myAPI", {
  updateTitle: (arg: number): Promise<void> =>
    ipcRenderer.invoke("update-title", arg),
});
