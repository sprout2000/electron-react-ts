import os from 'os';
import fs from 'fs';
import path from 'path';

export type Devtools =
  | 'JQUERY'
  | 'ANGULAR'
  | 'VUE'
  | 'VUE3'
  | 'REACT'
  | 'REDUX';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typeGuardArg = (arg: any): arg is Devtools => {
  return (
    arg !== null &&
    typeof arg === 'string' &&
    (arg === 'JQUERY' ||
      arg === 'ANGULAR' ||
      arg === 'VUE3' ||
      arg === 'VUE' ||
      arg === 'REACT' ||
      arg === 'REDUX')
  );
};

export const whichDevtools = (arg: Devtools): string => {
  switch (arg) {
    case 'JQUERY':
      return '/Default/Extensions/dbhhnnnpaeobfddmlalhnehgclcmjimi';
    case 'ANGULAR':
      return '/Default/Extensions/ienfalfjdbdpebioblfackkekamfmbnh';
    case 'VUE3':
      return '/Default/Extensions/ljjemllljcmogpfapbkkighbhhppjdbg';
    case 'VUE':
      return '/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd';
    case 'REDUX':
      return '/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd';
    case 'REACT':
      return '/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi';
    default:
      return '/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi';
  }
};

export const getExtDir = (platform: string): string => {
  if (platform === 'darwin') {
    return '/Library/Application Support/Google/Chrome';
  } else if (platform === 'win32') {
    return '/AppData/Local/Google/Chrome/User Data';
  } else {
    return '/.config/google-chrome';
  }
};

export const searchDevtools = async (arg: Devtools): Promise<string | void> => {
  if (!typeGuardArg(arg)) {
    console.log(
      'You need to select an argument from the following six choices:\n',
      '"REACT", "REDUX", "ANGULAR", "VUE", "VUE3", or "JQUERY".'
    );
    return;
  }

  const devtools = whichDevtools(arg);
  const devtoolsName = `${arg.charAt(0)}${arg.slice(1).toLowerCase()} Devtools`;
  const dirPath = path.join(os.homedir(), getExtDir(os.platform()), devtools);

  return fs.promises
    .readdir(dirPath, { withFileTypes: true })
    .then((dirents) =>
      dirents
        .filter((dirent) => dirent.isDirectory())
        .filter(({ name }) => name.match(/[0-9]*\.?[0-9]+\.[0-9]+_[0-9]+$/))
        .map(({ name }) => path.resolve(dirPath, name))
        .filter(async (dirname) =>
          fs.promises
            .access(`${dirname}${path.sep}manifest.json`)
            .catch(() =>
              console.log(`manifest.json for ${devtoolsName} is not found.`)
            )
        )
        .pop()
    )
    .then((extPath) => extPath || console.log(`${devtoolsName} is undefined.`))
    .catch(() => console.log(`${devtoolsName} is not found.`));
};
