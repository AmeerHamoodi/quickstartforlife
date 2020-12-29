const { app, BrowserWindow, ipcMain } = require("electron");
const log = require("electron-log");
const { autoUpdater } = require("electron-updater")

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';

class Main {
    constructor() {
        let self = this;
        this.mainWindow = null;

        this._init();

    }
    _init() {
        app.whenReady().then(() => {
            this.autoupdate();
            this.setWindowMain();

            this.mainWindow.once("ready-to-show", () => {
                this.mainWindow.show();
            })
        });


    }
    setWindowMain() {
        this.mainWindow = new BrowserWindow({
            width: 1800,
            height: 1020,
            webPreferences: {
                nodeIntegration: true
            }
        });
        this.mainWindow.loadURL(__dirname + "/devBuild/index.html");
        this.mainWindow.webContents.openDevTools();
    }
    autoupdate() {
        autoUpdater.checkForUpdatesAndNotify();

        autoUpdater.on('update-available', (info) => {
            this.mainWindow.webContents.send("updateMessage", { status: "Update available!" });
        })

        autoUpdater.on('update-downloaded', (info) => {
            autoUpdater.quitAndInstall();
        })
    }

}

const main = new Main();