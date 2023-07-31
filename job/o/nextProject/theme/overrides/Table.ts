import { Theme } from '@mui/material/styles';

export default function Table(theme: Theme): object {
  return {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          position: 'relative',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '.MuiTableCell-root': {
            borderBottom: 'none',
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: theme.palette.action.selected,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.neutral,
        },
        stickyHeader: {
          backgroundColor: theme.palette.background.paper,
          backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`,
        },
        paddingCheckbox: {
          paddingLeft: theme.spacing(1),
        },
      },
    },
    MuiTablePagination: {
      defaultProps: {
        backIconButtonProps: {
          size: 'small',
        },
        nextIconButtonProps: {
          size: 'small',
        },
        SelectProps: {
          MenuProps: {
            MenuListProps: {
              sx: {
                '& .MuiMenuItem-root': {
                  ...theme.typography.body2,
                },
              },
            },
          },
        },
      },

      styleOverrides: {
        toolbar: {
          height: 64,
        },
        select: {
          '&:focus': {
            borderRadius: theme.shape.borderRadius,
          },
        },
      },
    },
  };
}
