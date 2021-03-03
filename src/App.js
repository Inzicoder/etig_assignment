import React from 'react'
import './App.css';
import HomePage from './components/sign-up/homepage/Homepage.component';
import SignIn from './components/sign-up/sign-in/form-input/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
    {/* <SignIn />
    <SignUp /> */}
    <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />   
        </Router>
    </div>
  );
}

export default App;
