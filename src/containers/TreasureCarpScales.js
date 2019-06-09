import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Constants
import { LOCATION_FILE_PATH } from '../constants/constants';
// Components
import PageTitle from '../components/PageTitle';
import Locations from '../components/views/Locations';
// Utils
import { treasurecarpscales, treasurecarpscalesGen } from '../utils/locations/treasurecarpscales';

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
});

function TreasureCarpScales(props) {
  const { classes } = props;
  const pagetitle = 'Treasure Carp Scales';

  return (
    <div className={classes.root}>
      <PageTitle pagetitle={pagetitle} />
      <div className={classes.wrapper}>
        <Locations data={treasurecarpscales} dataGeneral={treasurecarpscalesGen} dataFilePath={LOCATION_FILE_PATH} />
      </div>
    </div>
  );

}

TreasureCarpScales.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TreasureCarpScales);