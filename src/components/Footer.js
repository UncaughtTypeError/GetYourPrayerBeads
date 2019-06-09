import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
// Material Components
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const styles = theme => ({
  bottomNav: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    borderTop: `1px solid ${theme.palette.divider}`,
    height: 'auto',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  },
  navBase: {
    width: '100px',
    maxWidth: '100px',
    padding: '8px 0',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 80,
    },
  },
  navLabel: {
    background: 'transparent',
    padding: '0 10px',
    transition: '.3s',
    '&.MuiBottomNavigationAction-iconOnly': {
      opacity: 1,
    },
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      bottom: -100,
      padding: '0 5px',
    },
  },
  navLink: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '& .MuiBottomNavigationAction-wrapper img': {
      [theme.breakpoints.down('xs')]: {
        transition: '.3s',
        position: 'relative',
        bottom: -10,
      },
    }
  },
  activeNavlink: {
    '& .MuiBottomNavigationAction-label': {
      background: theme.palette.primary.main,
      color: '#fff',
      [theme.breakpoints.down('xs')]: {
        bottom: 0,
      },
    },
    '& .MuiBottomNavigationAction-wrapper img': {
      [theme.breakpoints.down('xs')]: {
        bottom: 0,
      },
    }
  },
});

class FooterNavigation extends React.Component {
  state = {
    route: '/',
  };

  updateRoute = (event, route) => {
    let newRoute = event.currentTarget.attributes.route.nodeValue;
    this.setState({ route: newRoute });
  };

  render() {
    const { classes } = this.props;
    const { route } = this.state;
    const prayerBeadsIcon = <img src='/assets/images/prayer-bead.png' alt="logo" width="50" />,
          gourdSeedsIcon = <img src='/assets/images/gourd-seed.png' alt="logo" width="50" />,
          remnantIcon = <img src='/assets/images/remnants.png' alt="logo" width="50" />,
          prostheticsIcon = <img src='/assets/images/prosthetic.png' alt="logo" width="50" />,
          scaleIcon = <img src='/assets/images/treasure-carp-scale.png' alt="logo" width="50" />;

    return (
      <BottomNavigation
        route={route}
        className={classes.bottomNav}
      >
        <NavLink exact activeClassName={classes.activeNavlink} className={classes.navLink} to="/" route="/prayer-beads" onClick={this.updateRoute} color="primary">
          <BottomNavigationAction classes={{ root: classes.navBase, label: classes.navLabel }} label="Prayer Beads" aria-label="Prayer Beads" icon={prayerBeadsIcon} />
        </NavLink>
        <NavLink exact activeClassName={classes.activeNavlink} className={classes.navLink} to="/gourd-seeds" route="/gourd-seeds" onClick={this.updateRoute}>
          <BottomNavigationAction classes={{ root: classes.navBase, label: classes.navLabel }} label="Gourd Seeds" aria-label="Gourd Seeds" icon={gourdSeedsIcon} />
        </NavLink>
        <NavLink exact activeClassName={classes.activeNavlink} className={classes.navLink} to="/remnants" route="/remnants" onClick={this.updateRoute}>
          <BottomNavigationAction classes={{ root: classes.navBase, label: classes.navLabel }} label="Remnants" aria-label="Remnants" icon={remnantIcon} />
        </NavLink>
        <NavLink exact activeClassName={classes.activeNavlink} className={classes.navLink} to="/prosthetics" route="/prosthetics" onClick={this.updateRoute}>
          <BottomNavigationAction classes={{ root: classes.navBase, label: classes.navLabel }} label="Prosthetics" aria-label="Prosthetics" icon={prostheticsIcon} />
        </NavLink>
        <NavLink exact activeClassName={classes.activeNavlink} className={classes.navLink} to="/carp-scales" route="/carp-scales" onClick={this.updateRoute}>
          <BottomNavigationAction classes={{ root: classes.navBase, label: classes.navLabel }} label="Scales" aria-label="Carp Scales" icon={scaleIcon} />
        </NavLink>
      </BottomNavigation>
    );
  }
}

FooterNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterNavigation);
