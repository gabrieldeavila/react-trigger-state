declare global {
  interface Window {
    REACT_TRIGGER_STATE: Record<string, unknown>;
  }
}

export * from "./trigger";
