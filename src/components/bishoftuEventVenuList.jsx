import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResortCard from './resortCard';
import BishoftuEventVenu from './bishoftuEventVeneu';

function BishoftuEventVenuListing() {
    return (

        <div className='bishoftuEventSec'>
            <div style={{
                width: "50%"
            }}><BishoftuEventVenu /></div>
            <div style={{
                width: "50%"
            }}><BishoftuEventVenu /></div>

            <div style={{
                width: "50%"
            }}><BishoftuEventVenu /></div>
        </div>
    );
}

export default BishoftuEventVenuListing;