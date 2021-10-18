import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import iconUrl from '../images/icon-location.svg';

L.Marker.prototype.options.icon = L.icon({ iconUrl });

const Map = ({ location }) => {
  const { lat, lng } = location;

  return (
    <MapContainer
      center={{ lat, lng }}
      zoom={13}
      scrollWheelZoom={false}
      className='map'>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={{ lat, lng }}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
