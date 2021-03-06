import { MenuItemConstructorOptions, app, shell } from "electron";

const isMac = process.platform === "darwin"

const macTemplate: MenuItemConstructorOptions[] = [
    // { role: 'appMenu' }
    {
        label: app.name,
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    },
    // { role: 'fileMenu' }
    {
        label: 'File',
        submenu: [
            { role: 'close' }
        ]
    },
    // { role: 'editMenu' }
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            { role: 'pasteAndMatchStyle' },
            { role: 'delete' },
            { role: 'selectAll' },
            { type: 'separator' },
            {
                label: 'Speech',
                submenu: [
                    { role: 'startSpeaking' },
                    { role: 'stopSpeaking' }
                ]
            }
        ]
    },
    // { role: 'viewMenu' }
    {
        label: 'View',
        submenu: [
            { role: 'reload' },
            { role: 'forceReload' },
            { role: 'toggleDevTools' },
            { type: 'separator' },
            { role: 'resetZoom' },
            { role: 'zoomIn' },
            { role: 'zoomOut' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    },
    // { role: 'windowMenu' }
    {
        label: 'Window',
        submenu: [
            { role: 'minimize' },
            { role: 'zoom' },
            { type: 'separator' },
            { role: 'front' },
            { type: 'separator' },
            { role: 'window' }
        ]
    },
    {
        role: 'help',
        submenu: [
            {
                label: 'Learn More',
                click: async () => {
                    await shell.openExternal('https://electronjs.org')
                }
            }
        ]
    }
]

const winOrLinuxTemplate: MenuItemConstructorOptions[] = [
    // { role: 'fileMenu' }
    {
        label: '??????',
        submenu: [
            { role: 'quit', label: "??????", id: "??????-??????" },
            {
                label: "hello",
                toolTip: "??????",
                id: "hello",
                click: (item, win, e) => {
                    console.log(item, win)
                }
            }
        ],
        id: "File"
    },
    // { role: 'editMenu' }
    {
        label: '??????',
        submenu: [
            { role: 'undo', label: "??????" },
            { role: 'redo', label: "??????" },
            { type: 'separator' },
            { role: 'cut', label: "??????" },
            { role: 'copy', label: "??????" },
            { role: 'paste', label: "??????" },
            { role: 'delete', label: "??????" },
            { type: 'separator' },
            { role: 'selectAll', label: "??????" }
        ]
    },
    // { role: 'viewMenu' }
    {
        label: '??????',
        submenu: [
            { role: 'reload', label: "????????????" },
            { role: 'forceReload', label: "????????????" },
            { role: 'toggleDevTools', label: "?????????????????????" },
            { type: 'separator' },
            { role: 'resetZoom', label: "????????????" },
            { role: 'zoomIn', label: "??????" },
            { role: 'zoomOut', label: "??????" },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    },
    // { role: 'windowMenu' }
    {
        label: '??????',
        submenu: [
            { role: 'minimize', label: "?????????" },
            { role: 'zoom', label: "?????????" },
            { role: 'close', label: "??????" }
        ]
    },
    {
        role: 'help',
        label: "??????",
        submenu: [
            {
                label: '??????',
                click: async () => {
                    await shell.openExternal('https://electronjs.org')
                }
            }
        ]
    }
]

export const menuTemplate = isMac ? macTemplate : winOrLinuxTemplate