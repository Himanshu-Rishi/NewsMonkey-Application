import './App.css';

import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const apikey = process.env.REACT_APP_API_KEY;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <News
            key="general"
            pagesize={pageSize}
            country={"in"}
            category={"general"}
            apikey={apikey}
          />
        </Route>
        <Route exact path="/business">
          <News
            key="business"
            pagesize={pageSize}
            country={"in"}
            category={"business"}
            apikey={apikey}
          />
        </Route>
        <Route exact path="/entertainment">
          <News
            key="entertainment"
            pagesize={pageSize}
            country={"in"}
            category={"entertainment"}
            apikey={apikey}
          />
        </Route>
        <Route exact path="/general">
          <News
            key="general"
            pagesize={pageSize}
            country={"in"}
            category={"general"}
            apikey={apikey}
          />
        </Route>
        <Route exact path="/health">
          <News
            key="health"
            pagesize={pageSize}
            country={"in"}
            category={"health"}
            apikey={apikey}
          />
        </Route>
        <Route exact path="/science">
          <News
            key="science"
            pagesize={pageSize}
            country={"in"}
            category={"science"}
            apikey={apikey}
          />
        </Route>
        <Route exact path="/sports">
          <News
            key="sports"
            pagesize={pageSize}
            country={"in"}
            category={"sports"}
            apikey={apikey}
          />
        </Route>
        <Route exact path="/technology">
          <News
            key="technology"
            pagesize={pageSize}
            country={"in"}
            category={"technology"}
            apikey={apikey}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;