import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RoomCard from './roomCard';

function RoomCardListing() {
    return (
        <Container>

            <Row>
                <Col><RoomCard /></Col>
                <Col><RoomCard /></Col>
                <Col><RoomCard /></Col>

            </Row>
        </Container>
    );
}

export default RoomCardListing;