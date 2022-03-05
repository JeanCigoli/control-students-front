import { devices } from './device';

export const props = {
  styles: {
    colors: {
      gray: {
        light: '#cccccc',
        medium: '#adadad',
        bold: '#808080',
      },
      blue: {
        bold: '#5A8DEE',
        medium: '#00CFDD',
        light: '#46BEB3',
      },
      red: {
        medium: '#f14e32',
      },
      green: {
        medium: '#13b811',
      },
      white: {
        normal: '#FFFFFF',
        opacity: '#FFFFFFCC',
      },
      black: {
        normal: '#293241',
        opacity: '#364559',
      },
    },
    font: {
      tiny: '0.7rem',
      small: '0.9rem',
      default: '1.1rem',
      medium: '1.5rem',
      large: '1.8rem',
      xLarge: '2.5rem',
      xxLarge: '3.5rem',
    },
    spacing: {
      shorter: '4px',
      short: '8px',
      base: '16px',
      smaller: '32px',
      tall: '64px',
    },
  },
  devices,
};

export type Theme = typeof props;
