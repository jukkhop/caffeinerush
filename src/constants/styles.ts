export interface ThemeProps {
  bg: string;
  fg: string;
  introFg: string;
  headerFg: string;
  linkColor: string;
}

export interface Themed {
  theme: ThemeProps;
}

interface Themes {
  dark: ThemeProps;
  light: ThemeProps;
}

export const breakpoints = {
  large: '960px',
  medium: '576px',
  small: '275px',
  mediumHeight: '641px',
};

export const themes: Themes = {
  dark: {
    bg: '#281e3b',
    fg: 'white',
    introFg: 'rgba(255, 255, 255, 0.95)',
    headerFg: 'white',
    linkColor: '#d40078',
  },
  light: {
    bg: 'white',
    fg: 'rgba(0, 0, 0, 0.8)',
    introFg: 'rgba(0, 0, 0, 0.8)',
    headerFg: 'rgba(0, 0, 0, 0.79)',
    linkColor: '#d40078',
  },
};
