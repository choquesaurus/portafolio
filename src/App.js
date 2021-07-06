import React from "react";
//import logo from './logo.svg';

import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Layout from './components/Layout/index'
import {
  Layout,
  Community,
  Home,
  Proyects,
  Error404,
  Curriculum,
} from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route className="" path="/error" component={Error404}></Route>
        {/* <Route path="/curriculum" component={Curriculum}></Route> */}
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/proyects" component={Proyects} />
            <Route path="/curriculum" component={Curriculum}></Route>
            <Route exact path="/community" component={Community} />
            <Route path="*" component={Error404}></Route>
          </Switch>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
