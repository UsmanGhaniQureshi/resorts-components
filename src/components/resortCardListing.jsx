import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResortCard from './resortCard';

function ResortCardListing() {
    return (
        <Container>

            <Row>
                <Col><ResortCard /></Col>
                <Col><ResortCard /></Col>
                <Col><ResortCard /></Col>

            </Row>
        </Container>
    );
}

export default ResortCardListing;