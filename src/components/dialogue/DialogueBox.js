import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// Material Components
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const Dialog = withStyles(theme => ({
  root: {
    '& .MuiPaper-rounded': {
      width: '100%',
    },
  },
}))(MuiDialog);

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

class DialogBox extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { children, data, dataGeneral, type } = this.props;

    return (
      <div>
        <Button size="small" color="default" onClick={this.handleClickOpen}>
          {type === 'general' && (
            dataGeneral.btnGeneral
          )}
          {type === 'list' && (
            dataGeneral.btnList
          )}
          {type === 'table' && (
            dataGeneral.btnTable
          )}
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="dialog-title" onClose={this.handleClose}>
            {data.primary || data.title}
          </DialogTitle>
          <DialogContent>
            {children}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="default">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DialogBox;