
const { app, BrowserWindow } = require('electron')
app.whenReady().then(() => {
  const win = new BrowserWindow()
win.loadFile('index.html')
  // win.loadUrl('http://example.com')
})
app.on('window-all-closed', () => {
    app.quit()
})
