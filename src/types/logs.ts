export enum severityType {
  info = "INFO",
  warning = "Warning",
  error = "Error",
};

export type logType = { datetime: string, severity: severityType, message: string };

export type statsType = { infoLength: number, warningLength: number, errorLength: number };