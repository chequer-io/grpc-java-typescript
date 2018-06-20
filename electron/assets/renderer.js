// In renderer process (web page).
const {
  ipcRenderer
} = require('electron');

ipcRenderer.on('grpc', (event, message) => {
  console.log(message);
});
