import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropDownToggle from './dropdownToggle';

function BuyTicketBostonPackage() {
    return (
        <div style={{ fontFamily: 'Neue Helvetica Medium', padding:'10%', display:'flex', justifyContent:'space-between', width:'100%' }}>
            <div  style={{width:'40%'}}> <img src='https://kurifturesorts.com/_nuxt/img/pai_Boston.3fabb0c.png' style={{ width: "100%" }} /> </div>
            <div  style={{width:'40%'}}>
                <h3>Packages Included

                </h3>
                <p>NATURAL FACIAL

                </p>
                <p>HAIR AND STYLE
                </p>
                <p>STEAM SAUNA JACUZZI
                </p>
                <p>HOT OIL MASSAGE 1HR
                </p>

                <p>Quantity</p>
                <DropDownToggle />

                <p>Total</p>
                <p><strong>ETB 0

                </strong></p>

                <hr />


                <button style={{ background: 'black', color: 'white' }}>Next</button>






            </div>

        </div>
    );
}

export default BuyTicketBostonPackage;