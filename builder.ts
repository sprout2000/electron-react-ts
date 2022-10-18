import { build } from 'electron-builder';

build({
  config: {
    productName: 'Electron App',
    artifactName: '${productName}-${version}-${platform}-${arch}.${ext}',
    files: ['dist/**/*'],
    directories: {
      output: 'release',
      buildResources: 'assets',
    },
    win: {
      target: ['zip', 'nsis'],
      icon: 'assets/icon.ico',
    },
    nsis: {
      oneClick: false,
      perMachine: false,
      createDesktopShortcut: false,
      createStartMenuShortcut: true,
      artifactName: '${productName}-${version}-installer.${ext}',
    },
    mac: {
      identity: null,
      target: ['default'],
      icon: 'assets/icon.icns',
    },
    linux: {
      target: ['AppImage'],
      icon: 'assets/icon.icns',
    },
  },
});
