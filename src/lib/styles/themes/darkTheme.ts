import { DefaultTheme } from 'styled-components';

import { AppTheme } from './types';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

const darkTheme: DefaultTheme = {
  colors: {
    primary: '#11bcaa',
    lightPrimary: '#4dd8d0',
    red: '#fe214d',
    background: '#212121',
    lightGray: '#e1e1e1',
    gray: '#ccc',
    mediumGray: '#666',
    darkGray: '#333',
    black: '#212121',
    white: '#f9fafb',
  },
  font: {
    sizes: {
      smallest: '10px',
      small: '12px',
      regular: '14px',
      medium: '16px',
      large: '18px',
      largest: '20px',
    },
  },
};

export default darkTheme;
