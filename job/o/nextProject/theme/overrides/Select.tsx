import { Theme } from '@mui/material/styles';
import { InputSelectIcon } from './CustomIcons';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Select(theme: Theme): object {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: InputSelectIcon,
      },
    },
  };
}
