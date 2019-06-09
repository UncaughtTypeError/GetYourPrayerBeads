import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// Components
import Body from './Body';
// Theme
import { ThemeProvider } from '../theme/ThemeContext.js';

class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <ThemeProvider>
          <Router>
            <Body />
          </Router>
        </ThemeProvider>
      </React.Fragment>
    );
  }

}

export default App;
