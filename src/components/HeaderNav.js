import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
// Material Components
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    height: 'auto',
    '& a': {
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
    '& .MuiTypography-root': {
      background: 'transparent',
      padding: '0 10px',
      transition: '.3s',
      fontSize: '0.875rem',
    },
  },
  activeNavlink: {
    '& .MuiTypography-root': {
      background: theme.palette.primary.main,
      color: '#fff',
    }
  },
  active: {}
});

class HeaderNav extends React.Component {
  state = {
    route: '/',
  };

  updateRoute = (event, route) => {
    let newRoute = event.currentTarget.attributes.route.nodeValue;
    this.setState({ route: newRoute });
  };

  render() {
    const { classes } = this.props;
    const prayerBeadsIcon = <img src='/assets/images/prayer-bead.png' alt="logo" width="50" />,
          gourdSeedsIcon = <img src='/assets/images/gourd-seed.png' alt="logo" width="50" />,
          remnantIcon = <img src='/assets/images/remnants.png' alt="logo" width="50" />,
          prostheticsIcon = <img src='/assets/images/prosthetic.png' alt="logo" width="50" />,
          treasureCarpScaleIcon = <img src='/assets/images/treasure-carp-scale.png' alt="logo" width="50" />,
          upgradesIcon = <img src='/assets/images/prosthetic-upgrades.png' alt="logo" width="50" />,
          upgradePartsIcon = <img src='/assets/images/prosthetic-upgrade-parts.png' alt="logo" width="50" />,
          upgradeMaterialIcon = <img src='/assets/images/prosthetic-upgrade-materials.png' alt="logo" width="50" />,
          specialBossIcon = <img src='/assets/images/special-bosses.png' alt="logo" width="50" />,
          keyItemsIcon = <img src='/assets/images/key-items.png' alt="logo" width="50" />;

    return (
      <div className={classes.root}>
        <Divider />
        <List>
          <NavLink exact activeClassName={classes.activeNavlink} to="/" route="/prayer-beads" onClick={this.updateRoute} color="primary">
            <ListItem button key="Prayer Beads">
              <ListItemIcon>{prayerBeadsIcon}</ListItemIcon>
              <ListItemText primary="Prayer Beads" />
            </ListItem>
          </NavLink>
          <NavLink exact activeClassName={classes.activeNavlink} to="/gourd-seeds" route="/gourd-seeds" onClick={this.updateRoute}>
            <ListItem button key="Gourd Seeds">
              <ListItemIcon>{gourdSeedsIcon}</ListItemIcon>
              <ListItemText primary="Gourd Seeds" />
            </ListItem>
          </NavLink>
          <NavLink exact activeClassName={classes.activeNavlink} to="/remnants" route="/remnants" onClick={this.updateRoute}>
            <ListItem button key="Remnants">
              <ListItemIcon>{remnantIcon}</ListItemIcon>
              <ListItemText primary="Remnants" />
            </ListItem>
          </NavLink>
          <NavLink exact activeClassName={classes.activeNavlink} to="/prosthetics" route="/prosthetics" onClick={this.updateRoute}>
            <ListItem button key="Prosthetics">
              <ListItemIcon>{prostheticsIcon}</ListItemIcon>
              <ListItemText primary="Prosthetics" />
            </ListItem>
          </NavLink>
          <NavLink exact activeClassName={classes.activeNavlink} to="/carp-scales" route="/carp-scales" onClick={this.updateRoute}>
            <ListItem button key="Carp Scales">
              <ListItemIcon>{treasureCarpScaleIcon}</ListItemIcon>
              <ListItemText primary="Carp Scales" />
            </ListItem>
          </NavLink>
          <NavLink exact activeClassName={classes.activeNavlink} to="/upgrades" route="/upgrades" onClick={this.updateRoute}>
            <ListItem button key="Upgrades">
              <ListItemIcon>{upgradesIcon}</ListItemIcon>
              <ListItemText primary="Upgrades" />
            </ListItem>
          </NavLink>
          <NavLink exact activeClassName={classes.activeNavlink} to="/upgrade-parts" route="/upgrade-parts" onClick={this.updateRoute}>
            <ListItem button key="Upgrade Parts">
              <ListItemIcon>{upgradePartsIcon}</ListItemIcon>
              <ListItemText primary="Upgrade Parts" />
            </ListItem>
          </NavLink>
          <NavLink exact activeClassName={classes.activeNavlink} to="/upgrade-materials" route="/upgrade-materials" onClick={this.updateRoute}>
            <ListItem button key="Upgrade Materials">
              <ListItemIcon>{upgradeMaterialIcon}</ListItemIcon>
              <ListItemText primary="Upgrade Materials" />
            </ListItem>
          </NavLink>
          <NavLink exact activeClassName={classes.activeNavlink} to="/special-bosses" route="/special-bosses" onClick={this.updateRoute}>
            <ListItem button key="Special Bosses">
              <ListItemIcon>{specialBossIcon}</ListItemIcon>
              <ListItemText primary="Special Bosses" />
            </ListItem>
          </NavLink>
          <NavLink exact activeClassName={classes.activeNavlink} to="/key-items" route="/key-items" onClick={this.updateRoute}>
            <ListItem button key="Key Items">
              <ListItemIcon>{keyItemsIcon}</ListItemIcon>
              <ListItemText primary="Key Items" />
            </ListItem>
          </NavLink>
        </List>
        <Divider />
      </div>
    );
  }
}

HeaderNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderNav);
