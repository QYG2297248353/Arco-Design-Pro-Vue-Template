/// <reference types="vue/jsx" />

interface Navigator {
  connection?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
    saveData: boolean;
    type:
      | 'bluetooth'
      | 'cellular'
      | 'ethernet'
      | 'none'
      | 'wifi'
      | 'wimax'
      | 'other'
      | 'unknown';
  };
}
