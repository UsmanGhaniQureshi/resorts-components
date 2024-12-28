import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Divider from './divider';

function ReserveResortCard() {
    return (
        <Card style={{ width: '18rem', fontFamily:'Neue Helvetica Medium'}}>
            <Card.Img variant="top" src="https://kurifturesorts.com/_nuxt/img/awash-cover.8aba739.webp" />
            <Card.Body>
                <Card.Title className='.card_title_reserve'>Kuriftu Adventure Park Entoto </Card.Title>
                <Card.Text className='card_txt'>
                Awash, Ethiopia
                </Card.Text>
                <hr />
                <p style={{textAlign:'center', margin:'0px'}}>From $250
                </p>
                <p style={{textAlign:'center', margin:'0px'}}>Per Night

                </p>
                <p style={{textAlign:'center', margin:'0px'}}>Including Taxes & Fees


                </p>
                
                <button style={{width:'100%', color:'white', background:'black'}}>View Rooms</button>
            </Card.Body>
        </Card>
    );
}

export default ReserveResortCard;