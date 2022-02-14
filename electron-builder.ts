import { build } from 'electron-builder';

build({
  config: {
    appId: 'com.example.app',
    productName: 'Electron React TypeScript',
    copyright: '© 2020 example.com',
    artifactName: 'ERT-${version}-${platform}-${arch}.${ext}',
    files: ['dist/**/*'],
    directories: {
      output: 'release',
      buildResources: 'assets',
    },
    win: {
      icon: 'assets/icon.ico',
      target: ['nsis', 'zip'],
    },
    nsis: {
      oneClick: false,
      installerIcon: 'assets/installer.ico',
      artifactName: 'ERT-${version}-installer.${ext}',
    },
    mac: {
      identity: null,
      target: 'default',
      icon: 'assets/icon.icns',
    },
    dmg: {
      icon: 'assets/dmg.icns',
    },
    linux: {
      category: 'Utility',
    },
  },
});
