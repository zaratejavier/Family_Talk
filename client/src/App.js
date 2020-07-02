import React, { Fragment, } from 'react';
import Home from './components/shared/Home';
import NoMatch from './components/routes/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/user/FetchUser';
import ProtectedRoute from './components/routes/ProtectedRoute';
import Settings from './components/user/Settings';


const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
    <Container>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/settings" component={Settings} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
    </FetchUser>
  </Fragment>
)

export default App;
