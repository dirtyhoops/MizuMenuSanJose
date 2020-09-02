import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';

import DinnerMenu from './components/pages/dinnermenu/DinnerMenu';
import LunchMenu from './components/pages/lunchmenu/LunchMenu';
import LandingPage from './components/pages/landingpage/LandingPage';
import DrinkMenu from './components/pages/drinkmenu/DrinkMenu';

// for sanjose
import LandingPageSanJose from './components/pages/landingpage/LandingPageSanJose';
import DinnerMenuSanJose from './components/pages/dinnermenu/DinnerMenuSanJose';
import LunchMenuSanJose from './components/pages/lunchmenu/LunchMenuSanJose';
import DrinkMenuSanJose from './components/pages/drinkmenu/DrinkMenuSanJose';

// Import the sass styling
import './styles/main.scss';

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className='container'>
          {/* <NavBar /> */}
          <BrowserRouter basename='/React'>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/dinner' component={DinnerMenu} />
              <Route exact path='/lunch' component={LunchMenu} />
              <Route exact path='/drinks' component={DrinkMenu} />
              {/* For San Jose */}
              <Route exact path='/sanjose' component={LandingPageSanJose} />
              <Route
                exact
                path='/sanjose/dinner'
                component={DinnerMenuSanJose}
              />
              <Route exact path='/sanjose/lunch' component={LunchMenuSanJose} />
              <Route
                exact
                path='/sanjose/drinks'
                component={DrinkMenuSanJose}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
