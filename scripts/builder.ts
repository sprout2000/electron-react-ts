import { build } from 'electron-builder';

build({
  config: {
    productName: 'Sample',
    artifactName: '${productName}-${version}-${platform}-${arch}.${ext}',
    files: ['dist/**/*'],
    directories: {
      buildResources: 'assets',
      output: 'release',
    },
    win: {
      target: ['zip', 'nsis'],
    },
    nsis: {
      installerIcon: 'assets/installer.ico',
      artifactName: '${productName}-${version}-installer.${ext}',
    },
    mac: {
      identity: null,
      target: ['default'],
    },
    dmg: {
      icon: 'assets/dmg.icns',
    },
  },
});
