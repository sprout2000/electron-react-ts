# electron-react-ts

<img src="https://user-images.githubusercontent.com/52094761/154874997-a6fea4fa-49da-46c6-9b54-6f0f0d4cf6d2.svg#gh-light-mode-only">
<img src="https://user-images.githubusercontent.com/52094761/154875034-abe01e30-6a82-4e55-928e-c31d88c39b07.svg#gh-dark-mode-only">

An [Electron](https://www.electronjs.org/) boilerplate with hot reloading for [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/).

![GitHub last commit](https://img.shields.io/github/last-commit/sprout2000/electron-react-ts)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/sprout2000/electron-react-ts/dev/electron)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/sprout2000/electron-react-ts/react)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/sprout2000/electron-react-ts/dev/typescript)

## :green_book: Usage

```sh
$ git clone https://github.com/sprout2000/electron-react-ts.git
$ cd electron-react-ts
$ npm install

# on development
$ npm run dev

# on production
$ npm run build
```

_NOTE: You will need to have [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) installed._

## :package: How to package your app to share?

Use [electron-builder](https://www.electron.build/).

```sh
npm install --save-dev electron-builder
```

Here's a sample script `builder.ts` for electron-builder:

```typescript
import { build } from "electron-builder";

build({
  config: {
    appId: "com.Electron.ElectronApp",
    productName: "Electron App",
    artifactName: "${productName}-${version}-${platform}-${arch}.${ext}",
    directories: {
      output: "release",
    },
    files: [
      "dist/**/*",
      "!node_modules/@types/node",
      "!node_modules/@types/react",
      "!node_modules/@types/react-dom",
      "!node_modules/cross-env",
      "!node_modules/css-loader",
      "!node_modules/electronmon",
      "!node_modules/html-webpack-plugin",
      "!node_modules/mini-css-extract-plugin",
      "!node_modules/npm-run-all",
      "!node_modules/rimraf",
      "!node_modules/ts-loader",
      "!node_modules/ts-node",
      "!node_modules/typescript",
      "!node_modules/wait-on",
      "!node_modules/webpack",
      "!node_modules/webpack-cli",
    ],
  },
});
```

And then run the script above...

```sh
npx ts-node ./builder.ts
```

See [Common Configuration](https://www.electron.build/configuration/configuration) for more details about the setup.
