import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Components
import PrayerBeads from './PrayerBeads';
import GourdSeeds from './GourdSeeds';
import Remnants from './Remnants';
import Prosthetics from './Prosthetics';
import TreasureCarpScales from './TreasureCarpScales';
import Upgrades from './Upgrades';
import UpgradeParts from './UpgradeParts';
import UpgradeMaterials from './UpgradeMaterials';
import SpecialBosses from './SpecialBosses';
import KeyItems from './KeyItems';
import NotFound from './NotFound';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToTop from '../components/ToTop';

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100%',
    display: 'flex',
    padding: '100px 0',
    background: 'url(/assets/images/sekiro-shadows-die-twice.jpg) center top fixed',
    backgroundSize: 'cover',
    alignItems: 'start',
    flexWrap: 'wrap',
  },
});

class Body extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={PrayerBeads} />
            <Route path="/gourd-seeds" component={GourdSeeds} />
            <Route path="/remnants" component={Remnants} />
            <Route path="/prosthetics" component={Prosthetics} />
            <Route path="/carp-scales" component={TreasureCarpScales} />
            <Route path="/upgrades" component={Upgrades} />
            <Route path="/upgrade-parts" component={UpgradeParts} />
            <Route path="/upgrade-materials" component={UpgradeMaterials} />
            <Route path="/special-bosses" component={SpecialBosses} />
            <Route path="/key-items" component={KeyItems} />
            <Route component={NotFound} />
          </Switch>
          <ToTop />
          <Footer />
        </Router>
      </div>
    );
  }

}

Body.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Body);