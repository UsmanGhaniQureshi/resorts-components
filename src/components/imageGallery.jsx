import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ImageGallery = () => {
    return (
        <Container>
            <Row>
                <Col lg={4} md={6} className="gallery-item">
                    <img
                        src="https://images.unsplash.com/photo-1543466835-00a7907e9de1"
                        alt="Animals"
                        className="img-fluid"
                    />
                </Col>

                <Col lg={4} md={6} className="gallery-item">
                    <img
                        src="https://images.unsplash.com/photo-1552083375-1447ce886485"
                        alt="Architecture"
                        className="img-fluid"
                    />
                </Col>

                <Col lg={4} md={6} className="gallery-item">
                    <img
                        src="https://images.unsplash.com/photo-1516496636080-14fb876e029d"
                        alt="Travel"
                        className="img-fluid"
                    />
                </Col>

                <Col lg={4} md={6} className="gallery-item">
                    <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                        alt="Beach"
                        className="img-fluid"
                    />
                </Col>

                <Col lg={4} md={6} className="gallery-item">
                    <img
                        src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
                        alt="Mountains"
                        className="img-fluid"
                    />
                </Col>

                <Col lg={4} md={6} className="gallery-item">
                    <img
                        src="https://images.unsplash.com/photo-1516496636080-14fb876e029d"
                        alt="Nature"
                        className="img-fluid"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default ImageGallery;
