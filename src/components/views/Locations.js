import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Material Components
import Grid from '@material-ui/core/Grid';
// Components
import LocationDetails from './LocationDetails';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  griditem: {
    padding: theme.spacing(2),
  }
});

function DataLocationCard(props) {
  const { classes, data, dataGeneral } = props;

  return (
    <div>
      <Grid container justify="center" spacing={4}>
        {data.map(data => (
          <Grid item xs={12} sm={12} md={6} className={classes.griditem} key={data.id}>
            <LocationDetails 
              data={data}
              dataGeneral={dataGeneral}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

DataLocationCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataLocationCard);