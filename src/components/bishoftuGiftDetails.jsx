import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropDownToggle from './dropdownToggle';

function BishoftuGiftDetails() {
    return (
        <div className='resort_card' style={{ fontFamily: 'Neue Helvetica Medium' }}>
            <div className='resort_img'> <img src='https://kurifturesorts.com/_nuxt/img/1.6474ed2.jpg' style={{ width: "100%" }} /> </div>
            <div className='resort_content1'>
                <h3>Birthday Supreme
                </h3>
                <p>PRICE 20,000.00
                </p>

                <div style={{ display: 'flex', width: '80%', justifyContent: 'space-between' }}>
                    <p>Description</p>
                    <p>Details</p>
                </div>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, perspiciatis!

                </p>
                <p>Inclusions</p>

                <ul>
                    <li>Two nights Lorem ipsum dolor sit amet.
                    </li>
                    <li>Two nights Lorem ipsum dolor sit amet.
                    </li><li>Two nights Lorem ipsum dolor sit amet.
                    </li><li>Two nights Lorem ipsum dolor sit amet.
                    </li><li>Two nights Lorem ipsum dolor sit amet.
                    </li>
                </ul>

                <hr />

                <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between' }}>
                    <div style={{width:'100%'}}>
                        <DropDownToggle />
                    </div>

                    <button style={{ background: 'black', color: 'white' }}>Purchase</button>

                </div>




            </div>

        </div>
    );
}

export default BishoftuGiftDetails;