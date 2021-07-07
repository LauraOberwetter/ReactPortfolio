import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Header() {
    return(
        // adjust the margin top to be different size probably
        <header className="mb-5"> 
            <Container fluid={true}>
                <Row className='headBanner border-bottom text-center vhs-flicker vhs-delay-3 vhs-duration-6 js-demo'>
                    Laura Oberwetter
                </Row>
            </Container>

        </header>
    )
}
export default Header;
