import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Favorite from './components/Favorite';
class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home"></Route>
            <Main/>
          </Switch>
          <Switch>
            <Route exact path="/favorite"></Route>
            <Favorite/>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;