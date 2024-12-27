import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Divider from './divider';

function ResortCard() {
    return (
        <Card style={{ width: '18rem', fontFamily:'Neue Helvetica Medium'}}>
            <Card.Img variant="top" src="/images/card_mainImg.jpeg" />
            <Card.Body>
                <Card.Title className='card_title'>Kuriftu Adventure Park Entoto </Card.Title>
                <Card.Text className='card_txt'>
                    As the seasons change, Kuriftu Adventure Park Entoto invites you to embrace the thrill of discovery. Nestled amidst the breathtaking highlands of Ethiopia, this unique escape offers exhilarating rope courses, glamping under starry skies, and dining with panoramic mountain views—creating unforgettable moments for every adventurer.
                </Card.Text>
                <p variant="primary" className='card-btn'>Discover More</p>
                <Divider />
            </Card.Body>
        </Card>
    );
}

export default ResortCard;