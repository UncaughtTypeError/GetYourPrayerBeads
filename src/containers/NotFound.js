import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Components
import PageTitle from '../components/PageTitle';

const styles = () => ({
  root: {
    width: '100%',
  },
});

function NotFound(props) {
  const pagetitle = 'Not Found';

  return (
    <PageTitle pagetitle={pagetitle} />
  );

}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);