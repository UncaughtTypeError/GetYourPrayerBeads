import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Material Components
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import WarningIcon from '@material-ui/icons/Warning';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  listText: {
    padding: `0 16px`,
    '& .MuiListItemText-primary': {
      fontWeight: `bold`,
      fontSize: `1.3em`,
    },
  },
  listPadding: {
    padding: `0 16px`,
  },
  listAnno: {
    width: '100%',
    '& li:last-of-type': {
      border: 0,
    }
  },
  typoAnno: {
    display: 'block',
  },
  typoAnnoIcon: {
    verticalAlign: 'middle',
    marginRight: '5px',
  },
  divider: {
    margin: '20px auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  expanPanExpanded: {
    boxShadow: 'none',
    '&.expanded': {
      background: theme.palette.background.default,
    }
  },
  expanPanDet: {
    flexWrap: 'wrap',
  },
});

class ContentList extends React.Component {

  render() {
    const { classes, data } = this.props;

    return (
      <React.Fragment>
        {data.obtain && (
          <ExpansionPanel className={classes.expanPanExpanded}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Find</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expanPanDet}>
              <List className={classes.listAnno}>
                {data.obtain.map(item => (
                  <ListItem 
                    divider={true} 
                    dense={true} 
                    disableGutters={true} 
                    key={item.id}
                  >
                    <Typography className={classes.typoAnno} align="left" variant="caption" gutterBottom={false} color="textSecondary" component="div">
                      <ListItemText className={classes.listText} primary={item.location} secondary={item.find} />
                      {item.requirement && (
                          <Typography className={classes.listPadding} align="left" variant="caption" gutterBottom={false} color="textSecondary" component="div">
                            <WarningIcon className={classes.typoAnnoIcon} /> 
                            {item.requirement}
                          </Typography>
                        )
                      }
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )}
        {data.farm && (
          <ExpansionPanel className={classes.expanPanExpanded}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Farm</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expanPanDet}>
              <List className={classes.listAnno}>
                {data.farm.map(item => (
                  <ListItem 
                    divider={true} 
                    dense={true} 
                    disableGutters={true} 
                    key={item.id}
                  >
                    <Typography className={classes.typoAnno} align="left" variant="caption" gutterBottom={false} color="textSecondary" component="div">
                      <ListItemText className={classes.listText} primary={item.enemy} secondary={item.location} />
                      {item.chance && (
                          <Typography className={classes.listPadding} align="left" variant="caption" gutterBottom={false} color="textSecondary">Drop: {item.chance}</Typography>
                        )
                      }
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )}
      </React.Fragment>
    )
  }
}

ContentList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentList);