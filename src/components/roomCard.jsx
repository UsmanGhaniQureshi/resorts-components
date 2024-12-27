import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function RoomCard() {
    return (
        <div style={{ margin: 'auto', width: '80%' }}>
            <Card style={{ width: '18rem', fontFamily: 'Neue Helvetica Medium' }}>
                <Card.Img variant="top" src='/images/s.jpg' />
                <div className='row' style={{ padding: '6px' }}>
                    <div className='col'>
                        <p>Max 3 Guests / 1 Queen or 2 Single Beds</p>

                    </div>
                    <div className='col'>

                        <img src='/images/bed_icon.png' />
                        <img src='/images/bed_icon.png' />
                        <img src='/images/double_bed.png' />



                    </div>


                </div>
                <Card.Body>


                    <h1>Deluxe Room</h1>
                </Card.Body>


            </Card>

            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'flex-end', color: '#8F8989' }}>
                <div style={{alignSelf:'center'}}><p>FROM $250/NIGHT   </p></div>
                
                <div>
                    <img src="/images/right_arrow.png" alt="" />
                </div>

            </div>
        </div>

    );
}

export default RoomCard;