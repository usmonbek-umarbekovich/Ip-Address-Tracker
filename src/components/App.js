import 'leaflet/dist/leaflet.css';
import '../css/app.css';

import { useState, useEffect } from 'react';
import { FaCloudscale } from 'react-icons/fa';
import Search from './Search';
import SearchResults from './SearchResults';
import Map from './Map';

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const BASE_URL = 'https://geo.ipify.org/api/v2/country,city';
  const API_KEY = 'at_o0IVyHVux9lIPxQj99QfmdnmiyhvQ';

  useEffect(() => {
    async function getPersonalData() {
      const res = await fetch(`${BASE_URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setData(data);
      setLoading(false);
    }
    getPersonalData();
  }, []);

  function handleSearch(address) {
    async function getData() {
      setLoading(true);
      const res = await fetch(
        `${BASE_URL}?apiKey=${API_KEY}&ipAddress=${address}`
      );
      if (!res.ok) return setError(true);

      const data = await res.json();
      setData(data);
      setLoading(false);
    }
    getData();
  }

  return (
    <>
      <div className='container'>
        <h1>Ip Address Tracker</h1>
        <Search handleSearch={handleSearch} error={error} />
        <SearchResults data={data} />
      </div>
      <div className='map-placeholder'>
        {data.location && <Map location={data.location} />}
      </div>
      {loading && (
        <div className='loader-overlay'>
          <FaCloudscale className='loader' />
        </div>
      )}
    </>
  );
}

export default App;
