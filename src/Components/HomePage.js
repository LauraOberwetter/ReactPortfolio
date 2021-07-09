import React from 'react';
import { Link } from "react-router-dom";


function HomePage(props) {
    return(
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
    )

};

export default HomePage;