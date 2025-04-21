const {app, BrowserWindow} = require('electron');



const createWindow = () => {
    const window = new BrowserWindow({
        width: 700,
        height: 550,
        autoHideMenuBar: true,
        webPreferences: {
           nodeIntegration: true,
        },   
        resizable: false,
        icon: __dirname + 'calculadora.ico',
    });

    window.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

