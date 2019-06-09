import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Components
import PageTitle from '../components/PageTitle';
import Locations from '../components/views/Locations';
// Utils
import { prayerbeads, prayerbeadsGen } from '../utils/locations/prayerbeads';

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

function PrayerBeads(props) {
  const { classes } = props;
  const pagetitle = 'Prayer Beads';

  return (
    <div className={classes.root}>
      <PageTitle pagetitle={pagetitle} />
      <div className={classes.wrapper}>
        <Locations data={prayerbeads} dataGeneral={prayerbeadsGen} />
      </div>
    </div>
  );

}

PrayerBeads.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrayerBeads);