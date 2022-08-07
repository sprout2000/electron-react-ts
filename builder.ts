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
      artifactName: '${productName}-${version}-installer.${ext}',
    },
    mac: {
      identity: null,
      target: ['default'],
      icon: 'assets/icon.icns',
    },
  },
});
