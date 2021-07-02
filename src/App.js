import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  
  constructor(props) {  //constructor gets props
    super(props); //super takes in props
    this.state = { //establish state for top level website items
        title: 'Laura Oberwetter',
        headerLinks: [ //array of objects with navbar titles/links
          {title: 'Home', path: '/'},
          {title: 'About', path: '/about'},
          {title: 'Contact', path: '/contact'},
        ],
        //top level information for each specific page
        home: { // home object
          title: 'Laura Oberwetter',
          subTitle: 'Portfolio',
          text: 'whatever blah blah'
        },
        about: { // about object
          title: 'About Laura',
        },
        contact: { // contact object
          title: 'HMU',
        }
    }
  }
  render () {
    return (
      <Router>
        <Link></Link>
        <Switch>
          <Route></Route>
        </Switch>
        <div>Hello</div>
      </Router>
      );
  }
  
}


export default App;
