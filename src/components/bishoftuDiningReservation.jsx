import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BishofDiningReservation() {
    return (
        <Container>
            <Row>
                <Col>
                    <p><strong>Make A Reservation</strong></p>
                    <p>Restaurant are open to kuriftu resort & spa guests and non- <br />residents (subject to availability)</p>
                </Col>
                <Col style={{marginLeft:'31%'}}>
                    <p>Tel: +251924949494</p>
                    <p>For reservation: +251924949494

                    </p>
                    <p>Email: booking@kurifturesorts.com

                    </p>
                </Col>
            </Row>

        </Container>
    );
}

export default BishofDiningReservation;