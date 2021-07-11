import { contextBridge, ipcRenderer } from 'electron';

// 'myAPI' が API キー
contextBridge.exposeInMainWorld('myAPI', {
  openDialog: async (): Promise<void | string[]> =>
    await ipcRenderer.invoke('open-dialog'),
});
