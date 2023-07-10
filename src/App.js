import React from 'react';
import { BrowserRouter as Router, Switch, Route ,useLocation} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import UserDetailsPage from './components/UserDetailsPage';
import ProfileDetailsPage from './components/ProfileDetailsPage';
import NavBar from './components/NavBar';
import RouteGuard from './components/RouteGuard';
import { useSelector } from 'react-redux';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
     <div>
      {!isLoginPage && <NavBar  />} {/* Render NavBar only if isLoggedIn is true */}
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <RouteGuard path="/home" component={HomePage} />
          <RouteGuard path="/user-details/:userId" component={UserDetailsPage} />
          <RouteGuard path="/profile-details" component={ProfileDetailsPage} />
        </Switch>
      </div>
    </>
  );
};

export default App;
