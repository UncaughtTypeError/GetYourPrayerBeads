import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Constants
import { KEY_ITEMS_FILE_PATH } from '../constants/constants';
// Components
import PageTitle from '../components/PageTitle';
import Items from '../components/views/Items';
import { FiltersProvider } from '../components/FiltersContext';
// Utils
import { keyitems, keyitemsGen, keyitemsFilters } from '../utils/items/keyitems';

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

function KeyItems(props) {
  const { classes } = props;
  const pagetitle = 'Key Items';

  return (
    <div className={classes.root}>
      <PageTitle pagetitle={pagetitle} />
      <div className={classes.wrapper}>
        <FiltersProvider dataFilters={keyitemsFilters}>
          <Items data={keyitems} dataGeneral={keyitemsGen} dataFilePath={KEY_ITEMS_FILE_PATH} />
        </FiltersProvider>
      </div>
    </div>
  );

}

KeyItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KeyItems);