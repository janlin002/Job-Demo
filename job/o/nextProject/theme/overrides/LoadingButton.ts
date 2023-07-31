import { Theme } from '@mui/material/styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function LoadingButton(theme: Theme): object {
  return {
    MuiLoadingButton: {
      variants: [
        {
          props: { loading: true, loadingPosition: 'start', size: 'small' },
          style: {
            '& .MuiLoadingButton-loadingIndicatorStart': {
              left: 10,
            },
          },
        },
        {
          props: { loading: true, loadingPosition: 'end', size: 'small' },
          style: {
            '& .MuiLoadingButton-loadingIndicatorEnd': {
              right: 10,
            },
          },
        },
      ],

      styleOverrides: {
        loadingIndicatorStart: {
          left: 14,
        },
        loadingIndicatorEnd: {
          right: 14,
        },
      },
    },
  };
}
