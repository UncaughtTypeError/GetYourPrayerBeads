import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Constants
import { BASE_IMG_URL, THUMBNAILS_FILE_PATH } from '../../../constants/constants';
// Material Components
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import NewReleasesIcon from '@material-ui/icons/NewReleases';
import SearchIcon from '@material-ui/icons/Search';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';

const styles = theme => ({
  listText: {
    padding: `0 16px`,
    '& .MuiListItemText-primary': {
      fontWeight: `bold`,
      fontSize: `1.3em`,
    },
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
  avatarIcon: {
    margin: '0 10px 10px 0',
    float: 'left',
  },
  inlineTitle: {
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
  },
  dataRow: {
    '&:last-of-type .MuiTableCell-root': {
      border: 0,
    }
  },
});

const TextChip = withStyles({
  root:  {
    height: '22px',
    marginRight: 5,
  },
  label: {
    paddingLeft: '8px',
    paddingRight: '8px',
  }
})(Chip);

class ContentGeneral extends React.Component {

  render() {
    const { classes, data, dataGeneral } = this.props;

    return (
      <Typography variant="body1" component="div">
        {data.description}
        <List className={classes.listAnno}>
          {data.cost && (
            <ListItem divider={true}>
              <Typography className={classes.typoAnno} align="left" variant="caption" gutterBottom={false} color="textSecondary" component="div">
                <TextChip label={data.cost}></TextChip>
                Spirit Emblem Cost
              </Typography>
            </ListItem>
          )}
          {data.sen && (
            <ListItem divider={true}>
              <Typography className={classes.typoAnno} align="left" variant="caption" gutterBottom={false} color="textSecondary" component="div">
                <MonetizationOnIcon className={classes.typoAnnoIcon} /> 
                {data.sen} Sen
              </Typography>
            </ListItem>
            )
          }
          {data.count && (
            <ListItem divider={true}>
              <Typography className={classes.typoAnno} align="left" variant="caption" gutterBottom={false} color="textSecondary" component="div">
                <TextChip label={data.count}></TextChip>
                {dataGeneral.countname}
              </Typography>
            </ListItem>
          )}
          {data.requirement && (
            <ListItem divider={true}>
              <Typography className={classes.typoAnno} align="left" variant="caption" gutterBottom={false} color="textSecondary" component="div">
                <WarningIcon className={classes.typoAnnoIcon} /> 
                {data.requirement}
              </Typography>
            </ListItem>
            )
          }
          {data.note && (
            <ListItem divider={true}>
              <Typography className={classes.typoAnno} align="left" variant="caption" gutterBottom={false} color="textSecondary" component="div">
                <InfoIcon className={classes.typoAnnoIcon} /> 
                {data.note}
              </Typography>
            </ListItem>
            )
          }
          {data.utility && (
            <ListItem divider={true}>
              <Typography className={classes.typoAnno} align="left" variant="caption" gutterBottom={false} color="textSecondary" component="div">
                <CheckCircleIcon className={classes.typoAnnoIcon} /> 
                {data.utility}
              </Typography>
            </ListItem>
            )
          }
          {data.effect && (
            <ListItem divider={true}>
              <Typography className={classes.typoAnno} align="left" variant="caption" gutterBottom={false} color="textSecondary" component="div">
                <OfflineBoltIcon className={classes.typoAnnoIcon} /> 
                {data.effect}
              </Typography>
            </ListItem>
            )
          }
          {data.type && (
            <ListItem divider={true}>
              <Typography className={classes.typoAnno} align="left" variant="caption" gutterBottom={false} color="textSecondary" component="div">
                <InfoIcon className={classes.typoAnnoIcon} /> 
                {data.type}
              </Typography>
            </ListItem>
            )
          }
        </List>
        {data.procurement !== 'Various' && data.procurement && ( 
          <Typography variant="body2" gutterBottom={false}>
            <Divider className={classes.divider} />
            <Tooltip title={data.procurement} placement="left">
              <Avatar className={classes.avatarIcon}>
                {data.procurement === 'Rewarded' && (<NewReleasesIcon />)}
                {data.procurement === 'Discovered' && (<SearchIcon />)}
                {data.procurement === 'Purchased' && (<MonetizationOnIcon />)}
                {data.procurement === 'Hunted' && (<MyLocationIcon />)}
              </Avatar>
            </Tooltip>
          </Typography>
        )}
        {data.find && (
          <Typography variant="body2">
            <strong className={classes.inlineTitle}>Find it:</strong> {data.find}
          </Typography>
          )
        }
        {data.collect && (
            <List className={classes.listAnno}>
              {data.collect.map(item => (
                <ListItem 
                  divider={true} 
                  disableGutters={true} 
                  key={item.id}
                >
                  <Typography className={classes.typoAnno} align="left" variant="caption" gutterBottom={false} color="textSecondary" component="div">
                    {item.procurement && (
                        <Typography variant="body2" gutterBottom={false}>
                          <Tooltip title={item.procurement} placement="left">
                            <Avatar className={classes.avatarIcon}>
                              {item.procurement === 'Rewarded' && (<NewReleasesIcon />)}
                              {item.procurement === 'Discovered' && (<SearchIcon />)}
                              {item.procurement === 'Purchased' && (<MonetizationOnIcon />)}
                              {item.procurement === 'Hunted' && (<MyLocationIcon />)}
                            </Avatar>
                          </Tooltip>
                        </Typography>
                      )
                    }
                    <ListItemText className={classes.listText} primary={item.location} secondary={item.find} />
                  </Typography>
                </ListItem>
              ))}
            </List>
          )
        }
        {data.parent && (
            <React.Fragment>
              <Divider className={classes.divider} />
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell component="th" colspan="2">Base Prosthetic</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={classes.dataRow}>
                    <TableCell scope="row" width="70">
                      <img src={BASE_IMG_URL+THUMBNAILS_FILE_PATH+data.parent.parent_img} alt={data.parent.parent_title} />
                    </TableCell>
                    <TableCell scope="row">
                      {data.parent.parent_title}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </React.Fragment>
          )
        }
      </Typography>
    )
  }
}

ContentGeneral.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentGeneral);