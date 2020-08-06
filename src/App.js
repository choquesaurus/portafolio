import React from 'react'
//import logo from './logo.svg';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
//import Layout from './components/Layout/index'
import {Layout,Community,Home,Proyects,Error404} from './components/index'
// import aos from  'aos'
// import 'aos/dist/aos.css'


//import 'wow.js/css/libs/animate.css'


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
       
          <Route path='*' component={Error404}></Route>
          
          {/* <Route exact path='/about' component={About}/> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
