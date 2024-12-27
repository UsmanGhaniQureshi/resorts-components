import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BishoftuWellFacilities() {
  return (
    <Container>
      
      <Row>
        <Col>
        <ul>
            <li>Steam</li>
            <li>Sauna</li>
            <li>Jacuzzi</li>
        </ul>
        </Col>
        <Col>
        <ul>
            <li>Massage</li>
            <li>Manicure</li>
            <li>Pedicure</li>
        </ul>
        </Col>
        <Col>
        <ul>
            <li>Hair Style
            </li>
            <li>Barber</li>
            <li>Gym</li>
        </ul>
        </Col>
        
      </Row>
    </Container>
  );
}

export default BishoftuWellFacilities;