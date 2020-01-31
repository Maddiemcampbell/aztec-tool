import React, { Component } from 'react';
import Header from './containers/header';
import Footer from './containers/footer';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Machines from "./containers/machines";
import Services from "./containers/services";
import Contact from "./containers/contact";

class App extends Component {
    constructor(props) {
      super(props);
  
  }

    render() {
      return (
      <div>
         <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/machines" component={Machines}/>
            <Route exact path="/services" component={Services}/>
            <Route exact path="/contact" component={Contact}/>
            <Redirect from='*' to='/' />
          </Switch>
         <Footer/>
      </div>
      );
    }
  }
  
  export default App;
  