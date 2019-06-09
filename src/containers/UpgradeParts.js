import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Components
import PageTitle from '../components/PageTitle';
import Items from '../components/views/Items';
// Utils
import { upgradeparts, upgradepartsGen } from '../utils/items/upgradeparts';

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

function UpgradeParts(props) {
  const { classes } = props;
  const pagetitle = 'Upgrade Parts';

  return (
    <div className={classes.root}>
      <PageTitle pagetitle={pagetitle} />
      <div className={classes.wrapper}>
        <Items data={upgradeparts} dataGeneral={upgradepartsGen} />
      </div>
    </div>
  );

}

UpgradeParts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpgradeParts);