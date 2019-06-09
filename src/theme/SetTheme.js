// Theme
import { createMuiTheme } from '@material-ui/core/styles';

const DarkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#905a08',
    },
    type: 'dark',
  },
});

const LightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#905a08',
    },
    type: 'light',
  },
});

const SetTheme = mode => (mode === 'light' ? LightTheme : DarkTheme);

export default SetTheme;