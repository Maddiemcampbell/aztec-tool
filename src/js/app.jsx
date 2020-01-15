import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";

class App extends Component {
    constructor(props) {
      super(props);
  
  }

    render() {
      return (
      <div className="list-style">
         <Header/>
         <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Redirect from='*' to='/' />
          </Switch>
         </BrowserRouter>
         <Footer/>
      </div>
      );
    }
  }
  
  export default App;