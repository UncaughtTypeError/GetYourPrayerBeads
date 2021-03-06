import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Constants
import { PROSTHETICS_FILE_PATH } from '../constants/constants';
// Components
import PageTitle from '../components/PageTitle';
import Items from '../components/views/Items';
// Utils
import { prosthetics, prostheticsGen } from '../utils/items/prosthetics';

const styles = theme => ({
  root: {
    width: '100%',
  },
  wrapper: {
    maxWidth: 1020,
    margin: 'auto',
    [theme.breakpoints.down('lg')]: {
      padding: 20,
    },
  },
  pagetitle: {
    color: theme.palette.text.primary,
  }
});

function Remnants(props) {
  const { classes } = props;
  const pagetitle = 'Prosthetics';

  return (
    <div className={classes.root}>
      <PageTitle pagetitle={pagetitle} />
      <div className={classes.wrapper}>
        <Items data={prosthetics} dataGeneral={prostheticsGen} dataFilePath={PROSTHETICS_FILE_PATH} />
      </div>
    </div>
  );

}

Remnants.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Remnants);