export class ErrorMessage {
  id: string;
  type: ErrorMessageType;
  message: string;
  autoClose: boolean;
  keepAfterRouteChange: boolean;
  fade: boolean;

  constructor(init?: Partial<ErrorMessage>) {
    Object.assign(this, init);
  }
}

export enum ErrorMessageType {
  Success,
  Error,
  Info,
  Warning
}
