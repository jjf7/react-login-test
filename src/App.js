import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import Login from './components/Login'
import Success from './components/Success'
import Twosteep from './components/Twosteep'
function App() {
  return (

    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/success" component={Success} />
      <Route path="/twosteep" component={Twosteep} />
    </Router>

  );
}

export default App;
