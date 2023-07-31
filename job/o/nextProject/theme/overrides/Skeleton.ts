import { Theme } from '@mui/material/styles';

export default function Skeleton(theme: Theme): object {
  return {
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
  };
}
