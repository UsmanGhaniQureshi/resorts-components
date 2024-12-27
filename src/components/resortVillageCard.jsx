import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResortVillageCard() {
    return (
            <div className='resort_card' style={{fontFamily:'Neue Helvetica Medium'}}>
                <div className='resort_img'> <img src='/images/width_800.jpeg' style={{width:"100%"}} /> </div>
                <div className='resort_content'>
                <h1>Kuriftu African Village </h1>

                    <p className='village_card_txt'>Gather your loved ones and step into a world of culture and charm at Kuriftu African Village. Nestled in the heart of Ethiopia, this one-of-a-kind destination celebrates the richness of African traditions with vibrant performances, artisanal crafts, and immersive experiences all paired with warm hospitality and timeless elegance.</p>
                    <div className='resort_card_divider'> <img src="/images/card_divider.png"/> 
                    </div>
                   
                </div>
                
            </div>
    );
}

export default ResortVillageCard;