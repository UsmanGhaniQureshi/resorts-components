import 'bootstrap/dist/css/bootstrap.min.css';
import ResortCard from './components/resortCard';
import ResortCardListing from './components/resortCardListing';
import ResortVillageCard from './components/resortVillageCard';
import ImageGallery from './components/imageGallery';
import RoomCardListing from './components/roomCardListing';
import BishoftuDetails from './components/bishoftuDetails';
import BishoftuExpBanner from './components/bishoftuExpBanner';
import BishoftuWellFacilities from './components/bishoftuWellFacilities';
import BishofDiningReservation from './components/bishoftuDiningReservation';
import BishoftuEventVenu from './components/bishoftuEventVeneu';
import BishoftuEventVenuListing from './components/bishoftuEventVenuList';


function App() {
  return (<div>
    <ResortCardListing />
    <ResortVillageCard />
    <ImageGallery />
    <RoomCardListing />
    <BishoftuDetails/>
    <BishoftuExpBanner/>
    <BishoftuWellFacilities/>
    <BishofDiningReservation/>
    <BishoftuEventVenuListing/>
   
      
  </div>
    // <ResortCard />
    // <RoomCard />  
    // <BishoftuEventVenu/>

  );
}

export default App;
