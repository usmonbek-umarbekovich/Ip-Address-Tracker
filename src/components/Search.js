import { useState } from 'react';
import btnIcon from '../images/icon-arrow.svg';

const Search = ({ handleSearch, error }) => {
  const [address, setAddress] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    handleSearch(address);
    setAddress('');
  }

  return (
    <form onSubmit={handleSubmit} className='address-form'>
      <input
        type='text'
        placeholder='Search for any IP address or domain'
        value={address}
        className='input'
        style={{ border: error ? '2px dotted red' : 'none' }}
        onChange={e => setAddress(e.target.value)}
      />
      <button type='submit' className='btn'>
        <img src={btnIcon} alt='Submit' />
      </button>
      {error && <p className='error'>Ip Address was not found!</p>}
    </form>
  );
};

export default Search;
