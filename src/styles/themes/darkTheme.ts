import { DefaultTheme } from 'styled-components';

import { AppTheme } from './types';

declare module 'styled-components' {
  // eslint-disable-next-line no-shadow
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
      big: '18px',
      biggest: '20px',
    },
  },
};

export default darkTheme;
