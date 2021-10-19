import { useMap, Marker, Popup } from 'react-leaflet';

const LocationMarker = ({ position, name }) => {
  const map = useMap();
  map.flyTo(position, map.getZoom());

  return (
    <Marker position={position}>
      <Popup>{name}</Popup>
    </Marker>
  );
};

export default LocationMarker;
