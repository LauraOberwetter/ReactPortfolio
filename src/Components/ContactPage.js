import React from 'react';

function ContactPage(props) {
    return(
        <section id="Contact">
            <div className="card-group">
                <div className="card pinkCard">
                    <i className="fas fa-envelope"></i>
                    <div className="card-body">
                        <h5 className="card-title">Email</h5>
                        <a href="mailto:leoberwetter@gmail.com" class="btn btn-light">Go!</a>
                    </div>
                </div>
                <div className="card redCard">
                    <i className="fab fa-linkedin"></i>
                    <div className="card-body">
                        <h5 className="card-title">LinkedIn</h5>
                        <a href="https://www.linkedin.com/in/lauraoberwetter/" class="btn btn-light">Go!</a>
                    </div>
                </div>
                <div className="card pinkCard">
                    <i className="fab fa-github"></i>
                    <div className="card-body">
                        <h5 className="card-title">GitHub</h5>
                        <a href="https://github.com/LauraOberwetter" class="btn btn-light">Go!</a>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default ContactPage;