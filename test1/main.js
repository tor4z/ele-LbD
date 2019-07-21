'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindows = null;

app.on('windows-all-closed', () => {
    if(Process.platform != 'darwin')
        app.quit();
});

app.on('ready', () => {
    mainWindows = new BrowserWindow();
    mainWindows.loadURL(`file://${__dirname}/index.html`);
    mainWindows.on('closed', () => {
        mainWindows = null;
    });
});