import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}
export default App;
