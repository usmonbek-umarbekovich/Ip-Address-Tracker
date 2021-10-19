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
  const API_KEY = 'at_WxCEFmGrdYUPMWLtyyuTU3JiYB9ea';

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
      setError(false);
      try {
        let res = await fetch(
          `${BASE_URL}?apiKey=${API_KEY}&ipAddress=${address}`
        );
        if (!res.ok) {
          res = await fetch(`${BASE_URL}?apiKey=${API_KEY}&domain=${address}`);
          if (!res.ok) {
            throw new Error();
          }
        }
        const data = await res.json();
        setData(data);
      } catch (_) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }

  return (
    <>
      <header className='header'>
        <div className='container'>
          <h1 className='header-title'>Ip Address Tracker</h1>
          <Search handleSearch={handleSearch} error={error} />
          <SearchResults data={data} />
        </div>
      </header>
      <div className='map-placeholder'>
        {data.location && <Map location={data.location} name={data.isp} />}
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
