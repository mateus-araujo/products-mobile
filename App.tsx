import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Navigation } from 'lib/navigation';
import { themes } from 'lib/styles';

export default function App() {
  return (
    <ThemeProvider theme={themes.lightTheme}>
      <Navigation />
    </ThemeProvider>
  );
}
