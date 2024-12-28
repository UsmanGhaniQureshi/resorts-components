import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResortCard from './resortCard';
import BishoftuEventVenu from './bishoftuEventVeneu';
import ReserveResortCard from './reserveResortCard';

function ReserevResortListing() {
    return (

        <div className='bishoftuEventSecReserve' style={{width:'80%', display:'flex', margin:'auto'}}>
            <div style={{
                width: "33%"
            }}><ReserveResortCard/></div>
            <div style={{
                width: "33%"
            }}><ReserveResortCard/></div>

            <div style={{
                width: "33%"
            }}><ReserveResortCard/></div>
        </div>
    );
}

export default ReserevResortListing;