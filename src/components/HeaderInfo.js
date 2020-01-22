import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// Material Components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  anchorTxt: {
    textDecoration: 'underline',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
  },
});

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
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
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

function HeaderInfo(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Typography variant="caption" display="block"><em>Get Your Prayer Beads</em> <small>v1.2</small></Typography>
      <Typography variant="caption" display="block" onClick={() => setOpen(true)} className={classes.anchorTxt}>Disclaimer</Typography>
      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        open={open}
      >
        <DialogTitle id="dialog-title" onClose={() => setOpen(false)}>Disclaimer</DialogTitle>
        <DialogContent>
          <em>Get Your Prayer Beads</em>, and any subsequent versions, is/are in no way affiliated with or endorsed by FromSoftware (the developers of <em>Sekiro: Shadows Die Twice</em>) & Activision (the publishers of <em>Sekiro: Shadows Die Twice</em>). <em>Get Your Prayer Beads</em> does not imply or claim any rights to the <em>Sekiro: Shadows Die Twice</em> video game or any of its series existing or to come, including its characters, screenshots, pictures, images, videos or creations. Copyrights and trademarks for the <em>Sekiro: Shadows Die Twice</em> video game are held by their respective owners and their use is allowed under the fair use clause of the Copyright Law. The information contained in this website is for general information purposes only and all views and opinions regarding the afore mentioned properties on this site are strictly that of the site (<em>Get Your Prayer Beads</em>) unless otherwise stated and in no way reflects the views or positions of either FromSoftware or Activision.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="default">Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );

}

export default withStyles(styles)(HeaderInfo);