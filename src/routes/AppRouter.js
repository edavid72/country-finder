import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import AboutPage from '../views/AboutPage';
import DetailsPage from '../views/DetailsPage';
import MainPage from '../views/MainPage';
import SearchPage from '../views/SearchPage';

const AppRouter = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/searchpage" component={SearchPage} />
            <Route exact path="/aboutpage" component={AboutPage} />
            <Route exact path="/detailspage/:country" component={DetailsPage} />

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
