import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Bgsvg from './assets/images/bg.svg'
import './assets/AwesomeSection.scss'

function AwesomeSection() {
    return (
        <div className="AwesomeSection">
            <div className="bgSvg">
                <img src={Bgsvg} className="img-fluid" />
            </div>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="box-main">
                            <div className="left">
                                <div>

                                </div>
                            </div>
                            <div className="right">
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>

                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default AwesomeSection
