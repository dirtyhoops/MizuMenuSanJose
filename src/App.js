import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';

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
              <Route exact path='/' component={LandingPageSanJose} />
              <Route exact path='/dinner' component={DinnerMenuSanJose} />
              <Route exact path='/lunch' component={LunchMenuSanJose} />
              <Route exact path='/drinks' component={DrinkMenuSanJose} />
            </Switch>
          </BrowserRouter>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
