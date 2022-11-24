import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  apikey = process.env.REACT_APP_API_KEY;
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News
              key="general"
              pagesize={this.pageSize}
              country={"in"}
              category={"general"}
              apikey={this.apikey}
            />
          </Route>
          <Route exact path="/business">
            <News
              key="business"
              pagesize={this.pageSize}
              country={"in"}
              category={"business"}
              apikey={this.apikey}
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              key="entertainment"
              pagesize={this.pageSize}
              country={"in"}
              category={"entertainment"}
              apikey={this.apikey}
            />
          </Route>
          <Route exact path="/general">
            <News
              key="general"
              pagesize={this.pageSize}
              country={"in"}
              category={"general"}
              apikey={this.apikey}
            />
          </Route>
          <Route exact path="/health">
            <News
              key="health"
              pagesize={this.pageSize}
              country={"in"}
              category={"health"}
              apikey={this.apikey}
            />
          </Route>
          <Route exact path="/science">
            <News
              key="science"
              pagesize={this.pageSize}
              country={"in"}
              category={"science"}
              apikey={this.apikey}
            />
          </Route>
          <Route exact path="/sports">
            <News
              key="sports"
              pagesize={this.pageSize}
              country={"in"}
              category={"sports"}
              apikey={this.apikey}
            />
          </Route>
          <Route exact path="/technology">
            <News
              key="technology"
              pagesize={this.pageSize}
              country={"in"}
              category={"technology"}
              apikey={this.apikey}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}