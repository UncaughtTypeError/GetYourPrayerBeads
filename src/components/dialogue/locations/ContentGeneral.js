import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Constants
import { BASE_IMG_URL } from '../../../constants/constants';
// Material Components
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

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

const styles = theme => ({
  root: {
    width: '100%',
  },
  typoAnno: {
    display: 'block',
  },
  typoAvatar: {
    float: 'left',
    marginRight: '16px',
  },
  typoAnnoIcon: {
    verticalAlign: 'middle',
    marginRight: '5px',
  },
  divider: {
    margin: '20px auto',
  },
  dataRow: {
    '&:last-of-type .MuiTableCell-root': {
      border: 0,
    }
  },
});

class ContentGeneral extends React.Component {

  render() {
    const { classes, data } = this.props;

    return (
      <Typography align="left" variant="body2" component="div" gutterBottom={false}>
        <Typography color="textSecondary" component="div" gutterBottom={true}>
          {data.procurement && ( 
              <Tooltip title={data.procurement} placement="left">
                <Avatar className={classes.typoAvatar}>
                  {data.procurement === 'Rewarded' && (<NewReleasesIcon />)}
                  {data.procurement === 'Discovered' && (<SearchIcon />)}
                  {data.procurement === 'Purchased' && (<MonetizationOnIcon />)}
                  {data.procurement === 'Hunted' && (<MyLocationIcon />)}
                </Avatar>
              </Tooltip>
          )}
          {data.description}
        </Typography>
        {data.requirement && (
            <Typography className={classes.typoAnno} align="left" variant="caption" gutterBottom={false} color="textSecondary">
              <WarningIcon className={classes.typoAnnoIcon} /> 
              {data.requirement}
            </Typography>
          )
        }
        {data.note && (
            <Typography className={classes.typoAnno} align="left" variant="caption" gutterBottom={false} color="textSecondary">
              <InfoIcon className={classes.typoAnnoIcon} /> 
              {data.note}
            </Typography>
          )
        }
        {data.reward && (
            <React.Fragment>
              <Divider className={classes.divider} />
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell component="th">Reward</TableCell>
                    <TableCell component="th">Title</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={classes.dataRow}>
                    <TableCell scope="row" width="70">
                      <img src={BASE_IMG_URL+data.reward.reward_img} alt={data.reward.reward_title} />
                    </TableCell>
                    <TableCell scope="row">
                      {data.reward.reward_title}
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.dataRow}>
                    <TableCell scope="row" colspan="2">
                      <Typography variant="body2" color="textSecondary">
                        {data.reward.reward_description}
                      </Typography>
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