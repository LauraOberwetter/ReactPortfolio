import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import WorkPage from "./Components/Work";
import ContactPage from "./Components/ContactPage";
import AboutPage from "./Components/AboutPage";
import HomePage from "./Components/HomePage";
  
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
          homepage: { // home
            title: 'home'
          },
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
          {/* main nav/home section */}

          <Route path="/" exact render={()=> <HomePage title={this.state.homepage.title}/>}/>
          <Route path="/about" exact render={()=> <AboutPage title={this.state.aboutpage.title}/>}/>
          <Route path="/work" exact render={()=> <WorkPage title={this.state.workpage.title}/>}/>
          <Route path="/contact" exact render={()=> <ContactPage title={this.state.contactpage.title}/>}/>

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
