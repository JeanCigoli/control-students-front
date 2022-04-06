import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    blue: {
      50: '#00CFDD22',
      100: '#00CFDDAA',
      200: '#00CFDD',
      300: '#00CFDD',
      400: '#5A8DEEAA',
      500: '#5A8DEE',
      600: '#5A8DEE',
      700: '#5A8DEE',
      800: '#5A8DEE',
      900: '#5A8DEE',
    },
  },
  config: {
    initialColorMode: 'dark',
  },
});
