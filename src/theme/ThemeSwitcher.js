import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Components
import { useTheme } from "./ThemeContext";
// Material Components
import IconButton from '@material-ui/core/IconButton';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  root: {
    width: '100%',
  }
};

const ThemeSwitcher = () => {

  const themeState = useTheme();

  let alternateTheme = localStorage.getItem("Inactive Theme") || 'Switch to Dark Theme';

  return (
    <Tooltip title={alternateTheme} placement="left">
      <IconButton aria-label={alternateTheme} onClick={() => themeState.toggle()}>
        <InvertColorsIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  )

}

ThemeSwitcher.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ThemeSwitcher);