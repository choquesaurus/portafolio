import React from 'react'
//import logo from './logo.svg';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
//import Layout from './components/Layout/index'
import {Layout,Community,Home,Proyects} from './components/index'
function App() {
  return (
     <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
           <Route exact path='/home' component={Home}/>
          {/* <Route exact path='/contact' component={Contact}/> */}
          <Route exact path='/proyects' component={Proyects}/>
          <Route exact path='/community' component={Community}/>
          {/* <Route exact path='/about' component={About}/> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
