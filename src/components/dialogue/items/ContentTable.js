import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Constants
import { BASE_IMG_URL } from '../../../constants/constants';
// Material Components
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  divider: {
    margin: '20px auto',
  },
  textChipBadge: {
    marginTop: '5px',
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

class ContentTable extends React.Component {

  render() {
    const { classes, data, dataGeneral } = this.props;

    return (
      <Typography variant="body1" component="div">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component="th">{dataGeneral.thTitleOne}</TableCell>
              <TableCell component="th">{dataGeneral.thTitleTwo}</TableCell>
              <TableCell component="th" align="right">{dataGeneral.thTitleThree}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.usage && (
              data.usage.map(row => (
                <TableRow key={row.id} className={classes.dataRow}>
                  <TableCell scope="row" width="70">
                    <img src={BASE_IMG_URL+row.img} alt={row.upgrade} />
                  </TableCell>
                  <TableCell scope="row">
                    {row.upgrade}
                  </TableCell>
                  <TableCell align="right"><TextChip label={row.qty}></TextChip></TableCell>
                </TableRow>
              ))
            )}
            {data.upgrades && (
              data.upgrades.map(row => (
                <TableRow key={row.id} className={classes.dataRow}>
                  <TableCell scope="row" width="70">
                    <img src={BASE_IMG_URL+row.img} alt={row.upgrade} />
                  </TableCell>
                  <TableCell scope="row">
                    {row.upgrade}
                  </TableCell>
                  <TableCell align="right"><TextChip label={row.tier}></TextChip></TableCell>
                </TableRow>
              ))
            )}
            {data.materials && (
              data.materials.map(row => (
                <TableRow key={row.id} className={classes.dataRow}>
                  <TableCell scope="row" width="70">
                    <img src={BASE_IMG_URL+row.img} alt={row.material} />
                  </TableCell>
                  <TableCell scope="row">
                    {row.item}
                  </TableCell>
                  <TableCell align="right"><TextChip label={row.qty}></TextChip></TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Typography>
    )
  }
}

ContentTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentTable);