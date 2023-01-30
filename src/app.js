import LoginPage from "./login";
import SignUp from "./signUp";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import LandingPage from './landingpage';
function App() {
    return(
    <>
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUp} />
    </Router>
    </>);
}

export default App;