import React from 'react';

import { Navigation } from 'navigation';
import { ThemeProvider } from 'styled-components';

import { darkTheme } from 'styles/themes';

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navigation />
    </ThemeProvider>
  );
}
