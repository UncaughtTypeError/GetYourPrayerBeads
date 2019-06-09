import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// Constants
import { BASE_IMG_URL } from '../constants/constants';
// Components
import HeaderNav from './HeaderNav';
import HeaderInfo from './HeaderInfo';
import ThemeSwitcher from '../theme/ThemeSwitcher';
// Material Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  headerTitle: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: 35,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 25,
    },
  },
  headerIcon: {
    verticalAlign: 'middle',
    [theme.breakpoints.down('xs')]: {
      float: 'left',
    },
  },
  appBar: {
    padding: '5px 0',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginRight: 0,
    },
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  infoHeader: {
    borderTop: `1px solid ${theme.palette.divider}`,    
    padding: '8px 16px',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
});

class MenuAppBar extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    const logo = BASE_IMG_URL+'prayer-bead.png';

    const drawer = (
      <div>
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <HeaderNav />
        <div className={classes.infoHeader}>
          <HeaderInfo />
        </div>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar 
          position="fixed" 
          color="inherit" 
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <Typography variant="h3" display="inline" color="inherit" align="left" className={classes.headerTitle}>
              Get Your Prayer Beads <img src={logo} alt="logo" width="50" className={classes.headerIcon} />
              <Typography variant="subtitle2" component="div"><em>And other things...</em></Typography>
            </Typography>
            <ThemeSwitcher />
            <IconButton 
              color="inherit" 
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Drawer
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MenuAppBar);
