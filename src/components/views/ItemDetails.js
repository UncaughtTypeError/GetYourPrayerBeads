import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LazyLoad from 'react-lazy-load';
// Components
import DialogueBox from '../dialogue/DialogueBox';
import ContentTable from '../dialogue/items/ContentTable';
import ContentList from '../dialogue/items/ContentList';
import ContentGeneral from '../dialogue/items/ContentGeneral';
import ImageLoader from '../optimisation/ImageLoader';
// Material Components
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';

const styles = theme => ({
  card: {
    minHeight: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '320px',
    margin: 'auto',
    '& > *': {
      flex: '1 1 100%',
    }
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    margin: `auto`,
  },
  typoAnno: {
    display: 'block',
  },
  typoSummIconWrap: {
    float: 'right',
  },
  typoSummIcon: {
    verticalAlign: 'middle',
    marginLeft: '3px',
    marginTop: '3px',
  },
  divider: {
    margin: '20px auto',
  },
  textChipBadge: {
    marginTop: '5px',
  },
  lazyLoad: {
    position: 'relative',
    overflow: 'hidden',
  }
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

class ItemCard extends React.Component {

  render() {
    const { classes, data, dataGeneral, dataFilePath } = this.props;

    return (
      <Card className={classes.card}>
        <LazyLoad
          height={285}
          debounce={false}
          offsetVertical={500}
          className={classes.lazyLoad}
        >
          <ImageLoader data={data} dataFilePath={dataFilePath} />
        </LazyLoad>
        <CardContent>
          <Typography variant="subtitle1" component="h3">
            {data.title}
          </Typography>
          <Divider />
          {data.location && (
            <Typography gutterBottom variant="body2" component="h6">
              {data.location}
            </Typography>
          )}
          {(data.value || data.type || data.tier) && (
            <Typography gutterBottom variant="body2" component="h6">
              {data.value && (
                  <TextChip label={data.value} className={classes.textChipBadge}></TextChip>
                )
              }
              {data.type && (
                  <TextChip label={data.type} className={classes.textChipBadge}></TextChip>
                )
              }
              {data.tier && (
                  <TextChip label={data.tier} className={classes.textChipBadge}></TextChip>
                )
              }
            </Typography>
          )}
          {(data.utility || data.effect) && (
            <Typography className={classes.typoAnno} align="right" gutterBottom={false} color="textSecondary" component="div">
              {data.utility && (
                  <Tooltip title={data.utility} placement="top">
                    <Typography className={classes.typoSummIconWrap} component="div">
                      <CheckCircleIcon className={classes.typoSummIcon} /> 
                    </Typography>
                  </Tooltip>
                )
              }
              {data.effect && (
                  <Tooltip title={data.effect} placement="top">
                    <Typography className={classes.typoSummIconWrap} component="div">
                      <OfflineBoltIcon className={classes.typoSummIcon} /> 
                    </Typography>
                  </Tooltip>
                )
              }
            </Typography>
          )}
        </CardContent>
        <CardActions>
          {dataGeneral.btnGeneral && (
            <DialogueBox data={data} dataGeneral={dataGeneral} type="general">
              <Typography gutterBottom component="div">
                <ContentGeneral data={data} dataGeneral={dataGeneral} />
              </Typography>
            </DialogueBox>
          )}
          {dataGeneral.btnList && (
            <DialogueBox data={data} dataGeneral={dataGeneral} type="list">
              <Typography gutterBottom component="div">
                <ContentList data={data} dataGeneral={dataGeneral} />
              </Typography>
            </DialogueBox>
          )}
          {dataGeneral.btnTable && (
            <DialogueBox data={data} dataGeneral={dataGeneral} type="table">
              <Typography gutterBottom component="div">
                <ContentTable data={data} dataGeneral={dataGeneral} />
              </Typography>
            </DialogueBox>
          )}
        </CardActions>
      </Card>
    );
  }
}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemCard);