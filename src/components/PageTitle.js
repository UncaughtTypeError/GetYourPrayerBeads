import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Material Components
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  pageTitle: {
    position: 'fixed',
    top: '100px',
    left: '25px',
    padding: '10px 20px',
    fontSize: '20px',
    background: 'rgba(48, 48, 48, 0.25)',
    zIndex: 9,
    color: '#fff',
    [theme.breakpoints.down('1500')]: {  
      position: 'relative',
      top: 0,
      left: 0,
      display: 'block',
      margin: 'auto',
      textAlign: 'center',
      maxWidth: 300,
      background: 'rgba(48, 48, 48, 0.72)',
    },
  },
});

function PageTitle(props) {
  const { classes, pagetitle } = props;

  return (
    <Typography variant="h1" color="textPrimary" className={classes.pageTitle}>{pagetitle}</Typography>
  );

}

PageTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageTitle);