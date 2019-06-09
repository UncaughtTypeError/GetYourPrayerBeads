import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Constants
import { UPGRADE_MATERIALS_FILE_PATH } from '../constants/constants';
// Components
import PageTitle from '../components/PageTitle';
import Items from '../components/views/Items';
import { FiltersProvider } from '../components/FiltersContext';
// Utils
import { upgradematerials, upgradematerialsGen, upgradematerialsFilters } from '../utils/items/upgradematerials';

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

function UpgradeMaterials(props) {
  const { classes } = props;
  const pagetitle = 'Upgrade Materials';

  return (
    <div className={classes.root}>
      <PageTitle pagetitle={pagetitle} />
      <div className={classes.wrapper}>
        <FiltersProvider dataFilters={upgradematerialsFilters}>
          <Items data={upgradematerials} dataGeneral={upgradematerialsGen} dataFilePath={UPGRADE_MATERIALS_FILE_PATH} />
        </FiltersProvider>
      </div>
    </div>
  );

}

UpgradeMaterials.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpgradeMaterials);