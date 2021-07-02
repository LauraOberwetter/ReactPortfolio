import React from 'react';
import './App.css';

class App extends React.Component {

  
  constructor(props) {  //constructor gets props
    super(props); //super takes in props
    this.state = { //establish state for top level website items
        title: 'Laura Oberwetter',
        headerLinks: [ //array of objects with navbar titles/links
          {title: 'Home', path: '/'},
          {title: 'About', path: '/about'},
          {title: 'Contact', path: '/contact'},
        ]
    }
  }
  render () {
    return (
      <div>Hello</div>
      );
  }
}

export default App;
