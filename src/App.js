import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Wrapper from "./Components/Wrapper/index.js";


import Footer from "./Components/Footer";
import Header from "./Components/Header";
import WorkCard from "./Components/WorkCard";
import work from "./work.json";

class App extends React.Component {
  constructor(props) {
    //constructor gets props
    super(props); //super takes in props
    this.state = {
      //establish state for top level website items
      title: "Laura Oberwetter",
      headerLinks: [
        //array of objects with navbar titles/links
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      //top level information for each specific page
      home: {
        // home object
        title: "Laura Oberwetter",
        subTitle: "Portfolio",
        text: "whatever blah blah",
      },
      about: {
        // about object
        title: "About Laura",
      },
      contact: {
        // contact object
        title: "HMU",
      },
    };
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
                  <a href="#About" className="blackLink">
                    About
                  </a>
                  {/* or */}
                  {/* <Link className="blackLink" to="#About"></Link> */}
                </button>
              </div>
              <div className="col-sm d-flex align-items-center justify-content-center pink">
                <button className="animation scale-in redBtn">
                  <a href="#Work" className="whiteLink">
                    Work
                  </a>
                  {/* or */}
                  {/* <Link className="whiteLink" to="#Work"></Link> */}
                </button>
              </div>
              <div className="col-sm d-flex align-items-center justify-content-center  red">
                <button className="animation scale-in pinkBtn">
                  {/* <a href="#Contact" class="blackLink">Contact</a> */}
                  {/* or */}
                  <Link className="blackLink" to="#Contact">
                    Contact
                  </Link>
                </button>
              </div>
            </div>
          </nav>

          <Wrapper>
            {this.state.work.map((work) => (
              <WorkCard
                id={work.id}
                key={work.id}
                name={work.name}
                image={work.image}
                link={work.link}
                colclass={work.colclass}
                btnclass={work.btnclass}
                linkclass={work.linkclass}
              />
            ))}
          </Wrapper>

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
