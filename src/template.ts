import { MenuItemConstructorOptions, shell } from 'electron';

const isDarwin = process.platform === 'darwin';
const electronVersion = process.versions['electron'];

const editSub: MenuItemConstructorOptions['submenu'] = [
  {
    label: 'Undo',
    role: 'undo',
    accelerator: 'CmdOrCtrl+Z',
  },
  {
    label: 'Redo',
    role: 'redo',
    accelerator: isDarwin ? 'Cmd+Shift+Z' : 'Ctrl+Y',
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
  {
    label: 'Select All',
    role: 'selectAll',
    accelerator: 'CmdOrCtrl+A',
  },
];

if (isDarwin) {
  editSub.splice(6, 0, {
    label: 'Paste and Match Style',
    role: 'pasteAndMatchStyle',
    accelerator: 'Cmd+Option+Shift+V',
  });
  editSub.push(
    { type: 'separator' },
    {
      label: 'Speech',
      submenu: [
        {
          label: 'Start Speaking',
          role: 'startSpeaking',
        },
        {
          label: 'Stop Speaking',
          role: 'stopSpeaking',
        },
      ],
    }
  );
} else {
  editSub.splice(8, 0, { type: 'separator' });
}

const windowSub: MenuItemConstructorOptions['submenu'] = [
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
];

if (isDarwin) {
  windowSub.push(
    { type: 'separator' },
    {
      label: 'Bring All to Front',
      role: 'front',
    },
    { type: 'separator' },
    { role: 'window' }
  );
}

export const template: MenuItemConstructorOptions[] = [
  {
    label: 'File',
    submenu: [
      {
        label: isDarwin ? 'Close Window' : 'Exit',
        role: isDarwin ? 'close' : 'quit',
        accelerator: isDarwin ? 'Cmd+W' : undefined,
      },
    ],
  },
  {
    label: 'Edit',
    submenu: editSub,
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
    submenu: windowSub,
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'Learn More',
        click: async (): Promise<void> => {
          await shell.openExternal('https://electronjs.org');
        },
      },
      {
        label: 'Documentation',
        click: async (): Promise<void> => {
          await shell.openExternal(
            `https://github.com/electron/electron/tree/v${electronVersion}/docs#readme`
          );
        },
      },
      {
        label: 'Community Discussions',
        click: async (): Promise<void> => {
          await shell.openExternal('https://discord.com/invite/electron');
        },
      },
      {
        label: 'Search Issues',
        click: async (): Promise<void> => {
          await shell.openExternal(
            'https://github.com/electron/electron/issues'
          );
        },
      },
    ],
  },
];

if (process.platform === 'darwin') {
  template.unshift({
    label: 'Electron',
    submenu: [
      {
        label: 'About the app',
        role: 'about',
      },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      {
        label: 'Hide',
        role: 'hide',
        accelerator: 'Cmd+H',
      },
      {
        label: 'Hide Others',
        role: 'hideOthers',
        accelerator: 'Cmd+Option+H',
      },
      {
        label: 'Show All',
        role: 'unhide',
      },
      { type: 'separator' },
      {
        label: 'Quit',
        role: 'quit',
        accelerator: 'Cmd+Q',
      },
    ],
  });
}
