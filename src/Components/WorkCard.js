import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function WorkCard(props) {
    return(
        <section id="Work"> 
            <Container fluid={true}>
                <Row className="workRow">
                    <Col className={props.colclass}> 
                        <button className={props.btnclass}><a href={props.link} className={props.linkclass}>{props.name}</a></button>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default WorkCard;