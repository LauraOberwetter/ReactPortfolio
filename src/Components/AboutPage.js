import React from "react";


function AboutPage(props) {
  return (
    <section id="About">
      <div>
        <div className="card-group">
          <div className="card pinkCard">
            <i className="fas fa-user-alt"></i>
            <div className="card-body">
              <h3 className="card-title">About</h3>
              <p className="card-text">
                I'm a current student of Northwestern University's Full Stack
                Web Development Boot Camp.
              </p>
            </div>
          </div>
          <div className="card redCard">
            <i className="fas fa-book-reader"></i>
            <div className="card-body">
              <h3 class="card-title">Education</h3>
              <p class="card-text">
                University of Wisconsin-Madison<br></br>BA in Communication Arts
                with Minors in Business, Entrepreneurship, and Leadership
              </p>
            </div>
          </div>
          <div class="card pinkCard">
            <i class="fas fa-award"></i>
            <div class="card-body">
              <h3 class="card-title">Achievements</h3>
              <p class="card-text">
                Director of WUD Music<br></br>Speaker at SXSW 2017 & 2018
                <br></br>Union Trustee Leadership Award Recipiant
              </p>
            </div>
            <div class="card redCard">
              <i class="fas fa-heart"></i>
              <div class="card-body">
                <h3 class="card-title">For Fun</h3>
                <p class="card-text">
                  I love going to concerts, studying the science of scent, and
                  making spreadsheets for everything
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
