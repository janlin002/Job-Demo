import { Theme } from '@mui/material/styles';

export default function Stepper(theme: Theme): object {
  return {
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: theme.palette.divider,
        },
      },
    },
  };
}
