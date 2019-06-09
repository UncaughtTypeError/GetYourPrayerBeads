import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Components
import { useFilters } from "../FiltersContext";
import ItemDetails from './ItemDetails';
// Material Components
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  griditem: {
    padding: theme.spacing(2),
  }
});

function DataItemCard(props) {

  const filtersState = useFilters();

  const { classes, data, dataGeneral, dataFilePath } = props;

  return (
    <div>
      <Grid container justify="center" spacing={4}>
        {data.map(data => (
          (!filtersState.allActive && filtersState.allActive !== undefined) ? 
            filtersState.filters.map(filter => (
              filter.id === data.filterId && filter.active ?
                <Grid item xs={12} sm={6} md={4} className={classes.griditem} key={data.id}>
                  <ItemDetails 
                    data={data}
                    dataGeneral={dataGeneral}
                    dataFilePath={dataFilePath}
                  /> 
                </Grid>
                : null
            )) 
          : 
          <Grid item xs={12} sm={6} md={4} className={classes.griditem} key={data.id}>
            <ItemDetails 
              data={data}
              dataGeneral={dataGeneral}
              dataFilePath={dataFilePath}
            /> 
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

DataItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataItemCard);