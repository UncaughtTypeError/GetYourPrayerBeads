import React from "react";
import PropTypes from 'prop-types';
import './ImageLoader.css';
import { withStyles } from '@material-ui/core/styles';
// Constants
import { BASE_IMG_URL } from '../../constants/constants';
// Material Components
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  card: {
    maxWidth: 345,
    minHeight: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flex: '1 1 100%',
    }
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    margin: `auto`,
  },
  progress: {
    position: 'absolute',
    margin: 'auto',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
});

const _loaded = {};

class ItemImageLoader extends React.Component {
  
  //initial state: image loaded stage 
  state = {
    loaded: _loaded[this.props.src]
  };

  //define our loading and loaded image classes
  static defaultProps = {
    loadingClassName: "img-loading",
    loadedClassName: "img-loaded"
  };

  //image onLoad handler to update state to loaded
  onLoad = () => {
    _loaded[this.props.src] = true;
    this.setState(() => ({ loaded: true }));
  };

  render() {
  
    let { classNames, loadedClassName, loadingClassName, classes, data } = this.props;

    classNames = this.state.loaded ? loadedClassName : loadingClassName;

    return (
      <React.Fragment>
        {!this.state.loaded ? <CircularProgress className={classes.progress} /> : null }
        <CardMedia
          component="img"
          classes={{ root: classNames, media: classes.media }} 
          onLoad={this.onLoad}
          height="auto"
          image={data.img && ( BASE_IMG_URL+data.img )}
          title={data.title}
          alt-title={data.title}
          loading="lazy"
        />
      </React.Fragment>
    )
  }
}

ItemImageLoader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemImageLoader);