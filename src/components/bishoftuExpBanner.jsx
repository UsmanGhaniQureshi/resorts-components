import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BishoftuExpBanner() {
    return (
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                
                <Col xs={6} md={4}>
                <h1>Waterpark</h1>
                    <p>Make a splash as you slide into the freshwater surrounding the Kuriftu Waterpark! As the biggest waterpark in East Africa, we offer a range of activities from a variety of slides to a wave pool that fits up to 300 rafts at once!

                    </p>
                    <p>Explore</p>
                    
                </Col>

                <Col xs={12} md={8}>
                <img style={{width:'100%'}} src="https://kurifturesorts.com/_nuxt/img/WaterparkF.48a36af.webp" alt="" />

                    

                </Col>
            </Row>
        </Container>
    );
}

export default BishoftuExpBanner;