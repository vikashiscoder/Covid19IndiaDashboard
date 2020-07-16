import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import PrimarySearchAppBar from './component/primarysearchappbar';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
        <PrimarySearchAppBar></PrimarySearchAppBar>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;