import { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';

import Apod from './pages/Apod';
import ImageSearch from './pages/ImageSearch';

class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to='/apod'>APOD</Link>
          </li>
          <li>
            <Link to='/searchImage'>Images</Link>
          </li>
        </ul>

        <Switch>
          <Route path='/apod'>
            <Apod />
          </Route>
          <Route path='/searchImage'>
            <ImageSearch />
          </Route>
        </Switch>
        
      </Router>
    )
  }
}

export default App;
