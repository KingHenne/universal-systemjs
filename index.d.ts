interface SystemJS {
  amdDefine(moduleName: string, loader: () => any): void;
  import(moduleName: string): Promise<any>;
}

declare const SystemJS: SystemJS;

export = SystemJS;
