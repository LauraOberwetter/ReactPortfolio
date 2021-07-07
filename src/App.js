import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import WorkPage from "./Components/Work";
import ContactPage from "./Components/ContactPage";
import AboutPage from "./Components/Work";

  
  class App extends React.Component {
    constructor(props) {  //constructor gets props
      super(props); //super takes in props
      this.state = { //establish state for top level website items
          title: 'Laura Oberwetter',
          headerLinks: [ //array of objects with navbar titles/links
            {title: 'Home', path: '/'},
            {title: 'About', path: '/about'},
            {title: 'Work', path: '/work'},
            {title: 'Contact', path: '/contact'}
          ],
          //top level information for each specific page
          aboutpage: { // about object
            title: 'aboutMe'
          },
          workpage: { // work object
            title: 'workExamples'
          },
          contactpage: { // contact object
            title: 'HMU'
          }
      }
    }

  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Header />
          {/* main nav section */}
          <nav className="container h-100">
            <div className="row menu">
              <div className="col-sm d-flex align-items-center justify-content-center red">
                <button className="animation scale-in pinkBtn">
                  <Link className="blackLink" to="/about">About</Link>
                </button>
              </div>
              <div className="col-sm d-flex align-items-center justify-content-center pink">
                <button className="animation scale-in redBtn">
                  <Link className="whiteLink" to="/work">Work</Link>
                </button>
              </div>
              <div className="col-sm d-flex align-items-center justify-content-center  red">
                <button className="animation scale-in pinkBtn">
                  <Link className="blackLink" to="/contact">Contact</Link>
                </button>
              </div>
            </div>
          </nav>

          <Route path="/about" render={()=> <AboutPage title={this.state.aboutpage.title}/>}/>
          <Route path="/work" render={()=> <WorkPage title={this.state.workpage.title}/>}/>
          <Route path="/contact" render={()=> <ContactPage title={this.state.contactpage.title}/>}/>


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
