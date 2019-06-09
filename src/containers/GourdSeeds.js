import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Constants
import { LOCATION_FILE_PATH } from '../constants/constants';
// Components
import PageTitle from '../components/PageTitle';
import Locations from '../components/views/Locations';
// Utils
import { gourdseeds, gourdseedsGen } from '../utils/locations/gourdseeds';

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

function GourdSeeds(props) {
  const { classes } = props;
  const pagetitle = 'Gourd Seeds';

  return (
    <div className={classes.root}>
      <PageTitle pagetitle={pagetitle} />
      <div className={classes.wrapper}>
        <Locations data={gourdseeds} dataGeneral={gourdseedsGen} dataFilePath={LOCATION_FILE_PATH} />
      </div>
    </div>
  );

}

GourdSeeds.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GourdSeeds);