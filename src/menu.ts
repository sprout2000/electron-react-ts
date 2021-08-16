import { Menu, MenuItemConstructorOptions, shell } from 'electron';

const isDarwin = process.platform === 'darwin';
const electronVersion = process.versions['electron'];

export const createMenu = (): Menu => {
  const template: MenuItemConstructorOptions[] = [
    {
      label: 'File',
      submenu: [
        {
          label: isDarwin ? 'Close' : 'Exit',
          role: isDarwin ? 'close' : 'quit',
        },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Undo',
          role: 'undo',
          accelerator: 'CmdOrCtrl+Z',
        },
        {
          label: 'Redo',
          role: 'redo',
          accelerator: 'CmdOrCtrl+Y',
        },
        { type: 'separator' },
        {
          label: 'Cut',
          role: 'cut',
          accelerator: 'CmdOrCtrl+X',
        },
        {
          label: 'Copy',
          role: 'copy',
          accelerator: 'CmdOrCtrl+C',
        },
        {
          label: 'Paste',
          role: 'paste',
          accelerator: 'CmdOrCtrl+V',
        },
        {
          label: 'Delete',
          role: 'delete',
        },
        { type: 'separator' },
        {
          label: 'Select All',
          role: 'selectAll',
          accelerator: 'CmdOrCtrl+A',
        },
      ],
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          role: 'reload',
          accelerator: 'CmdOrCtrl+R',
        },
        {
          label: 'Force Reload',
          role: 'forceReload',
          accelerator: 'CmdOrCtrl+Shift+R',
        },
        {
          label: 'Toggle Developer Tools',
          accelerator: isDarwin ? 'Cmd+Option+I' : 'Ctrl+Shift+I',
          role: 'toggleDevTools',
        },
        { type: 'separator' },
        {
          label: 'Actual Size',
          role: 'resetZoom',
          accelerator: 'CmdOrCtrl+0',
        },
        {
          label: 'Zoom In',
          role: 'zoomIn',
          accelerator: 'CmdOrCtrl+Plus',
        },
        {
          label: 'Zoom Out',
          role: 'zoomOut',
          accelerator: 'CmdOrCtrl+-',
        },
        { type: 'separator' },
        {
          label: 'Toggle Full Screen',
          role: 'togglefullscreen',
          accelerator: isDarwin ? 'Cmd+Ctrl+F' : 'F11',
        },
      ],
    },
    {
      label: 'Window',
      submenu: [
        {
          label: 'Minimize',
          role: 'minimize',
          accelerator: 'CmdOrCtrl+M',
        },
        {
          label: 'Zoom',
          role: 'zoom',
        },
        {
          label: 'Close',
          role: 'close',
          accelerator: 'CmdOrCtrl+W',
        },
      ],
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'Learn More',
          click: async () => {
            await shell.openExternal('https://electronjs.org');
          },
        },
        {
          label: 'Documentation',
          click: async () => {
            await shell.openExternal(
              `https://github.com/electron/electron/tree/v${electronVersion}/docs#readme`
            );
          },
        },
        {
          label: 'Community Discussions',
          click: async () => {
            await shell.openExternal('https://discord.com/invite/electron');
          },
        },
        {
          label: 'Search Issues',
          click: async () => {
            await shell.openExternal(
              'https://github.com/electron/electron/issues'
            );
          },
        },
      ],
    },
  ];

  if (process.platform === 'darwin') template.unshift({ role: 'appMenu' });

  return Menu.buildFromTemplate(template);
};
