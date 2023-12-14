const {
    app,
    BrowserWindow,
    protocol,
    globalShortcut,
    Menu,
    shell
} = require('electron')
const path = require('path');

Menu.setApplicationMenu(null)

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1400,
        height: 900,
        icon: path.join(__dirname, './book.ico'),
        title: "电子手册系统",
        webPreferences: {
            partition: String(+new Date())
        },
    })
    win.webContents.openDevTools()

    // win.loadFile('index.html')
    win.loadURL('http://127.0.0.1:8080')
}



app.whenReady().then(() => {
    createWindow()
})


app.on('window-all-closed', function () {
    // shell.openPath(path.resolve(__dirname, '.\\stop.bat'));
    shell.openPath(path.resolve() + '\\stop.bat');
    if (process.platform !== 'darwin') app.quit()
})