import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BishoftuDetails() {
    return (
        <Container>
            <Row>
                <Col>
                    <p> <strong>Kuriftu Resort & Spa Bishoftu</strong></p>
                </Col>
                <Col>
                    <p>53.7 km from Addis Ababa Bole International <br /> Airport <br />

                        Lake Bishoftu <br />

                        Ethiopia</p>
                </Col>
                <Col>
                    <p>
                        Contact us on our direct phone line 9693 <br />

                        Reception Desk +251924949494 <br />

                        Email us at booking@kurifturesorts.com
                    </p>
                </Col>
                <Col>
                <p>
                    <a href="#">Get Directions</a>
                </p>
                </Col>
            </Row>
        </Container>
    );
}

export default BishoftuDetails;