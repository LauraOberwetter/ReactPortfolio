import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Footer from './Components/Footer';

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
          {/* main nav section */}
          <nav class="container h-100">
            <div class="row menu">
              <div class="col-sm d-flex align-items-center justify-content-center red">
                <button class="animation scale-in pinkBtn">
                  <a href="#About" class="blackLink">About</a>
                  {/* or */}
                  {/* <Link className="blackLink" to="#About"></Link> */}
                </button>
              </div>
              <div class="col-sm d-flex align-items-center justify-content-center pink">
                <button class="animation scale-in redBtn">
                  <a href="#Work" class="whiteLink">Work</a>
                  {/* or */}
                  {/* <Link className="whiteLink" to="#Work"></Link> */}
                </button>
              </div>
              <div class="col-sm d-flex align-items-center justify-content-center  red">
                <button class="animation scale-in pinkBtn">
                  {/* <a href="#Contact" class="blackLink">Contact</a> */}
                  {/* or */}
                  <Link className="blackLink" to="#Contact">Contact</Link>
                </button>
              </div>
            </div>
          </nav>

          {/* footer section */}
          <Footer />

        </Container>
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
    );
  }
  
}


export default App;
