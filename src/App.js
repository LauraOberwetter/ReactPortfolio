import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';

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
        <Container flud={true}>
          <div class="jumbotron">
            <h1 class="name text-center vhs-flicker vhs-delay-3 vhs-duration-6 js-demo">
              Laura
            </h1>
            <h1 class="name text-center vhs-flicker vhs-delay-3 vhs-duration-6 js-demo">
              Oberwetter
            </h1>
            <div class="container navContainer">
              <nav class="nav justify-content-center vhs-flicker vhs-delay-3 vhs-duration-6 js-demo">
                <a class="nav-item nav-link" href="#About">
                  About
                </a>
                <a class="nav-item nav-link" href="#work">
                  Work
                </a>
                <a class="nav-item nav-link" href="#contact">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </Container>
        <Link></Link>
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
    );
  }
  
}


export default App;
