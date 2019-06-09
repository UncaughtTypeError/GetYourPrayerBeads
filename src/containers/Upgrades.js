import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Constants
import { UPGRADES_FILE_PATH } from '../constants/constants';
// Components
import PageTitle from '../components/PageTitle';
import Items from '../components/views/Items';
import { FiltersProvider } from '../components/FiltersContext';
// Utils
import { upgrades, upgradesGen, upgradesFilters } from '../utils/items/upgrades';

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

function Upgrades(props) {
  const { classes } = props;
  const pagetitle = 'Upgrades';

  return (
    <div className={classes.root}>
      <PageTitle pagetitle={pagetitle} />
      <div className={classes.wrapper}>
        <FiltersProvider dataFilters={upgradesFilters}>
          <Items data={upgrades} dataGeneral={upgradesGen} dataFilePath={UPGRADES_FILE_PATH} />
        </FiltersProvider>
      </div>
    </div>
  );

}

Upgrades.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Upgrades);