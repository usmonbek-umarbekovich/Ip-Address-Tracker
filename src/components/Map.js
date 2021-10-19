import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import iconUrl from '../images/icon-location.svg';

L.Marker.prototype.options.icon = L.icon({ iconUrl });

const Map = ({ location, name }) => {
  const { lat, lng } = location;
  const position = [lat, lng];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className='map'>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <LocationMarker position={position} name={name} />
    </MapContainer>
  );
};

export default Map;
