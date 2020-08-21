import React from 'react';
import { Navbar, Brand, Toggle, Collapse, Nav, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/Home.scss'
import Bgsvg from './assets/images/bg.svg'
import GetQuote from './GetQuote'
import HomeImg from './assets/images/home.png'

function Home() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="Home-element" >
            <div className="bg-svg">
                <img src={Bgsvg} className="img-fluid" />
            </div>

            <Container>
                <Row>
                    <Col md={5}>
                        <div className="left-content">
                            <h1>
                                Boost Traffic & Rank with BAHA.
                            </h1>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur xcepteur
                            </p>
                            <Button onClick={() => setModalShow(true)}>
                                GET A QUOTE
                            </Button>

                            <GetQuote
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="home-img">
                            <img src={HomeImg} className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;
