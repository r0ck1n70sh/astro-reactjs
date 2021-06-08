import { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';

import Apod from './pages/Apod';
import ImageSearch from './pages/ImageSearch';

var NASA_LOGO = 'https://www.pngfind.com/pngs/m/299-2995596_nasa-logo-photo-nasa-logo-1-1-hd.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='navbar'>
          <div>
            <a href='https://api.nasa.gov/' target='_blank'><img src={NASA_LOGO} className='img-logo'/></a>
          </div>
          <div>
            <Link to='/apod'>APOD</Link>
          </div>
          <div>
            <Link to='/searchImage'>Images</Link>
          </div>
        </div>

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
