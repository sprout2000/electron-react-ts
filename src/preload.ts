import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('myAPI', {
  update: (count: number) => ipcRenderer.send('update-title', count),
});
