import { build } from 'electron-builder';

build({
  config: {
    appId: 'com.example.app',
    productName: 'Sample',
    copyright: '© 2020 example.com',
    artifactName: 'Sample-${version}-${platform}-${arch}.${ext}',
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
      artifactName: 'Sample-${version}-installer.${ext}',
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
