export interface ITriggerState {
  name: string;
  initial?: any;
}

export interface ITriggerChangeState {
  name: string;
  value: any;
}

export interface ITriggerCallback {
  callback: (value: any) => void;
  dependencies: any[];
}
