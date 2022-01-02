import { build } from 'electron-builder';

build({
  config: {
    appId: 'com.example.app',
    productName: 'Electron React TS',
    copyright: '© 2020 example.com',
    artifactName: '${name}-${version}-${platform}-${arch}.${ext}',
    files: ['dist/**/*'],
    directories: {
      output: 'release',
      buildResources: 'assets',
    },
    win: {
      icon: 'assets/icon.ico',
    },
    mac: {
      identity: null,
      icon: 'assets/icon.icns',
    },
    linux: {
      category: 'Utility',
    },
  },
})
  .then(() => console.log('Completed.'))
  .catch((err) => console.log(err));
