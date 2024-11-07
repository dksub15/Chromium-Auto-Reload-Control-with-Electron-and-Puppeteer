const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  toggleRefresh: () => ipcRenderer.send('toggle-refresh'),
  updateStatus: (callback) => ipcRenderer.on('status', (event, status) => callback(status)),
});