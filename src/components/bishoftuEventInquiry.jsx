import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BishoftuEventInquiry() {
  return (
    <Container>
     
      <Row>
        <Col><h3>Make An Enquiry</h3></Col>
        <Col><p>
No request is too great and no detail too small. We are here to assist you with all aspects of event organisation, from conception through to execution.</p></Col>
        <Col><div style={{border:'1px solid black', textAlign:'center', padding:'5px'}}>Contact us for a full proposal</div></Col>
      </Row>
    </Container>
  );
}

export default BishoftuEventInquiry;