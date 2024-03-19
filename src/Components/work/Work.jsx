import React from 'react'
import './work.css'
import { Container, Row, Col } from 'react-bootstrap';
import { FaLongArrowAltRight } from "react-icons/fa";
// import Sl from "../../assets/wr.png"

const Work = () => {
    return (
        <section id='work_main'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="work_left">
                            <h4>How we work</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <Col lg={3}>
                                <div className="vo">
                                    <a href="#">Get in touch with us<FaLongArrowAltRight /></a>
                                </div>
                            </Col>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="work_right">
                          
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Work
