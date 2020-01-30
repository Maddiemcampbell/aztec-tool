import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Machines from "./machines";
import Services from "./services";
import Contact from "./contact";

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
  