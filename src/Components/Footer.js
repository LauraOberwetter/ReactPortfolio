import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
    return(
        // adjust the margin top to be different size probably
        <footer className="mt-5"> 
            <Container fluid={true}>
                <Row className='border-top justify-content-between p-3'>
                    {/* padding 0, column size chagnes based on viewport (3/12) */}
                    <Col className='d-flex justify-content-beginning'> 
                    Website Created by Laura Oberwetter
                    </Col>
                    <Col className='d-flex justify-content-end'> 
                    © 2021
                    </Col>
                </Row>
            </Container>

        </footer>
    )

}

export default Footer;