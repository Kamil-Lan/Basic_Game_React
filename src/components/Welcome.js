import React from 'react';

class Welcome extends React.Component {
    constructor(props){
      super(props);
  
      this.x = 5;
    }
  
    render(){
      return <h1>{this.x}</h1>;
    }
  }

  export default Welcome;