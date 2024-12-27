import 'bootstrap/dist/css/bootstrap.min.css';
import ResortCard from './components/resortCard';
import ResortCardListing from './components/resortCardListing';
import ResortVillageCard from './components/resortVillageCard';
import ImageGallery from './components/imageGallery';
import RoomCardListing from './components/roomCardListing';


function App() {
  return (<div>
    <ResortCardListing />
    <ResortVillageCard />
    <ImageGallery />
    <RoomCardListing />
      
  </div>
    // <ResortCard />
    // <RoomCard />  

  );
}

export default App;
