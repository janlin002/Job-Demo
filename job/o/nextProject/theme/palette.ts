import { alpha } from '@mui/material/styles';

export type ColorSchema =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

type TOtherColor = {
  '01': string;
  '02': string;
  '03': string;
  '04': string;
  '05': string;
};

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface Palette {
    other: {
      other_01: TOtherColor;
      other_02: TOtherColor;
    };
    angel: PaletteColor;
  }
}

// SETUP COLORS

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const PRIMARY = {
  lighter: '#FFEDDD',
  light: '#FFB99A',
  main: '#FF7257',
  dark: '#B72C2B',
  darker: '#7A1020',
  contrastText: '#FFFFFF',
};

const SECONDARY = {
  lighter: '#CCFDF7',
  light: '#66EEF3',
  main: '#07B2D8',
  dark: '#03689B',
  darker: '#013667',
  contrastText: '#FFFFFF',
};

const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#FFFFFF',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: '#FFFFFF',
};

const WARNING = {
  lighter: '#FFF6D8',
  light: '#FFF6D8',
  main: '#FFB73D',
  dark: '#B7731E',
  darker: '#7A400B',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#FFFFFF',
};

const ANGEL = {
  main: '#FFF',
  dark: '#EEE',
  darker: '#DDD',
  contrastText: '#333',
};

const OTHER = {
  other_01: {
    '01': '#FF9B59',
    '02': '#FFB788',
    '03': '#FFCEAD',
    '04': '#FFE5D1',
    '05': '#FFF3EB',
  },
  other_02: {
    '01': '#F8F2F0',
    '02': '#FCF8F7',
  },
};

const COMMON = {
  common: { black: '#000000', white: '#FFFFFF' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  other: OTHER,
  angel: ANGEL,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette(themeMode: 'light' | 'dark') {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: { paper: '#FFFFFF', default: '#FFFFFF', neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  } as const;

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  } as const;

  return themeMode === 'light' ? light : dark;
}
