import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Constants
import { SPECIAL_BOSSES_FILE_PATH } from '../constants/constants';
// Components
import PageTitle from '../components/PageTitle';
import Locations from '../components/views/Locations';
// Utils
import { specialbosses, specialbossesGen } from '../utils/locations/specialbosses';

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

function SpecialBosses(props) {
  const { classes } = props;
  const pagetitle = 'Special Bosses';

  return (
    <div className={classes.root}>
      <PageTitle pagetitle={pagetitle} />
      <div className={classes.wrapper}>
        <Locations data={specialbosses} dataGeneral={specialbossesGen} dataFilePath={SPECIAL_BOSSES_FILE_PATH} />
      </div>
    </div>
  );
}

SpecialBosses.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpecialBosses);