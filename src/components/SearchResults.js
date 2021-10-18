const SearchResults = ({ data }) => {
  const {
    ip = '',
    isp = '',
    location: { city, region, postalCode, timezone = '' } = {},
  } = data;
  const locationInfo = ip ? `${city}, ${region} ${postalCode}` : '';
  const timezoneInfo = timezone ? `UTC ${timezone}` : '';

  return (
    <ul className='data-container'>
      <li className='data-item'>
        <p className='data-name'>Ip Address</p>
        <p className='data-content'>{ip}</p>
      </li>
      <li className='data-item'>
        <p className='data-name'>Location</p>
        <p className='data-content'>{locationInfo}</p>
      </li>
      <li className='data-item'>
        <p className='data-name'>Timezone</p>
        <p className='data-content'>{timezoneInfo}</p>
      </li>
      <li className='data-item'>
        <p className='data-name'>Isp</p>
        <p className='data-content'>{isp}</p>
      </li>
    </ul>
  );
};

export default SearchResults;
