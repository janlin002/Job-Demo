import { Theme } from '@mui/material/styles';

export default function Dialog(theme: Theme): object {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.dialog,
          '&.MuiPaper-rounded': {
            borderRadius: Number(theme.shape.borderRadius) * 2,
          },
          '&.MuiDialog-paperFullScreen': {
            borderRadius: 0,
          },
          '@media (max-width: 600px)': {
            margin: theme.spacing(2),
          },
          '@media (max-width: 663.95px)': {
            '&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody': {
              maxWidth: '100%',
            },
          },
        },
        paperFullWidth: {
          width: '100%',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '16px 24px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
        dividers: {
          borderTop: 0,
          borderBottomStyle: 'dashed',
          paddingBottom: '20px',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '8px 24px',
          '& > :not(:first-of-type)': {
            marginLeft: theme.spacing(1.5),
          },
        },
      },
    },
  };
}
