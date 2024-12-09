export interface IElectronAPI {
  updateTitle: (arg: number) => Promise<void>;
}

declare global {
  interface Window {
    myAPI: IElectronAPI;
  }
}
