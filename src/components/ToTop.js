import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Material Components
import Fab from '@material-ui/core/Fab';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const styles = theme => ({
  scrollBtn: {
    margin: theme.spacing(1),
    position: 'fixed',
    left: '2vh',
    bottom: '-5vh',
    zIndex: '9999',
    opacity: '0',
    transition: '.3s',
    '&.scroll__Display': {
      bottom: '5vh',
      opacity: '1',
    }
  },
});

const rootContainer = document.getElementById('root');

let scrollBtnEl = null;

const scrollToTop = () => {
  let rootContainerCo = rootContainer.scrollTop;
  if (rootContainerCo > 0) {
    window.requestAnimationFrame(scrollToTop);
    rootContainer.scrollTo(0, rootContainerCo - (rootContainerCo / 8));
  }
};

rootContainer.onscroll = () => {
  if(!scrollBtnEl) {
    scrollBtnEl = document.getElementById('ToTop');
  }

  let rootContainerCo = rootContainer.scrollTop;
  
  if (rootContainerCo > 300) {
    scrollBtnEl.classList.add('scroll__Display');
  } else if (rootContainerCo < 100) {
    scrollBtnEl.classList.remove('scroll__Display');
  } 
}

class ToTop extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Fab id="ToTop" color="primary" aria-label="Back to Top" size="small" className={classes.scrollBtn} onClick={scrollToTop} >
        <ExpandLessIcon />
      </Fab>
    )
  }

}

ToTop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToTop);