import BishoftuGiftCard from "./bishoftuGiftCard";

function BishoftuGiftListing() {
    return (
        <div>
            <h1>Featured</h1>

        <div className='bishoftuEventSec'>
            <div style={{
                width: "33%"
            }}><BishoftuGiftCard/></div>
            <div style={{
                width: "33%"
            }}><BishoftuGiftCard/></div>
            <div style={{
                width: "33%"
            }}><BishoftuGiftCard/></div>

        </div>

        </div>
    );
}

export default BishoftuGiftListing;