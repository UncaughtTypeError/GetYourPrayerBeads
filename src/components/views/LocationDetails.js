import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LazyLoad from 'react-lazy-load';
// Components
import DialogueBox from '../dialogue/DialogueBox';
import ContentGeneral from '../dialogue/locations/ContentGeneral';
import ImageLoader from '../optimisation/ImageLoader';
// Material Components
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minHeight: '100%',
    maxWidth: '500px',
    margin: 'auto',
  },
  cardTitle: {
    padding: '16px',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '& .MuiCardHeader-title': {
      fontSize: 18,
    },
    '& .MuiCardHeader-content': {
      flex: '0 0 auto',
    },
    '& .MuiCardHeader-avatar': {
      marginRight: 0,
    }
  },
  cardContent: {
    padding: 0,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    margin: `auto`,
  },
  griditem: {
    padding: theme.spacing(2),
  },
  listAnno: {
    width: '100%',
    '& li:last-of-type': {
      border: 0,
    },
    '& .MuiButton-text': {
      margin: `0 10px`,
    }
  },
  listText: {
    padding: `0 16px`,
  },
  lazyLoad: {
    position: 'relative',
    overflow: 'hidden',
  }
});

const CounterChip = withStyles({
  root:  {
    marginLeft: '10px',
    height: '22px',
  },
  label: {
    paddingLeft: '8px',
    paddingRight: '8px',
  }
})(Chip);

const TextChip = withStyles({
  root:  {
    height: '22px',
    width: '80px',
    justifyContent: 'center',
  },
  label: {
    paddingLeft: '8px',
    paddingRight: '8px',
  }
})(Chip);

class LocationCard extends React.Component {

  render() {
    const { classes, data, dataGeneral, dataFilePath } = this.props;

    return (
      <Card 
        count={data.count}
        title={data.title}
        img={data.img}
        className={classes.card}
      >
        <CardHeader
          avatar={
            <CounterChip label={data.count}></CounterChip>
          }
          title={data.title}
          subheader={data.note && ( data.note )}
          className={classes.cardTitle}
        />
        <LazyLoad
          height={dataGeneral.thumbnailHeight}
          debounce={false}
          offsetVertical={500}
          className={classes.lazyLoad}
        >
          <ImageLoader data={data} dataFilePath={dataFilePath} />
        </LazyLoad>
        <CardContent className={classes.cardContent}>
          <List className={classes.listAnno} disablePadding={true}>
            {data.locations.map((data, index) => (
              <ListItem disableGutters={true} divider={true} dense={true} alignItems="center" key={index}>
                <ListItemText className={classes.listText} primary={data.primary} secondary={data.secondary} />
                {data.procurement && ( 
                  <Typography gutterBottom={false} variant="body2" component="h6" align="right">
                    <TextChip label={data.procurement}></TextChip>
                  </Typography>
                )}
                {dataGeneral.btnGeneral && (
                  <DialogueBox data={data} dataGeneral={dataGeneral} type="general">
                    <Typography gutterBottom component="div">
                      <ContentGeneral data={data} dataGeneral={dataGeneral} />
                    </Typography>
                  </DialogueBox>
                )}
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }
}

LocationCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocationCard);