import React, { Component } from 'react';
import About from './about';
import Customers from './customers';

class Home extends Component {
    constructor(props) {
      super(props);
  
  }

    render() {
      return (
      <div>
         <About/>
         <Customers/>
      </div>
      );
    }
  }
  
  export default Home;
  